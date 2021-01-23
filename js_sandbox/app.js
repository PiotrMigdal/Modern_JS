//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){

    //Add task event
    form.addEventListener('submit', addTask);
}

//Add new task
function addTask(e){

    //notify if no task entered
    if(taskInput.value === ''){
        alert('Add a task');
    }

    //Create new li element for new task
    const li = document.createElement('li');
    li.className = 'collection-item';
    //add task name to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<li class="fa fa-remove"></li>';
    //add link to li
    li.appendChild(link);

    //append li to list
    taskList.appendChild(li);

    //once task added clear its value
    taskInput.value = '';

    e.preventDefault();
}
