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

let minutes = 45;

export function startTimer() {
  return {
    type: 'START_TIMER',
    minutes: minutes--,
    isOn: true
  }
}

export function resetTimer() {
  minutes = 45;
  return {
    type: 'RESET_TIMER',
    minutes: 10,
    isOn: false
  }
}
