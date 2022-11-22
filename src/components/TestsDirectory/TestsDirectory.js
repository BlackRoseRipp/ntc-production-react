import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../store/firebase";
import testDirectory from "../../test-directory.json";
import "./TestsDirectory.css";
const TestsDirectory = () => {
  const [googleData, setGoogleData] = useState([]);
  const [filteredTests, setFilteredTests] = useState(googleData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationsArray = [];
        const locRes = await getDocs(collection(db, "ntc-lab-tests"));
        console.log("useEffect");

        if (!locRes.empty) {
          locRes.forEach((doc) => {
            const loc = doc.data();
            locationsArray.push(loc);
          });
          //console.log(locationsArray)
          setGoogleData(Object.values(locationsArray[0]));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    setFilteredTests(googleData);
  }, []);

  const filterTests = (e) => {
    let text = e.target.value;
    if (text !== "") {
      setFilteredTests(
        filteredTests.filter((testRow) =>
          testRow.test.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredTests(googleData);
    }
  };

  return (
    <div className="container " style={{ padding: "35px 0" }}>
      <div className="search-container">
        <input
          type="search"
          className="form-control"
          onChange={filterTests}
          placeholder="Search..."
        />
      </div>
      <div
        className="table-container"
        style={{ marginTop: "15px", width: "100%" }}
      >
        {/* <DataTable columns={columns} data={testDirectory} pagination/> */}
        <table
          id="dtBasicExample"
          className="dtBasicExample table  table-striped table-bordered"
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
            {filteredTests.map((testRow) => {
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
  );
};

export default TestsDirectory;
