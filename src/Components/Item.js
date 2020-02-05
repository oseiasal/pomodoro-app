import React from 'react';

class Item extends React.Component {
  constructor(props){
    super(props)
  }

  startTimer = () => {
    console.log(this.props);
  }

  stopTimer = () => {
    console.log(this);
  }

  removeTask = () => {
    console.log(this);
  }

  render(){
    return(
      <>
      <tr>
      <td>{this.props.task}</td>
      <td><input type="button" onClick={this.startTimer} value=""/></td>
      <td><input type="button" onClick={this.props.func.bind(this)} value=""/></td>
      </tr>
      </>
    )
  }
}

export default Item;
