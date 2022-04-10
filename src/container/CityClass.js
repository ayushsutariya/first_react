import React, { Component, PureComponent } from "react";

export default class CityClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stn : [
        {
          statename: 'Maharastra',
              id: 101,
              cityname: 'Pune',
              tempertaure: '33 degree',
              
        },
        {
          statename: 'Gujarat',
              id: 102,
              cityname: 'Surat',
              tempertaure: '36 degree',
              
        },
        {
          statename: 'Rajasthan',
              id: 103,
              cityname: 'Jaipur',
              tempertaure: '40 degree',
              
        },
      ]
    }
    this.state1 = [10, 20, 30, 40];
  }

  changeArray = (id) => {
    let newArray =this.state.stn.map((a) => {
      if(a.id === 101){
        let n = {
          statename: 'Tamilnadu',
          id: 104,
          cityname: 'Chennai',
          tempertaure: '35 degree'
        } 
        return n;
      } else if(a.id === 102){
        let n ={
          statename: 'Madhya Pradesh',
          id: 105,
          cityname: 'Indore',
          tempertaure: '38 degree'
        }
        return n;
      } else{
        return a;
      }
    })
    this.setState({stn: newArray})
      } 

  render() {
    return (
      <table>
        <th colSpan={5}>
          <td>
            <h3>City Class</h3>
          </td>
        </th>
        <tr colSpan={this.state.stn.length}>
          <td>
            <h3>Object</h3>
          </td>
        </tr>
        <tr>
          <td>
            <h3>State Name : </h3>
          </td>
          {this.state.stn.map((a) => {
            return <td><button onClick={() => this.changeArray(a.id)}>{a.statename}</button></td>;
          })}
        </tr>
        <tr>
          <td>
            <h3>ID : </h3>
          </td>
          {this.state.stn.map((a) => {
            return <td>{a.id}</td>;
          })}
        </tr>
        <tr>
          <td>
            <h3>City Name : </h3>
          </td>
          {this.state.stn.map((a) => {
            return <td>{a.cityname}</td>;
          })}
        </tr>
        <tr>
          <td>
            <h3>Tempertaure : </h3>
          </td>
          {this.state.stn.map((a) => {
            return <td>{a.tempertaure}</td>;
          })}
        </tr>
        <tr colSpan={this.state.stn.length}>
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
