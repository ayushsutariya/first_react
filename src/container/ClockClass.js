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
      this.tick();
    }, 1000);
  }

  render() {
    return (
      <div>{this.state.time.toLocaleTimeString()}</div>
    )
  }
}
