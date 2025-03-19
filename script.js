let taskList = [];

function addTask() {
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();
  
  if (task !== '') {
    taskList.push(task);
    displayTasks();
    taskInput.value = '';
  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}

function displayTasks() {
  const taskListElement = document.getElementById('task-list');
  taskListElement.innerHTML = '';
  
  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span contenteditable="true" onblur="editTask(${index}, this)">${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskListElement.appendChild(li);
  });
}

function editTask(index, element) {
  taskList[index] = element.textContent;
}
