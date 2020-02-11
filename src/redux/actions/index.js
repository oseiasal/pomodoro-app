/* Adicionar funções e depois exportá-las */

let key = 0;

function addItem(task, status = 'Pendente') {
  return {
    type: 'B',
    task: task,
    status: status,
    key: key++
  }
}

export function removeItem () {
  // body...
}
