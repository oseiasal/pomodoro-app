import React from 'react';


 class Task extends React.Component{



  render () {
    {var i = 0;}
      return (

        <div>
          <div className="task-container">
            <div className="task-box">
              <input  id="text" type="text"/>
              <input type="button" onClick={function() {
                var text = document.getElementById('text');

                console.log(text.value);
              }} value="Enviar"/>
            </div>
          </div>
        </div>
      );

  }
}


export default Task
