import React from 'react';
import './App.css';
import Timer from './containers/Timer';
import Task from './components/Task';
import { List } from './components/List'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, removeItem }  from './redux/actions'

import { store } from './'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    //atributo do objeto = método do objeto
    this.getTextValue = this.getTextValue.bind(this);
    this.returnTextValue = this.returnTextValue.bind(this);
    this.state = {dados: [], minute : 0, isOn: false, started: false};
  }

  // Pega o valor (string) da input e cria um novo item na lista
  // Pegar o objeto e jogar na store do redux, não no state do react
  getTextValue() {
    let a = this.returnTextValue('text')
    store.dispatch(addItem(a))
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
      // console.log(a);
      store.dispatch(removeItem(1))

      // let array = [...this.state.dados]
      // var index = array.findIndex(x => x.key == a)

      // array.splice(index, 1)
      // this.setState({dados: array})
    }

    render () {
      const { isOn, minute, dados} = this.state

      return (
        <div className="App">
          <Timer isOn={isOn} minutes={minute} />
        <Task getTextValue={this.getTextValue}/>
        <List removeTaskByKey={this.removeTaskByKey} func={this.handleTimer.bind(this)} dados={this.props.dados} />
        </div>
      );
    }
  }


  // const mapDispatchToProps = dispatch =>
  // bindActionCreators({ addItem }, dispatch);


const mapStateToProps = (store) => {
  return {dados: store.reducerItem}
  
} 
    
  
  export default connect(mapStateToProps)(App);