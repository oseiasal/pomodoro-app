import React from 'react'

class Item extends React.Component {
  /* função pega a key deste componente e executa a função do
  componente Pai que deleta o item correspondente */

  removeTask = () => {
    const {key} = this._reactInternalFiber
    this.props.removeTaskByKey(key)
  }

  render(){
    return (
      <>
      <tr>
      <td>{this.props.task}</td>
      <td><input type="button" onClick={this.props.func.bind(this)} value="Play"/></td>
      <td><input type="button" onClick={this.removeTask} value="Remover"/></td>
      </tr>
      </>
    )
  }
}

export default Item
