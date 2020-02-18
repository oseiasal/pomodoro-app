import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

function Task (props) {
  return (
  <div>
    <div className="task-container">
      <div className="task-box">
        <input  placeholder="Digite o nome da tarefa" required id="text" type="text"/>
          < input type="button" onClick={props.getTextValue} value="Enviar" />
      </div>
    </div>
  </div>
  );
}


export default connect()(Task)
// export default Task

// #10 < input type = "button" onClick = { props.getTextValue } value = "Enviar" />
