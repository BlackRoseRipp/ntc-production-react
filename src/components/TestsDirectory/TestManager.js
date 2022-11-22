import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "firebase/compat/firestore";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { auth, db } from "../../store/firebase";
import "./TestManager.css";

function TestManager() {
  const [xlsxData, setXlsxData] = useState([]);
  const [user, setUser] = useState(auth.currentUser);
  const [refreshKey, setRefreshKey] = useState(0);
  //Change showLoginForm to false when debugging
  const [showLoginForm, setShowLoginForm] = useState(true);

  const emailInput = useRef();
  const passwordInput = useRef();

  const showAlert = (msg) => {
    alert(msg);
  };

  // Fetches location data from Google Firebase
  // Refreshes whenever a successful update to the Google Firebase occurs
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setShowLoginForm(false);
      } else {
        setUser(null);
      }
    });
    setPersistence(auth, browserSessionPersistence);
  }, [refreshKey]);

  //console.log(addresses)
  //console.log(locIDs)

  /**
   * Reads imported file and runs all formatting functions.
   * Once formatting functions completed and format conditions
   * are met, the data is set to xlsxData.
   *
   * @param {file} e - Uploaded file in xlsx or csv format
   */
  const readUploadFile = async (e) => {
    if (!e.target.files[0]) {
      setXlsxData([]);
      return;
    }
    ExcelRenderer(e.target.files[0], (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        const newData = parseData(cleanData(resp.rows));
        setXlsxData(formatData(newData));
      }
    });
  };

  /**
   * Removes extra rows from the data, including whitepace
   * or rows that exceed 3 cells occupied.
   *
   * @param {Array[Array]} data
   * @return {Array[Array]}
   */
  const cleanData = (data) => {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].length > 3) {
        res.push(data[i]);
      }
    }
    //console.log(res);
    return res;
  };

  /**
   * Parses through the cleaned and formatted Excel data and
   * checks whether the data has blank time slots, if the time
   * slots are valid, and handles the formatting on the time
   * slots if necessary.
   *
   * @param {Array[Objects]} data: Object directly from formatData
   * @return {Array[Objects]} Object same format as data object but values are reformatted
   */
  const parseData = (data) => {
    const res = [data[0]];
    data.map((row, index) => {
      if (index > 0) {
        if (row[0] === res[0][0]) {
          return;
        }
        if (typeof row[4] === "number") {
          row[4] =
            row[2]?.trim() === "Hair"
              ? row[4].toString() + " pg/mg of hair"
              : row[4].toString() + " ng/mL";
        }
        if (row[2] === undefined) {
          if (index === data.length - 1) {
            if (
              data[index - 1][2] === data[index + 1][2] ||
              row[0].toLowerCase()[0] === "a"
            ) {
              row[2] = data[index - 1][2];
            } else {
              row[2] = data[index + 1][2];
            }
          } else {
            row[2] = data[index - 1][2];
          }
        }
        res.push(row);
      }
    });
    //console.log(res);
    return res;
  };

  const formatData = (data) => {
    const res = {};
    data.map((row, index) => {
      if (index > 0) {
        res[index.toString()] = {
          test: row[0]?.trim(),
          includes: row[1]?.trim(),
          specimen: row[2]?.trim(),
          method: row[3]?.trim(),
          detection: row[4]?.trim(),
        };
      }
    });
    return res;
  };

  /**
   * Handles saving the file data to the firestore.
   * Checks if xlsxData exists and is valid.
   * Checks that the provided time data is valid before adding.
   * Once conditions are passed, xlsxData overwrites all Firestore data in collection and document.
   *
   * @param {*} e
   */
  const saveTestDirectory = (e) => {
    e.preventDefault();
    if (xlsxData && !Array.isArray(xlsxData)) {
      if (user) {
        setDoc(doc(db, "ntc-lab-tests", "ntc-lab-test"), xlsxData)
          .then(() => {
            console.log("Document Updated");
            showAlert("Locations updated from excel file");
            setRefreshKey((oldKey) => oldKey + 1);
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      } else {
        showAlert("This action requires administrative access.");
      }
    }
  };
  /**
   * Handles user auth from Firebase.
   *
   * @param {*} e
   */
  const authenticateUser = (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setShowLoginForm(false);
        console.log("Logging in Success");
      })
      .catch((error) => {
        console.log(`Error ${error.code}: ${error.message} `);
        showAlert(
          "A user with the provided email and password does not have exist. Please review your credentials."
        );
      });
  };

  /**
   * Handles user log out function for session.
   *
   * @param {*} e
   */
  const handleLogout = (e) => {
    signOut(auth)
      .then(() => {
        showAlert("Successfully logged out.");
        setShowLoginForm(true);
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
        showAlert("Failed to log out.");
      });
  };

  const loginForm = (
    <div className="container" style={{ paddingTop: "15px" }}>
      <div className="row">
        <div className="col-md-6 align-self-center">
          <form onSubmit={authenticateUser}>
            <h3>Login</h3>
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="E-mail"
                ref={emailInput}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                ref={passwordInput}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  const locationManager = (
    <div className="pt-4 pb-5">
      <div className="container">
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary mb-3 px-4" onClick={handleLogout}>
            Log Out
          </button>
        </div>

        <div className="align-self-center w-100">
          <h3>Update Test Directory From File</h3>
          <p>
            To update the test directory, upload an Excel or CSV file &#40;.xlsx
            or .csv file extensions, respectively&#41; at least formatted with
            columns as such:
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="border border-dark px-4 py-2 text-center">
              <h6>Tests and Panels</h6>
            </div>
            <div className="border border-dark px-4 py-2 text-center flex-grow-1">
              <h6>Testing Includes</h6>
            </div>
            <div className="border border-dark px-4 py-2 text-center">
              <h6>Specimen</h6>
            </div>
            <div className="border border-dark px-4 py-2 text-center">
              <h6>Method</h6>
            </div>
            <div className="border border-dark px-4 py-2 text-center">
              <h6>Detection Limit</h6>
            </div>
          </div>
          <div className="my-5">
            <div>
              <p>
                The display block below will show how the data read from the
                spreadsheet will be shown on the website's{" "}
                <a href="/tests-directory">test directory page</a>. You can edit
                the file and reupload it here anytime before uploading the test
                directory's information.
              </p>
              <h5 className="my-3">WARNING:</h5>
              <p>
                The uploaded file will completely overwrite the previous test
                directory's info displayed on the website. Make sure the
                information displayed in the spreadsheet is exactly how you want
                that data displayed on the website before pressing upload.
              </p>
              <form encType="multipart/form-data" onSubmit={saveTestDirectory}>
                <label htmlFor="upload">Upload File</label>
                <div className="form-group my-3">
                  <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <button
                    type
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-5">
              <p>Response Data:</p>
              <div>
                <div
                  className="overflow-auto p-3 bg-light w-100"
                  style={{ height: "35rem" }}
                >
                  <table
                    id="dtBasicExample"
                    className="dtBasicExample table table-striped table-bordered"
                    style={{
                      border: "none",
                      borderCollapse: "collapse",
                      marginTop: "15px",
                    }}
                  >
                    <thead>
                      <tr>
                        <th>Test Name</th>
                        <th>Analyses Tested</th>
                        <th>Matrix</th>
                        <th>Method</th>
                        <th>Detection Limit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(xlsxData).map((testRow) => {
                        return (
                          <tr>
                            <td>{testRow.test}</td>
                            <td>{testRow.includes}</td>
                            <td>{testRow.specimen}</td>
                            <td>{testRow.method}</td>
                            <td>{testRow.detection}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{showLoginForm ? loginForm : locationManager}</div>;
}

export default TestManager;
