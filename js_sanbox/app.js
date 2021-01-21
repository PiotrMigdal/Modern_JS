//LESSON 1
//Just go through the document. selector and what it can do
/*
let val;

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
*/

//LESSON 2

//document.getElementById();
/*
console.log(document.getElementById('task-title'));
//get its things
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);
//change style
document.getElementById('task-title').style.background = '#000';
document.getElementById('task-title').style.color = '#fff';
document.getElementById('task-title').style.padding = '20px';
//change content
document.getElementById('task-title 5').textContent = 'Task list';
//we should use variable for such iterations
const taskTitle = document.getElementById('task-title');
taskTitle.innerText = 'List';
taskTitle.innerHTML = '<p>TASKS</p>';

//document.querySelector()
//you can select anything class, id, tag but only one (first) on page

console.log(document.querySelector('h5'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('#task-title'));
//you can select nth-child
document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:nth-child(3)').innerText = 'Czerwony';

*/
//Lesson 25 DOM selectors for multiple elements
/*
const items = document.getElementsByClassName('collection-item');
console.log(items);
//it is array of items you can select one
items[0].style.color = 'Blue'; //slected first
//you can also specify the certain list
const itemsList = document.querySelector('ul').getElementsByClassName('collection-item');
itemsList[2].style.color = 'yellow';

//document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
lis[1].style.color = 'purple';

console.log(typeof lis); //it is object HTMLCollection

//you can use for loop even on htmlcollection

for(let i = 0; i < lis.length; i++){
  lis[i].textContent = 'for';
}

//to do forEach you need to convert to array
lis = Array.from(lis);
lis.reverse();

//add index
lis.forEach(function(li, index){
  li.textContent = (`${index}. HELLO`);
});


//document.querySelectorAll();
const items = document.querySelectorAll('ul li.collection-item');

items.forEach(function(item){
  item.style.color = 'orange';
});

//change odds using forEach loop
const itemsOdd = document.querySelectorAll('ul li.collection-item:nth-child(odd)');

itemsOdd.forEach(function(item){
  item.style.background = '#ccc';
});

//change evens using for loop
const itemsEven = document.querySelectorAll('ul li.collection-item:nth-child(even)');

for(let i=0; i < itemsEven.length; i++){
  itemsEven[i].style.background = '#e3e3e3';
}

*/

//LESSON 26 traversing the DOM
/*
let val;
const list = document.querySelector('ul.collection');

//just example how childNodes works - you will not use it often
val = list.childNodes; //it returns all together with spaces between Li
val = list.childNodes[0]; //gives only text (this is enter between Lis)
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType; //gives node type index - returned 3
//1 - element
//2 - attribute (deprecated)
//3 - Text node
//8 - comment
//9 - document itself
//10 - doctype


//CHILDREN ELEMENT NODES - more useful
val = list.children;
val = list.children[0];
list.children[0].textContent = 'HTML';
//children of children
val = list.children[3].children[0]; //you can take children of children
list.children[3].children[0].id = 'new-id';
//first child
val = list.lastElementChild;
//last child
val = list.firstElementChild;
//count child
val = list.childElementCount;


//GET PARENTS
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem.parentElement;
//parent of parent
val = listItem.parentElement.parentElement;

//GET SIBLINGS
//next sibling
val = listItem.nextElementSibling;
//prev sibling
val = listItem.previousElementSibling;


console.log(val);
*/
//LESSON 27 CREATING ELEMENT
/*
li = document.createElement('li');

//add class
li.className = 'collection-item';

//add id
li.id = 'new-item';

//add title
li.setAttribute('title', 'New item');

//add text
li.appendChild(document.createTextNode('HELLO WORLD'));

//Create link element and append to li
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
link.setAttribute('href', '#');
li.appendChild(link);

//append ready child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
*/

//LESSON 28 REPLACE ELEMENT, REMOVE
/*
//create new element
const newHeading = document.createElement('h2');
newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('TaskList'));

//get old heading
const oldHeading = document.getElementById('task-title');

//get parent of old heading
const parentOfOld = oldHeading.parentElement;

//replace
parentOfOld.replaceChild(newHeading, oldHeading);

//REMOVE
const lis = document.querySelectorAll('li');

lis[2].remove(); // removed the third

//remove child element
const list = document.querySelector('ul');
list.removeChild(lis[1]); //removed second

//REMOVE CLASSES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
//val = link.classList[0]; // get first clas from list
link.classList.add('test');
link.classList.remove('test');

//Attributes
val = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link.hasAttribute('title');


console.log(val);
*/