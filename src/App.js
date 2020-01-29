import React from 'react';
import './App.css';
import Timer from './Components/Timer';
import Task from './Components/Task';
import List from './Components/List';

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

        this.setState(prevState => ({
          dados: [...prevState.dados,{
            task: this.returnTextValue('text'),
            status: 'Pendente',
            key : setTimeout(function () {
              new Object()
            }, 10)
          }]}))
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
        <Timer time="00" />
        <Task funcion={this.callingMyName}/>
        <List dados={this.state.dados} />
        </div>
      );
  }
}

export default App;
