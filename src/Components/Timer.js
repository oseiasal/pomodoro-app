import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 0,
      starts: 0,
      isOn:false
    }
  }

  render () {
    return (
      <div className="timer-container">
      <div className="timer-numbers">
      <span>00:</span><span>{this.props.time}</span>
      </div>
      </div>
    )
  }
}

export default Timer;
