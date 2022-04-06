import React from "react";
import "./map-filter-reduce.css";
export default function Array_Function() {
  let data = ["Ayush", 101, "Dhruv", 102];
  // Func.pop();
  return (
    <table>
      <th colSpan={data.length}>
        <td >
          <h3> Array Functions</h3>
        </td>
      </th>
      <tr>
        {data.map((d, i) => {
          return (
            <td>
              <h2>{d}</h2>
            </td>
          );
        })}
      </tr>
    </table>
  );
}
