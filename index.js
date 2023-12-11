let tasks = [];

document.addEventListener('DOMContentLoaded', function () {
    initializeTaskList();
});

function initializeTaskList() {
    // Cache the 'Add Task' button using querySelector
    const addButton = document.querySelector('#add-button');
    addButton.addEventListener('click', addTask);
    
    tasks.forEach(addTaskToUI);
}

function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    // Additional validation (you can customize this further)
    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const task = { text: taskText, completed: false };
    tasks.push(task);
    addTaskToUI(task);
    newTaskInput.value = '';
}

function addTaskToUI(task) {
    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<input type="checkbox" onchange="toggleTask(${tasks.indexOf(task)})" ${task.completed ? 'checked' : ''}>
                          <span class="${task.completed ? 'completed' : ''}">${task.text}</span>`;
    taskList.appendChild(taskItem);
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
}

function updateTaskList() {
    const taskList = document.getElementById('tasks');
    taskList.innerHTML = '';
    tasks.forEach(addTaskToUI);
}