import React from 'react';
import './App.css';
import Timer from './Components/Timer';
import Task from './Components/Task';
import List from './Components/List';

function App() {
  return (
    <div className="App">
    <Timer />
    <Task />
    <List />
    </div>
  );
}

export default App;
