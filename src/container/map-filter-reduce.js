import React from "react";
import "./map-filter-reduce.css";

let MapFilterReduce = () => {
  // map function(Array)
  let data = [10, 20, 30, 40, 50];
  return (
    <table>
      <th>
        <td>
          <h2 >Map Function(Array)</h2>
        </td>
      </th>
      <tr>
        {data.map((d, i) => {
          return <td>{d}</td>;
        })}
      </tr>
    </table>
  );

// map function (Object)

};

export default MapFilterReduce;
