import React from 'react';


 class Task extends React.Component{


   

  render () {

      return (

        <div>
          <div className="task-container">
            <div className="task-box">
              <input  id="text" type="text"/>
              <input type="button" onClick={this.props.funcion} value="Enviar"/>
            </div>
          </div>
        </div>
      );

  }
}


export default Task
