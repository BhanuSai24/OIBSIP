function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.innerHTML = `
        <span>${taskInput.value}</span>
        <span class="delete-btn" onclick="removeTask(this)">❌</span>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function removeTask(element) {
    var taskList = document.getElementById('taskList');
    taskList.removeChild(element.parentNode);
}
