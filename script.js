// Select DOM elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const emptyMsg = document.getElementById('empty-msg');

// Add task on button click
addBtn.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.className = 'task-item';

  // Task text span
  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  // Toggle complete on click
  span.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    li.remove();
    updateEmptyMsg();
  });

  // Append elements
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input and refocus
  taskInput.value = '';
  taskInput.focus();

  updateEmptyMsg();
}

function updateEmptyMsg() {
  if (taskList.children.length === 0) {
    emptyMsg.classList.remove('hidden');
  } else {
    emptyMsg.classList.add('hidden');
  }
}

// Initial check
updateEmptyMsg();
