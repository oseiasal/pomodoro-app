import React from 'react';

function Task (props) {
  return (
  <div>
    <div className="task-container">
      <div className="task-box">
        <input  placeholder="Digite o nome da tarefa" required id="text" type="text"/>
        <input type="button" onClick={props.funcion} value="Enviar"/>
      </div>
    </div>
  </div>
  );
}


export default Task
