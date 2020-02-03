import React from 'react';
import './App.css';
import Timer from './Components/Timer';
import Task from './Components/Task';
import List from './Components/List';
import Tasks from './Components/Classes/Class';

class App extends React.Component {
  constructor(props) {
    super(props);
    //atributo do objeto = método do objeto
    this.callingMyName = this.callingMyName.bind(this);
    this.returnTextValue = this.returnTextValue.bind(this);
    this.state = {dados: []};
  }

  // Atualiza os estado da view
  callingMyName() {
    let newTask = new Tasks()
    newTask.setTask(this.returnTextValue('text'))
    console.log(newTask);
    this.setState(prevState => ({
      dados: [...prevState.dados, newTask]}))
    }

    // Pegar valor da input
    returnTextValue (id){
      var value = '';
      var obj = document.getElementById(id);
      value = obj.value;
      return value;
    }

    render () {
      return (
        <div className="App">
        <Timer time={1} />
        <Task funcion={this.callingMyName}/>
        <List dados={this.state.dados} />
        </div>
      );
    }
  }

  export default App;
