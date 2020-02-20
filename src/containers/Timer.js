import React from 'react'
import { connect } from 'react-redux'

function Timer({ timerConfig }) {
  return (
    <div className="timer-container">
      <div className="timer-numbers">
        <span>00</span><span>{timerConfig.minutes}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    timerConfig: state.reducerTimer
  }
}

export default connect(mapStateToProps)(Timer)