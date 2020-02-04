import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 50,
      starts: 0,
      isOn:false,
    }
  }

  render () {
    return (
      <div className="timer-container">
      <div className="timer-numbers">
      <span>00:</span><span>{this.state.minutes}</span>
      </div>
      </div>
    )
  }

  componentDidMount() {
    var timer =  setInterval(() => {
      this.setState(state => {
        return {minutes: state.minutes - 1}
      })


    },1000)
  }

  componentWillUnmount() {
    if (this.state > 59) {
      clearInterval(this.timer)
    }
  }

}

export default Timer;
