import React, { Component } from "react";

export default class CityClass extends Component {
  constructor(props) {
    super(props);
    this.state = [
      {
        statename: "Gujarat",
        cityname: "Surat",
        id: 101,
        tempertaure: "35 degree",
      },
      {
        statename: "Gujarat",
        cityname: "Rajkot",
        id: 102,
        tempertaure: "30 degree",
      },
      {
        statename: "Maharastra",
        cityname: "Pune",
        id: 102,
        tempertaure: "33 degree",
      },
    ];
    this.state1 = [10, 20, 30, 40];
  }

  render() {
    return (
      <table>
        <th colSpan={5}>
          <td>
            <h3>City Class</h3>
          </td>
        </th>
        <tr colSpan={this.state.length}>
          <td>
            <h3>Object</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3>State Name : </h3>
          </td>
          {this.state.map((a) => {
            return <td>{a.statename}</td>;
          })}
        </tr>
        <tr>
          <td>
            <h3>ID : </h3>
          </td>
          {this.state.map((a) => {
            return <td>{a.id}</td>;
          })}
        </tr>
        <tr>
          <td>
            <h3>City Name : </h3>
          </td>
          {this.state.map((a) => {
            return <td>{a.cityname}</td>;
          })}
        </tr>
        <tr>
          <td>
            <h3>Tempertaure : </h3>
          </td>
          {this.state.map((a) => {
            return <td>{a.tempertaure}</td>;
          })}
        </tr>
        <tr colSpan={this.state.length}>
          <td>
            <h3>Array</h3>
          </td>
        </tr>
        <tr>
          {this.state1.map((b) => {
            return <td>{b}</td>;
          })}
        </tr>
      </table>
    );
  }
}
