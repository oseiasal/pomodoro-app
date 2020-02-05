import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      starts: 0,
      isOn:false,
    }
  }
  
  checkTimer = () => {

  }

  render () {
    return (
      <div className="timer-container">
      <div className="timer-numbers">
      <span>00:</span><span>{this.state.isOn == false ? 0 : this.props.time}</span>
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
    clearInterval(this.timer)
  }
}

export default Timer;
