import React from 'react';

function Timer(props) {
  return (

<div className="timer-container">
  <div className="timer-numbers">
    <span>00:</span><span>{props.time}</span>
  </div>
</div>
  );
}


export default Timer;
