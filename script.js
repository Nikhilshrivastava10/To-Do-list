// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add task function
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">X</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    // Mark task as completed
    li.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        li.remove();
      } else {
        li.classList.toggle('completed');
      }
    });
  }
});

// Press Enter to add task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTaskBtn.click();
  }
});
