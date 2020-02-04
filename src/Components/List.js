import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  startTimer() {
    console.log(this.props.dados);
  }
  stopTimer() {
    console.log(this);
  }
  removeTask() {
    console.log(this);
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
                <tr key={a.key}>
                  <td>{a.task}</td>
                  <td>
                    <input type="button" onClick={this.startTimer} value="Play"/>
                  </td>
                  <td>
                    <input type="button" onClick={this.stopTimer} value="Stop"/>
                  </td>
                  <td>
                    <input type="button" onClick={this.removeTask} value="Remove"/>
                  </td>
                </tr>
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
