import axios from "axios";
import React, { useEffect, useState } from "react";

function ViewStudentData() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiResponse = await axios.get("http://localhost:7000/tableData");
      setStudentData(apiResponse.data);
    }
    fetchData();
  }, []);


  return (
    <>
      <h2>StudentData</h2>
      <table>
        <thead>
          <tr>
            <th>sr no</th>
            <th>email</th>
            <th>name</th>
            <th>memberID</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.memberID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ViewStudentData;
