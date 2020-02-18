/* Adicionar funções e depois exportá-las */

let key = 0;

export function addItem(task) {
  return {
    type: 'ADD',
    task: task,
    id: key++
  }
}

export function removeItem (id) {
  return {
    type: 'REMOVE',
    id
  }
}
