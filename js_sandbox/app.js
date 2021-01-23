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

    //Remove task
    taskList.addEventListener('click', removeTask);

    //Clear tasks
    clearBtn.addEventListener('click', clearTasks);

    //Filter tasks
    filter.addEventListener('keyup', filterTasks);
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

//Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

//Clear tasks
function clearTasks(){
    //2 methods can be used
    //taskList.innerHTML = '';

    //or this one is faster for browser
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

//Filter tasks
function filterTasks(e){
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){ //indexOf searches in array and if doesnt match returns -1
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}