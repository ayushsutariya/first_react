import React from "react";
import "./map-filter-reduce.css";
export default function Array_Function() {
  let data = ["Ayush", 101, "Dhruv", 102];
  let data2 =["Prince", 103, "Darshil", 104];
  // Func.pop();
  return (
    <table>
      <th colSpan={data.length}>
        <td >
          <h3> Array Functions</h3>
        </td>
      </th>
      <tr>
        <td>{data.pop()}</td>
      </tr>
    </table>
  );
}
