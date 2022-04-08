import React, { Component } from 'react'

export default class StateClass extends Component {

    constructor(props) {
        super(props);
        this.state={
          stN: [
            {
                statename: 'Gujarat',
                id : 101,
                status:true
            },
            {
                statename:'Goa',
                id: 102,
                status:false
            }
        ]
      }
    }
    
     changestate = (id) =>{
      //map
      //match id 
      //return new object
      //setState
      let newArr = this.state.stN.map((a) => {
        if(a.id === 101){
          let n = {
                statename: 'Rajasthan',
                id : 101,
                status:false
          }
          return n
        } else if(a.id === 102){
          let n = {
            statename: 'Kerela',
            id : 102,
            status:true
      }
      return n;
        }
         else {
          return a
        }
      })

      this.setState({stN:newArr})
      console.log(newArr);
     }  
    
  render() {     
    return (
      <table>
       <th colSpan={5}>
          <td><h3>State Class Array & Object</h3></td>
        </th>
        <tr>
          <td><h3>State Name : </h3></td>
          <td><h3>ID : </h3></td>
          <td><h3>Status : </h3></td>
        </tr>
      {this.state.stN.map((a) => {
          return(
              <tr>
                 <td><button onClick={() => this.changestate(a.id)}>{a.statename}</button></td> 
                 <td>{a.id}</td>
                 <td>{a.status.toString()}</td>
              </tr>
          )
      })}
      </table>
    )
  }
}
