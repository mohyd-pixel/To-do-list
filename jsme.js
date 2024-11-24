document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    let currentTaskText = '';

    taskInput.addEventListener('input', (e) => {
        currentTaskText = e.target.value;
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && currentTaskText.trim() !== '') {
            e.preventDefault();
            addTask(currentTaskText);
            taskInput.value = '';
            currentTaskText = '';
        }
    });
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Create a checkbox for marking done
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    checkbox.onclick = () => {
        li.classList.toggle('done');
    };

    // Create task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.classList.add('task-text');

    // Create a modern "Delete" button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => taskList.removeChild(li);

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}
