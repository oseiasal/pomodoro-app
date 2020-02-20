import React from 'react'
import { connect } from 'react-redux'
import { startTimer } from '../redux/actions'

function Timer({ timerConfig, timer }) {
  return (
    <div className="timer-container">
      <div className="timer-numbers">
        <button onClick={() => {
          timer()
        }}></button>

        <span>00:</span><span>{timerConfig.minutes}</span>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    timer: () => { dispatch(startTimer(25)) }
  }
}

const mapStateToProps = (state) => {
  return {
    timerConfig: state.reducerTimer
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)