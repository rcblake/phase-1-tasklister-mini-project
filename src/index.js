document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form")
    form.addEventListener("submit",e => 
    {e.preventDefault()
    createTask(e.target.newTaskDescription.value,e.target.newTaskPriority.value,e.target.newTaskDueDate.value)
    form.reset()
  })
});

// let's add toggle to the form in CSS (only available on className)
// make task

function createTask(task,taskPriority,taskDueDate) {
  const li = document.createElement("li")
  const pTask = document.createElement("p")
  const pPrio = document.createElement("p")
  const date = document.createElement("input")
  const checkBox = document.createElement("input")
  const removeButton = document.createElement("button")

  li.className = "newTaskListing"

  pTask.innerText = task
  pTask.name = "taskDescription" //is this being used/functional?
  pTask.className = taskPriority
  pTask.style.color = taskPriority //change colors to numbers and move into style
 
  pPrio.className = "priorityOption"

  
  date.type = "date"
  date.value = taskDueDate

  removeButton.innerText = "\u2716"
  removeButton.className = "removeButton"

  checkBox.type = "checkbox"

  pTask.addEventListener("dblclick",(e) => {editTask(pTask,taskPriority,taskDueDate)})
  removeButton.addEventListener("click",(e) => {removeTask(li)})

  pTask.prepend(checkBox) // add strikethrough in CSS
  pTask.append(date,removeButton) 
  li.appendChild(pTask)
  document.getElementById("tasks").appendChild(li)

  console.log(`Task: ${task} Color: ${taskPriority} Due:${taskDueDate}`)
}

function editTask(oldTask,oldTaskPriority,oldTaskDueDate) {
  let newTaskDescription = prompt("Enter Edit");
  if (newTaskDescription !== null) { 
    createTask(newTaskDescription, oldTaskPriority,oldTaskDueDate);
    oldTask.remove()
  }
}

function removeTask(taskListing) {
  taskListing.remove()
}


