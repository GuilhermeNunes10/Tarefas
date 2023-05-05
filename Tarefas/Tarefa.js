const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul');

function createTask(task) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${task}</span>
    <button class="done">✔</button>
    <button class="delete">✖</button>
   
  `;
  return li;
}

function addTask(event) {
  event.preventDefault();
  if (input.value) {
    const li = createTask(input.value);
    ul.appendChild(li);
    input.value = '';
  }
}

function deleteTask(event) {
  if (event.target.classList.contains('delete')) {
    const li = event.target.parentNode;
    ul.removeChild(li);
  }
}

function toggleTask(event) {
  if (event.target.classList.contains('done')) {
    const li = event.target.parentNode;
    li.classList.toggle('done2');
  }
}

form.addEventListener('submit', addTask);
ul.addEventListener('click', deleteTask);
ul.addEventListener('click', toggleTask);

function createTask(task) {
  const li = document.createElement('li');
  li.classList.add('task');
  li.innerHTML = `
      <span>${task}</span>
      <button class="done">✔</button>
      <button class="delete">✖</button>
     
    `;
  return li;
}