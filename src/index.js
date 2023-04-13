document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form").addEventListener("submit",(e) => {e.preventDefault()
    createTask(e.target.newTaskDescription.value,e.target.newTaskPriority.value)
  })
});

function createTask(task,taskPriority) {
  const p = document.createElement("p")
  const checkBox = document.createElement("input")
  const editButton = document.createElement("button")
  checkBox.type = "checkbox"
  p.innerText = task
  p.name = "taskDescription"
  p.className = taskPriority
  editButton.className = "taskEditButton"
  editButton.innerText = "Edit"
  editButton.addEventListener("click",(e) => {editTask(p,taskPriority)})

  p.prepend(checkBox)
  p.append(editButton)
  document.getElementById("tasks").appendChild(p)

  console.log(`Task: ${task} Priority: ${taskPriority}`)
}

function editTask(oldTask,oldTaskPriority) {
  let newTask = prompt("Enter Edit");
  if (newTask !== null) { 
    oldTask.remove();
    createTask(newTask, oldTaskPriority)
  }
}
