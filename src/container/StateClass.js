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
    
     changestate(id){
      //  console.log(id);

      
       //map, in if 
       // new arr
       // set state
        //  console.log("ok");
        // this.setState({
        //     statename:'Guja',
        //     arr: []
        // })

        
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
