import React, { Component } from 'react'

export default class ClockClass extends Component {

    constructor(props) {
        super(props);
        console.log("1 Constructor");
    }
    
    componentDidMount = () => {
        console.log("3 ComponentDidMount")
    }
    
    componentDidUpdate = () => {
        console.log("ComponentDidUpdate");
    }

  render() {
      console.log("2 render")
    return (
      <div>Clock</div>
    )
  }
}
