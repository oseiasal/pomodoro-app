import React from 'react';

class Task extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {

    return (
    <div>
      <div className="task-container">
        <div className="task-box">
          <input  placeholder="Digite o nome da tarefa" required id="text" type="text"/>
          <input type="button" onClick={this.props.funcion} value="Enviar"/>
        </div>
      </div>
    </div>
    );

  }
}

export default Task
