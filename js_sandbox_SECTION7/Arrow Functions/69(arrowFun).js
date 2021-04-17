/*
//Normal function

const sayHello = function() {
    console.log('Hello');
}


//ARROW FUNCTIONS
//-remove 'function' add arrow after paranthesis

const sayHello = () => {
    console.log('Hello');
}


//-since this is one line only we can even remove curly brace {}

const sayHello = () => console.log('Hello');
sayHello();


//-one line returns don't need 'return'

const sayHello = () => 'Hello';
console.log(sayHello());


//- this is how return objects. You need extra paranthesis ()

const sayHello = () => ({msg:"hello"});
console.log(sayHello());


//- add single parameter you don't need paranthesis ()

const sayHello = name => console.log(`Hello ${name}`);
sayHello('Piotr');


//- if you add more than one param you need paranthesis

const sayHello = (name, surname) => console.log(`Hello ${name} ${surname}`);
sayHello('Piotr', 'Migdal');

//Normal map function
const users = ['Piotr','Boguslaw','Al'];
const nameLenghts = users.map(function(name){
    return name.length;
});
console.log(nameLenghts);

//Shortest function
const users = ['Piotr','Boguslaw','Al'];
const nameLenghts = users.map(name => name.length);
console.log(nameLenghts);
//*/
