import React from "react";
import "./map-filter-reduce.css";
// map function (Object)

export default function MapFilterReduce() {
  // map function(Array)
  let data = [10, 20, 30, 40, 50];
  let obj = [
    {
      id:101,
      name:'Ayush',
      phone:9556316543,
      status :true
    },
    {
      id:102,
      name:'Dhruv',
      phone:9555646132,
      status:false
    },
    {
      id:103,
      name:'Darshil',
      phone:9651321722,
      status :true
    },
    {
      id:104,
      name:'Darsh',
      phone:9131321318,
      status :false
    }
  ]
  return (
    <div>
      <table >
        <th colSpan={5}>
          <td>
            <h3> Map Function(Array)</h3>
          </td>
        </th>
        <tr>
          {data.map((d, i) => {
            return <td>{d}</td>;
          })}
        </tr>

          

        <tr>
        <td><h2>Id:</h2></td>
        {obj.map((a,b) => {
          return(
            <>
            <td>{a.id}</td>
            </>
          )
        })}
        </tr>
        <tr>
        <td><h2>Name:</h2></td>
        {obj.map((a,b) => {
          return(
            <>
            <td>{a.name}</td>
            </>
          )
        })}
        </tr>
        <tr>
        <td><h2>phone:</h2></td>
        {obj.map((a,b) => {
          return(
            <>
            <td>{a.phone}</td>
            </>
          )
        })}
        </tr>
        <tr>
        <td><h2>Status:</h2></td>
        {obj.map((a,b) => {
          return(
            <>
            <td>{a.status.toString()}</td>
            </>
          )
        })}
        </tr>
        <th colSpan={obj.length}>
          <td><h3>Map Function (Filter)</h3></td>
        </th>
        <tr>
        <td><h3>ID (id less than 104) :</h3></td>
        
        </tr>
      </table>
    </div>
  );

}
