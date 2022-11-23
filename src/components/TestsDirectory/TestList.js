import React, { useEffect, useState } from "react";

const TestList = (props) => {
  const [filteredTests, setFilteredTests] = useState(props.data);

  useEffect(() => {
    console.log(props.data);
    setFilteredTests(props.data);
  }, [props]);

  const filterTests = (e) => {
    let text = e.target.value;
    if (text !== "") {
      setFilteredTests(
        filteredTests.filter((testRow) =>
          testRow.test.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else {
      setFilteredTests(props.data);
    }
  };

  return (
    <React.Fragment>
      <div className="search-container">
        <input
          type="search"
          className="form-control"
          onChange={filterTests}
          placeholder="Search..."
        />
      </div>
      <div className="mt-2 w-100">
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
    </React.Fragment>
  );
};

export default TestList;
