import React from 'react';
import './App.css';
import Timer from './Components/Timer';
import Task from './Components/Task';
import List from './Components/List';



class App extends React.Component {
  render () {

    const dados = [{
        task: 'learn react js', status: 'concluido'},
        {task: 'learn react native', status: 'concluido'},
        {task: 'aprender ingles', status: 'concluido'},
        {task: 'aprender javanes', status: 'concluido'
      }]


      return (
        <div className="App">
        <Timer time="00" />
        <Task />
        <List dados={dados} />
        </div>
      );
  }
}




export default App;
