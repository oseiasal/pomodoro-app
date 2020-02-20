import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';

function Task({ getTextValue }) {
  let input
  return (
    <div>
      <div className="task-container">
        <div className="task-box">
          <form onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }

            getTextValue()
          }}>
            <input ref={node => input = node} placeholder="Digite o nome da tarefa" id="text" type="text" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}


// export default connect()(Task)
export default Task

// #10 < input type = "button" onClick = { props.getTextValue } value = "Enviar" />
