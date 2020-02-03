class Tasks {
  constructor() {
    this.task = ""
    this.status = "Pendente"
    this.key = Math.floor(Math.random() * 6E9)
  }

setTask(task){
    if (task === "") {
      this.task = "Tarefa sem nome"
    } else {
      this.task = task
    }
  }
}

export default Tasks
