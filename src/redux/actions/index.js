/* Adicionar funções e depois exportá-las */

let key = 0;

export function addItem(task) {
  return {
    type: 'ADD',
    task: task,
    key: key++
  }
}

export function removeItem () {
  // body...
}


