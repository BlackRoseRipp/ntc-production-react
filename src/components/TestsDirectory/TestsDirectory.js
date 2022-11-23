import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../store/firebase";
import testDirectory from "../../test-directory.json";
import TestList from "./TestList";
import "./TestsDirectory.css";
const TestsDirectory = () => {
  const [googleData, setGoogleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const testArray = [];
        const locRes = await getDocs(collection(db, "ntc-lab-tests"));
        console.log("useEffect");

        if (!locRes.empty) {
          locRes.forEach((doc) => {
            const loc = doc.data();
            testArray.push(loc);
          });
          //console.log(locationsArray)
          setGoogleData(Object.values(testArray[0]));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const dataProps = googleData;

  return (
    <div className="container " style={{ padding: "35px 0" }}>
      <TestList data={dataProps} />
    </div>
  );
};

export default TestsDirectory;
