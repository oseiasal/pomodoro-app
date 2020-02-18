import React from 'react'
import { connect } from 'react-redux'
import { startTimer } from '../redux/actions'

class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: 10,
      isOn: false,
      started: false
    }
  }

  handleMinutes = () => {
    const count = this.state.minutes
    let i = 10
    let timer = setInterval(() => {
      i--
      if(i < 0) {

        // Quando o tempo chega a 0, o cronometro é liberado
        this.setState({minutes: 10, started: false})

        clearInterval(timer)
      } else {

        this.setState(state => {
          return {minutes: state.minutes - 1}
        })

      }

    }, 1000)

    
  }

  componentWillReceiveProps(a){

    const {started } = this.state


    // State muda apenas quando  props true e state false
    // Correção para o setInterval
    if(a.isOn && !started) {

      this.setState({started: true}, this.handleMinutes.call())

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

const timer = connect()(startTimer)


export default Timer;
