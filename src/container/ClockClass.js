import React, { Component } from 'react'

export default class ClockClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      time : new Date()
    }
  }

  tick = () => {
    this.setState({
      time : new Date()
    })
  } 

  componentDidMount = () => {
   this.timerid = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentDidUpdate = () => {
    console.log("ComponentDidUpdate")
  }

  componentWillUnmount = () => {
    clearInterval(this.timerid)
  }

  render() {
    return (
      <table>
        <tr>
        <td><h2>Time(Class) : </h2></td>
          <td><h2>{this.state.time.toLocaleTimeString()}</h2></td>
        </tr>
      </table>
    )
  }
}

