import React from 'react';
import './App.css';
import Timer from './Components/Timer';
import Task from './Components/Task';
import List from './Components/List';
import Tasks from './Components/Classes/Class';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem }  from './redux/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
    //atributo do objeto = método do objeto
    this.getTextValue = this.getTextValue.bind(this);
    this.returnTextValue = this.returnTextValue.bind(this);
    this.state = {dados: [], minute : 0, isOn: false, started: false};
  }

  // Pega o valor (string) da input e cria um novo item na lista
  getTextValue() {
    let newTask = new Tasks()
    newTask.setTask(this.returnTextValue('text'))
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

    // relogio parado > isOn false vira true e depois false (props mudam)
    // relogio true no timer não executa função se isOn && started
    // quando o timer zerar, o started é false, o que permite outro ciclo
    handleTimer = () => {

      const { isOn, started } = this.state
      const self = this

      // criar um estado
      //ao ser invocado, trocar estado isOn para true
      this.setState({isOn: true})
      setTimeout(function () {
        self.setState({isOn: false})
      }, 1000);
    }

    // função para deletar objetos do array pelo key
    removeTaskByKey = (a) => {
      console.log(a);

      let array = [...this.state.dados]
      var index = array.findIndex(x => x.key == a)

      array.splice(index, 1)
      this.setState({dados: array})
    }

    render () {
      const { isOn, minute, dados} = this.state

      return (
        <div className="App">
          <h1>{this.props.dados.key}</h1>
        <Timer isOn={isOn} minutes={minute} />
        <Task funcion={this.getTextValue}/>
        <List removeTaskByKey={this.removeTaskByKey} func={this.handleTimer.bind(this)} dados={dados} />
        </div>
      );
    }
  }

  const mapDispatchToProps = dispatch =>
  bindActionCreators({ addItem }, dispatch);


  const mapStateToProps = store => ({
    dados: store
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);

