import React from 'react';


 class Task extends React.Component{



  render () {
    {var i = 0;}
      return (

        <div>
          <div className="task-container">
            <div className="task-box">
              <input  type="text"/>
              <input type="button" onClick={function() {
                console.log(i++);
              }} value="Enviar"/>
            </div>
          </div>
        </div>
      );

  }
}


export default Task
