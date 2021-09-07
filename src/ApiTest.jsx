import React from "react";
import { useEffect, useState } from "react";
const ApiTest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
      result.json().then((resp) => {
        // console.log(resp);
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <>
      <table border="1">
          <tbody>
          <tr>
            <td>userId</td>
            <td>Id</td>
            <td>Title</td>
            <td>Completed</td>
          </tr>
          {
          data.map((item)=>
            <tr>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.completed}</td>
            </tr>
            )
        }
        </tbody>
      </table>
    </>
  );
};

export default ApiTest;
