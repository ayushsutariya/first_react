import React from "react";
import "./map-filter-reduce.css";
export default function Array_Function() {
  let data = ["Ayush", 101, "Dhruv", 102];
  let data2 =["Prince", 103, "Darshil", 104,false];
  let data4=["Krish", 105, "Saavan", 106]
  let data3 = data.concat(data2);
  let pop_ = data.pop();
  let push_ = data2.push(105);
  let unshift_ = data4.unshift(25,50);
  let shift_ = data4.shift();
  let Tostring = data2.toString();
  // Func.pop();
  return (
    <table>
      <th colSpan={data.length}>
        <td >
          <h3> Array Functions</h3>
        </td>
      </th>
      <tr>
      <td><h2>Pop(data) : </h2></td>
        {data.map((d,i)=> {
            return(
                <td >{d}</td>
            )
        })}
      </tr>
      <tr>
      <td><h2>Push(data2) : </h2> </td>
      {data2.map((d,i) => {
          return(
            <td>{d}</td>
          )
      })}
      </tr>
      <tr>
      <td><h2>Concat(data3) : </h2></td>
        {data3.map((d,i)=> {
            return(
                <td>{d}</td>
            )
        })}
      </tr>
      <tr>
      <td><h2>Unshift(data4(25,50)) : </h2></td>
        {data4.map((d,i)=> {
            return(
                <td>{d}</td>
            )
        })}
      </tr>
      <tr>
      <td><h2>Shift(data4) : </h2></td>
        {data4.map((d,i)=> {
            return(
                <td>{d}</td>
            )
        })}
      </tr>
    </table>
  );
}
