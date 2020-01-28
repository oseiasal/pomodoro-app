import React from 'react';
import './App.css';
import Timer from './Components/Timer';
import Task from './Components/Task';
import List from './Components/List';

const dados = [{
    task: 'learn react js', status: 'concluido'},
    {task: 'learn react native', status: 'concluido'},
    {task: 'aprender ingles', status: 'concluido'},
    {task: 'aprender javanes', status: 'concluido'
  }]

function App() {
  return (
    <div className="App">
    <Timer time="00" />
    <Task />
    <List dados={dados} />
    </div>
  );
}

export default App;
