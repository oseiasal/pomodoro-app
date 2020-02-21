import React from 'react'

function Item({STORE, task, start, remove, reset }) {
  return (
    <>
      <tr>
        <td>{task}</td>
        <td><input disabled={STORE.isOn ? true : false} type="button" onClick={() => {
            // ao clicar bloquear botão ok
            //iniciar setinterval
            let min = 50
           let a = setInterval(() => {
              start.call()
              min--
             if (min == 0) {
               clearInterval(a)
               reset.call()
             }
            }, 1000);
            //no final clearinterval

            
            //desbloqueia botao
            
            
        }} value="Play" /></td>
        <td><input type="button" onClick={() => {

          remove.call()

        }} value="Remover" /></td>
      </tr>
    </>
  )
}

// <td><input type="button" onClick={this.props.func.bind(this)} value="Play" /></td>

export default Item
