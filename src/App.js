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
    this.getTextValue = this.getTextValue.bind(this);
    this.returnTextValue = this.returnTextValue.bind(this);
    this.state = {dados: [], minute : 0};
  }

  // Pega o valor (string) da input e cria um novo item na lista
  getTextValue() {
    let newTask = new Tasks()
    newTask.setTask(this.returnTextValue('text'))
    console.log(newTask);
    this.setState(prevState => ({
      dados: [...prevState.dados, newTask]}));
    }

    // Pegar valor da input
    returnTextValue (id){
      let value = '';
      let obj = document.getElementById(id);
      value = obj.value;
      return value;
    }


    render () {
      return (
        <div className="App">
        <Timer time={this.state.minute} />
        <Task funcion={this.getTextValue}/>
        <List func={this.handleTimer.bind(this)} dados={this.state.dados} />
        </div>
      );
    }


    handleTimer = (a) => {
      console.log(a);
    }
  }

  export default App;
