/* Adicionar funções e depois exportá-las */

let key = 0;

export function addItem(task, status = 'Pendente') {
  return {
    type: 'ADD',
    task: task,
    status: status,
    key: key++
  }
}

export function removeItem () {
  // body...
}


