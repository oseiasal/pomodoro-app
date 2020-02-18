import React from './node_modules/react';
import Item from './Item';

class List extends React.Component {
  constructor(props) {
    super(props)
    // this.startTimer = this.startTimer.bind(this)
    // this.stopTimer = this.stopTimer.bind(this)
    // this.removeTask = this.removeTask.bind(this)
  }

  render (){

    return (
    <div>
      <div className="list-container">
        <div className="box-container">
          <table>
            <thead>
              <tr>
                <td>
                  <h2>Tarefas</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {
                this.props.dados.map(a => a).map((a) =>
                
                
                <Item removeTaskByKey={this.props.removeTaskByKey} func={this.props.func} task={a.task} ID={a.id} key={a.id}/>

                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
}

export default List;
