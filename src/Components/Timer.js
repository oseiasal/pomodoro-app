import React from 'react'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 10,
      isOn: false
    }
  }

  handleMinutes = () => {
    const count = this.state.minutes
    let i = 10
    let timer = setInterval(() => {
      i--
      if(i < 0) {
        this.setState({minutes: 10})

        // TODO: Quando o app chegar a 0, tornar o isOn falso
        clearInterval(timer)
      } else {

        this.setState(state => {
          return {minutes: state.minutes - 1}
        })

      }

    }, 1000)


  }

  componentWillReceiveProps(a){
    if(a.isOn == true) {
      this.handleMinutes.call()
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
}

export default Timer;
