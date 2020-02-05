import React from 'react';
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
                <Item func={this.props.func} key={a.key} task={a.task}/>

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
