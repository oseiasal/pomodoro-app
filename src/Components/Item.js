import React from './node_modules/react'
import { connect } from './node_modules/react-redux'
import { store } from '../index'
import { removeItem, addItem } from '../redux/actions'

class Item extends React.Component {
  /* função pega a key deste componente e executa a função do
  componente Pai que deleta o item correspondente */

  removeTask = (key) => {
    // const {key} = this._reactInternalFiber
    // this.props.removeTaskByKey(key)

    store.dispatch(removeItem(this.props.ID))

  }

  render(){
    return (
      <>
      <tr>
    <td>{this.props.ID} - {this.props.task}</td>
      <td><input type="button" onClick={this.props.func.bind(this)} value="Play"/></td>
      <td><input type="button" onClick={this.removeTask} value="Remover"/></td>
      </tr>
      </>
    )
  }
}

export default connect()(Item)
// export default Item
