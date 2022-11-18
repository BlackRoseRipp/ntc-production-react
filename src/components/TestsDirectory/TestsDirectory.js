import React, { useState } from "react";
import testDirectory from "../../test-directory.json";
import "./TestsDirectory.css";
const TestsDirectory = () => {
  const [filteredTests, setFilteredTests] = useState(testDirectory);

  var currentType = "";

  const filterTests = (e) => {
    let text = e.target.value;
    if (text !== "") {
      setFilteredTests(
        filteredTests.filter((test) =>
          test.testName.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredTests(testDirectory);
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
              <th>Analytes Tested</th>
              <th>Matrix</th>
              <th>Method</th>
              <th>Detection Limit ng/mL</th>
            </tr>
          </thead>
          <tbody>
            {filteredTests.map((test) => {
              var renderedRow = <tr></tr>;

              if (test.analyesTested === "_") {
                // var renderedRow = (
                //   <tr>
                //     <td>
                //       <b>{test.testName}</b>
                //     </td>
                //     {/* <td>{currentType}</td> */}
                //     <td>{test.analytesTestsed}</td>
                //     <td>{test.method}</td>
                //     <td>{test.detectionLimit}</td>
                //   </tr>
                // );
              } else {
                renderedRow = (
                  <tr>
                    <td>{test["Tests and Panels"]}</td>
                    <td>{test["Testing Includes"]}</td>
                    <td>{test["Specimen"]}</td>
                    <td>{test["Method"]}</td>
                    <td>{test["Detection Limit   ng/mL "]}</td>
                  </tr>
                );
              }
              console.log(currentType);
              return renderedRow;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestsDirectory;
