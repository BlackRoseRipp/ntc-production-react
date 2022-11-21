import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import "firebase/compat/firestore";
import {
  collection,
  deleteField,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
import { auth, db } from "../../store/firebase";
import "./TestManager.css";

function LocationManager() {
  const [xlsxData, setXlsxData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [user, setUser] = useState(auth.currentUser);
  const [refreshKey, setRefreshKey] = useState(0);
  //Change showLoginForm to false when debugging
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showAlertBox, setShowAlertBox] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const emailInput = useRef();
  const passwordInput = useRef();

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
        const newData = cleanData(resp.rows);
        console.log(newData);
        if (checkPostcode(newData)) {
          setXlsxData(newData);
        } else {
          console.log("Invalid Postal Codes from File");
          setAlertMessage(
            "Check your postal codes. At least one of them is invlaid."
          );
          setShowAlertBox(true);
        }
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
    console.log(res);
    return res;
  };

  /**
   * Takes the list of rows from the file and, formats categories and addresses,
   * and returns a list of all locations, each an object, as long as every row is saved.
   *
   * @param {Array[Array]} data
   * @return {Array[Objects]} list of all locations
   */
  const formatData = (data) => {
    const testData = {};
    const categories = data[0].map((str) => str.trim());
    console.log(categories);
    const catIndeces = {};
    for (let i = 0; i < categories.length; i++) {
      catIndeces[categories[i]] = i;
    }
    data.map((location, index) => {
      if (index !== 0) {
        console.log(index);
        console.log(formatAddress(location[catIndeces.Address].trim()));
        testData[formatAddress(location[catIndeces.Address].trim())] = {
          Location: location[catIndeces.Location].trim(),
          Address: formatAddress(location[catIndeces.Address].trim()),
          City: location[catIndeces.City].trim(),
          State: location[catIndeces.State].trim().toUpperCase(),
          Postcode: location[catIndeces.Postcode].toString().trim(),
          Monday: location[catIndeces.Monday]
            ? location[catIndeces.Monday].trim()
            : "",
          Tuesday: location[catIndeces.Tuesday]
            ? location[catIndeces.Tuesday].trim()
            : "",
          Wednesday: location[catIndeces.Wednesday]
            ? location[catIndeces.Wednesday].trim()
            : "",
          Thursday: location[catIndeces.Thursday]
            ? location[catIndeces.Thursday].trim()
            : "",
          Friday: location[catIndeces.Friday]
            ? location[catIndeces.Friday].trim()
            : "",
          Saturday: location[catIndeces.Saturday]
            ? location[catIndeces.Saturday].trim()
            : "",
          Sunday: location[catIndeces.Sunday]
            ? location[catIndeces.Sunday].trim()
            : "closed",
          LocationType: location[catIndeces.Locationtype].trim().toLowerCase(),
          //GeocodeCoords: {lat: lng},
          //GeocodeAddress:
        };
      }
    });
    if (Object.keys(testData).length === data.length - 1) {
      console.log("Hello");
      return testData;
    }
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
    const res = data;
    const allTimes = {
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
    };

    for (let add in data) {
      for (let locData in data[add]) {
        if (allTimes[locData]) {
          //Handles uppercasing all times besides "closed"
          if (data[add][locData] === "closed") {
            allTimes[locData].push(data[add][locData].replace(/\s/g, ""));
          } else {
            allTimes[locData].push(
              data[add][locData].toUpperCase().replace(/\s/g, "")
            );
          }
        }
      }
    }
    //Checks the validity of the time formats
    for (let day in allTimes) {
      for (let i = 0; i < allTimes[day].length; i++) {
        if (!checkTimeFormat(allTimes[day][i])) {
          console.log(
            "Invalid time format under " + day + " at row " + (i + 2)
          );
        }
      }
    }
    //Replaces every blank time with "closed" if there are times provided for the same day
    for (let day in allTimes) {
      if (!allTimes[day].every((time) => time === "")) {
        for (let add in res) {
          res[add][day] =
            res[add][day] === "" ? "closed" : formatTime(res[add][day]);
        }
      }
    }
    console.log(res);
    return res;
  };

  /**
   * Check validity of postcodes for Excel and manual data
   *
   * @param {Array[Objects]} data
   * @return {boolean} true if every postcode is valid
   */
  const checkPostcode = (data) => {
    const postcodes = [];
    for (let key in data) {
      postcodes.push(data[key].Postcode);
    }
    return postcodes.every((postcode) => postcode.length === 5);
  };

  /**
   * Checks validity of time formats
   *
   * @param {String} time
   * @return {boolean} true if the time is formatted correctly
   */
  const checkTimeFormat = (time) => {
    if (time.toLowerCase() === "closed" || time === "") {
      return true;
    }
    const validTimeFormat =
      /^([0-1]|)[0-9]\:[0-5][0-9][AP][M]\-([0-1]|)[0-9]\:[0-5][0-9][AP][M]?$/;

    return validTimeFormat.test(time);
  };

  /**
   * Takes a valid time as a string and removes
   * unnecessary leading 0's.
   * Returns the newly formatted tiime string.
   *
   * @param {string} time
   * @return {string}
   */
  const formatTime = (time) => {
    const timeFormat_1 =
      /^[0][0-9]\:[0-5][0-9][AP][M]\-(1|)[0-9]\:[0-5][0-9][AP][M]?$/;
    const timeFormat_2 =
      /^[1][0-9]\:[0-5][0-9][AP][M]\-[0][0-9]\:[0-5][0-9][AP][M]?$/;
    const timeFormat_3 =
      /^[0][0-9]\:[0-5][0-9][AP][M]\-[0][0-9]\:[0-5][0-9][AP][M]?$/;
    const timeFormat_4 =
      /^[0-9]\:[0-5][0-9][AP][M]\-[0][0-9]\:[0-5][0-9][AP][M]?$/;
    let res = time;
    if (timeFormat_1.test(time)) {
      res = time.slice(1);
    } else if (timeFormat_2.test(time)) {
      res = time.slice(0, 8) + time.slice(9);
    } else if (timeFormat_3.test(time)) {
      res = time.slice(1, 8) + time.slice(9);
    } else if (timeFormat_4.test(time)) {
      res = time.slice(0, 7) + time.slice(8);
    }
    return res;
  };

  /**
   * Takes address and formats it like so:
   * - Replaces certaim common words with their abbreviation
   * - Checks if numbered street has appropriate suffix
   * - Removes any information other than an address (as best as possible), such as zip code and city name.
   * Returns newly formatted address
   *
   * @param {string} address
   * @return {string}
   */
  const formatAddress = (address) => {
    let res = address.replace(/[.,]/g, "");
    res = res.replace(/[/]/g, " & ");
    //res = res.replace(/[^\s][&][^\s]/g, ' & ')
    res = res.replace(/\s{2,}/g, " ");

    const replaceWords = {
      expressway: "Expy",
      avenue: "Ave",
      boulevard: "Blvd",
      circle: "Cir",
      court: "Ct",
      crt: "Ct",
      drive: "Dr",
      lane: "Ln",
      mount: "Mt",
      highway: "Hwy",
      parkway: "Pkwy",
      place: "Pl",
      street: "St",
      east: "E",
      west: "W",
      south: "S",
      north: "N",
      road: "Rd",
    };
    const suffices = ["nd", "rd", "th"];
    let formatedAddress = [];
    res = res.replace(/[^0-9](?=[0-9])/g, "$& ");
    res = res.replace(/[0-9](?=[A-z])/g, "$& ");
    res.split(" ").forEach((str) => {
      str = str.toLowerCase().trim();
      if (replaceWords[str]) {
        formatedAddress.push(replaceWords[str]);
        return;
      }
      if (str === "") {
        return;
      }
      suffices.includes(str)
        ? formatedAddress.push(str)
        : formatedAddress.push(str);
    });

    formatedAddress.forEach((str, index) => {
      if (parseInt(str) && index + 1 < formatedAddress.length) {
        //console.log(formatedAddress[index+1])
        if (
          Object.values(replaceWords).some(
            (val) =>
              val === formatedAddress[index + 1] &&
              !["N", "S", "E", "W"].includes(formatedAddress[index + 1])
          )
        ) {
          //console.log(str)
          if (str.charAt(str.length - 1) === "1") {
            formatedAddress[index] = str + "st";
          } else if (str.charAt(str.length - 1) === "2") {
            formatedAddress[index] = str + "nd";
          } else if (str.charAt(str.length - 1) === "3") {
            formatedAddress[index] = str + "rd";
          } else {
            formatedAddress[index] = str + "th";
          }
        }
      }
      if (index === formatedAddress.length - 1) {
        if (parseInt(str) && str.length < 4) {
          let strTemp = str;
          if (str.charAt(str.length - 1) === "1") {
            strTemp = str + "st";
          } else if (str.charAt(str.length - 1) === "2") {
            strTemp = str + "nd";
          } else if (str.charAt(str.length - 1) === "3") {
            strTemp = str + "rd";
          } else {
            strTemp = str + "th";
          }
          formatedAddress[index] = strTemp + " St";
        }
      }
    });

    let newAddress = formatedAddress.map((str, index) => {
      if (
        suffices.includes(formatedAddress[index + 1]) ||
        formatedAddress[index + 1] === "st"
      ) {
        //console.log("here")
        return str + formatedAddress[index + 1];
      }
      if (!(suffices.includes(str) || str === "st")) {
        //console.log("here")
        return str;
      }
    });

    const breakIndex = newAddress.indexOf("New");

    if (breakIndex > -1) {
      newAddress = newAddress.slice(0, breakIndex);
    }
    if (
      parseInt(newAddress[newAddress.length - 1]) &&
      parseInt(newAddress[newAddress.length - 1]).toString().length > 3
    ) {
      newAddress = newAddress.slice(0, -1);
    }

    return newAddress.join(" ");
  };

  /**
   * Handles saving the file data to the firestore.
   * Checks if xlsxData exists and is valid.
   * Checks that the provided time data is valid before adding.
   * Once conditions are passed, xlsxData overwrites all Firestore data in collection and document.
   *
   * @param {*} e
   */
  const saveLocation = (e) => {
    e.preventDefault();
    if (xlsxData && !Array.isArray(xlsxData)) {
      let fileTimeCheck = true;
      for (let add in xlsxData) {
        for (let cat in xlsxData[add]) {
          if (
            [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].some((day) => day === cat)
          ) {
            if (fileTimeCheck) {
              fileTimeCheck = checkTimeFormat(xlsxData[add][cat]);
              if (!fileTimeCheck) {
                console.log("Invalid time format at " + add + " for " + cat);
              }
            }
          }
        }
      }
      if (fileTimeCheck) {
        setDoc(doc(db, "locations", "locs"), xlsxData)
          .then(() => {
            console.log("Document Updated");
            setAlertMessage("Locations updated from excel file");
            setShowAlertBox(true);
            setRefreshKey((oldKey) => oldKey + 1);
          })
          .catch((error) => {
            console.error("Error updating document: ", error);
          });
      } else {
        setAlertMessage(
          "One of your provided times has an invalid format. Please check your provided operation hours."
        ); // TODO: Figure out how to get fields to look different
        setShowAlertBox(true);
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
        setAlertMessage(
          "A user with the provided email and password does not have exist. Please review your credentials."
        );
        setShowAlertBox(true);
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
        setAlertMessage("Successfully logged out.");
        setShowLoginForm(true);
        setShowAlertBox(true);
      })
      .catch((error) => {
        console.error("Error logging out: ", error);
        setAlertMessage("Failed to log out.");
        setShowAlertBox(true);
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
          <button
            className="btn btn-bd-primary mb-3 px-4"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>

        <div className="align-self-center">
          <h3>Add Locations From File</h3>
          <p>
            To update the locations with a file, upload an Excel or CSV file
            &#40;.xlsx or .csv file extensions, respectively&#41; at least
            formatted with columns as such:
          </p>
          <table className="table table-striped-columns my-4">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Address</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Postcode</th>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wednesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Location Name</td>
                <td>Address</td>
                <td>City or Borough of NYC</td>
                <td>State &#40;eg. NY&#41;</td>
                <td>Postcode &#40;eg. 10029&#41;</td>
                <td>HH:MM AM-HH:MM PM</td>
                <td>HH:MM AM-HH:MM PM</td>
                <td>HH:MM AM-HH:MM PM</td>
                <td>HH:MM AM-HH:MM PM</td>
                <td>HH:MM AM-HH:MM PM</td>
                <td>HH:MM AM-HH:MM PM</td>
                <td>HH:MM AM-HH:MM PM</td>
              </tr>
            </tbody>
          </table>
          <div className="row my-5">
            <div className="col-md-6">
              <p>
                The display block on the right will show how the data read from
                the spreadsheet will be shown on the website's{" "}
                <a href="/locations">locations page</a>. You can edit the file
                and reupload it here anytime before uploading to the locations'
                information.
              </p>
              <h5 className="my-3">WARNING:</h5>
              <p>
                The uploaded file will completely overwrite the previous
                locations' info displayed on the website. Make sure the
                information displayed in the spreadsheet is exactly how you want
                that data displayed on the website before pressing upload.
              </p>
              <form encType="multipart/form-data" onSubmit={saveLocation}>
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
                  <button type className="btn btn-primary">
                    Upload
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <p>Response Data:</p>
              <div>
                <div
                  className="overflow-auto p-3 bg-light"
                  style={{ height: "35rem" }}
                >
                  {/* {Object.values(xlsxData).map((location) => {
                    let weekday_hours = "";
                    if (location.Monday !== "") {
                      weekday_hours = location.Monday;
                    } else if (location.Tuesday !== "") {
                      weekday_hours = location.Tuesday;
                    } else if (location.Wednesday != "") {
                      weekday_hours = location.Wednesday;
                    } else if (location.Thursday !== "") {
                      weekday_hours = location.Thursday;
                    } else if (location.Friday !== "") {
                      weekday_hours = location.Friday;
                    } else if (location.Saturday !== "") {
                      weekday_hours = location.Saturday;
                    }

                    return (
                      <div className="store-item">
                        <h5 className="location-name">{location.Location} </h5>
                        <p className="location-address">
                          {location.Address} {location.City} {location.State}{" "}
                          {location.Postcode}
                        </p>
                        <div className="location-hours-container">
                          <p>Monday: {location.Monday}</p>
                          <p>Tuesday: {location.Tuesday}</p>
                          <p>Wednesday: {location.Wednesday}</p>
                          <p>Thursday: {location.Thursday}</p>
                          <p>Friday: {location.Friday}</p>
                          <p className="location-hours">
                            Saturday: {location.Saturday}
                          </p>
                          <p className="location-hours">
                            Sunday: {location.Sunday}
                          </p>
                        </div>
                      </div>
                    );
                  })} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const closeAlertBox = () => {
    setShowAlertBox(false);
  };
  return (
    <div>
      {/* 
      {showAlertBox && (
        <ErrorModal
          title="Location Manager"
          message={alertMessage}
          onConfirm={closeAlertBox}
        />
      )} */}
      {showLoginForm ? loginForm : locationManager}
    </div>
  );
}

export default LocationManager;
