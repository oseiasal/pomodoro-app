/* Adicionar funções e depois exportá-las */

let key = 0;

export function addItem(task) {
  return {
    type: 'ADD',
    task: task,
    id: key++
  }
}

export function removeItem(id) {
  return {
    type: 'REMOVE',
    id
  }
}

export function startTimer(time) {
  return {
    type: 'START_TIMER',
    time: 10
  }
}
