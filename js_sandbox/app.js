//Log to console
/*
console.log(12322);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('error');
console.clear();
console.warn('warning');
console.time('time');
console.warn('warning');
console.warn('warning');
console.warn('warning');
console.warn('warning');
console.timeEnd('time');
*/

//vat, let, const - 3 methods to declare variables
// var names = 'John Doe';
// console.log(names);
// names = 'Steve Smith';
// console.log(names);
// //undefined
// var greeting
// //define it
// greeting = 'hello';

// //var can include letters, numbers, _, $
// //var can't start with humber


// //Multword vars
// var firstName = 'John'; //Camel case
// var first_name = 'Sara'; //Underscore
// var FirstName = 'Tom'; //Pascal case

// //LET worsk same way as var
// let names = 'John Doe';
// console.log(names);
// names = 'Steve Smith';
// console.log(names);

// //CONST - can't be reasigned
// const names = 'John';
// console.log(names);
// const names = 'Sara'; //it won't work
// console.log(names);
// //Const have tu assign the value
// const greeting; //wont work

// //You can change values of objects
// const person = {
//     name: 'John',
//     age:30
// }
// console.log(person);
// person.name = 'Sara';
// console.log(person);

// //We can change arrays in const but can't reasign it completely
// const numbers = [1,2,3,4,5];
// numbers.push(6);

//LESSON 8
/*
Primitve data types:
- string
- number
- boolean
- null
- undefined
- sumbols (ES6)

Reference Data types:
- arrays
- object literals
- functions
- dates
- anythin else...
*/

// //PRIMITIVE

// //string
// const name = 'John Doe';
// ///number
// const age = 45;
// //boolean
// const hasKids = true;
// //null
// const cars = null;
// //undefined
// let test;
// //symbol
// const sym = Symbol();

// //REFERENCE TYPES - OBJECTS
// //array
// const hobbies = ['movies', 'music'];
// //object literal
// const address = {
//     city: 'Woskowice',
//     state: 'Opole'
// }
// //date
// const today = new Date();
// console.log(typeof address);

//Convert any value to the string
//e.g val = String(4+4); <--gives 8 as a string
//val - String([1,2,3,4]); <--gives this as a string of 7 characters
//other method is val=(4+4).toString();
//CConver to number
//val = Number('5');
// val = parseInt('100.30'); //<- zaokragla do calkowitej and convert to Number
// val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2)); //<--it works just for numbers as a test


//TYPE Colisions because one of the vales is string it just puts values together and return string
// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum);
// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 + num2;

// //Math object
// val = Math.PI; //gives PI
// val = Math.round(2.3);
// val = Math.ceil(2.4); //round up
// val = Math.floor(2.8); //round down
// val = Math.sqrt(64); //pierwiastek
// val = Math.abs(-32.3); //liczba abolutna
// val = Math.pow(8, 2); //8 do potegi 2
// val = Math.min(3,3,4,1,3,6); //minimal value
// val = Math.max(3,4,2,1,6); //highest val
// val = Math.random(); //random decimal
// val = Math.floor(Math.random() * 20 + 1) //number ranom betw 1-20

// console.log(val);

// const firstName = 'William';
// const lastName = 'Johnson';

// let val;
// val = firstName + lastName;
// //Concatenation powiazanie
// val = firstName + ' ' + lastName;
// //...or Append
// val = 'Tom ';
// val += 'Johnson';

// //or concact
// val = firstName.concat(' ', lastName);


// //Escaping using \ removes power
// val = 'That\'s awesome, can\'t wait';

// //change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// //cerrain char of string
// val = firstName[2]; //third character of string

// //search of index, order number of character
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt() returns the number before the character,you can use to get last character
// val = firstName.charAt(firstName.length - 1); //length is 7 minus 1

// val = firstName[firstName.length - 1]; //length is 7 minus 1
// //Substring
// val = firstName.substring(0, 4); //takes 0 to 4th character as a string

// //slice
// val = firstName.slice(-3) //similar to substring but van be minus and takes last 3 charac

// //split
// tag = 'hello,heelo world,woorld'
// val = tag.split(','); //split in plice where comma and adds to array

// //replace
// val = tag.replace('hello', 'heya');

// //includes
// val = tag.includes('hello'); //check if str includes and return boolean
// console.log(val);

/*
//LESSON 12 Templates

const name = 'John';
const age = '30';
const job = 'Web dev';
const city = 'Woskowice';
let html;

//Without template
html =  '<ul>' +
        '<li>Name: ' + name + '</li>' +
        '<li>Age: ' + age + '</li>' +
        '<li>Job: ' + job + '</li>' +
        '<li>City: ' + city + '</li>' +
        '</ul>';

//With templates literal use BackQuote ``

function hello(){
    return 'witam';
}

html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li>Age: ${age > 29 ? 'Over 30' : 'Under 30'}</li>
</ul>
`

document.body.innerHTML = html;
*/
//LESSON 13 Arrays and Arrays methods
/*
//create arrays
const numbers = [46,534,34,243,11,4];
const numbers2 = new Array(33,42,11,5,6,7); // same as above
const strings = ['Apple', 'Banana', 'Pear'];
const mixed = [22, 'hello', true, new Date(), {a:1, b:1}];

let val;

//get length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);

//get single val
val = numbers[0]; //get first val

//insert into array
numbers[2] = 100;
//find index of value
val = numbers.indexOf(11);

//Mutating values

//add on to end
numbers.push(250, 251);
//add on to front
numbers.unshift(120);
//take off from end
numbers.pop();
//take of from front
numbers.shift();
//splice - remove from to
numbers.splice(1,3); //removes from 1 to 3
//reverse array
numbers.reverse();

//Concate array
val = numbers.concat(numbers2);

//sorting arrays
val = strings.sort();
val = numbers2.sort(); // it sorts by the first number
//so for numbers use sorting
val = numbers2.sort(function(x, y){
    return x-y;
})
val = numbers2.sort(function(x, y){
    return y-x;
})

//find
function over50(num){
    return num > 50;
}
val = numbers.find(over50); //returns first value over 50

console.log(numbers);
console.log(val);
*/

//LESSON 14 object literals
/*
const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Woskowice',
        state: 'OP'
    },
    getBirthDay: function(){
        return 2017 - this.age; //'this' reffer to object
    }
}

let val;

//get value
val = person.firstName; //this is more common
val = person['firstName'];

val = person.hobbies[1];
val = person.address.state;
val = person.getBirthDay();

console.log(val);

//arrays of objects
const people = [ //use brackets
    {name: 'Piotr', age: 30},
    {name: 'Nancy', age: 44}
];
//loop to literate the values
for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}
*/

//LESSON 15 date and time
/*
let val;
const today = new Date(); //default is today


val = today.getMonth(); //it is american from 0 starts
val = today.getDate(); //day of month
val = today.getDay(); //day of week
val = today.getFullYear();
//you can use also .getHours() .getSeconds etc.
val = today.getTime(); //amount of miniseconds from 1/1/1970

//set time
let birthday = new Date('9-10-1981');
birthday = new Date('September 10 1981');
birthday.setMonth(2); //changes it to March

console.log(birthday);
*/

//LESSON 16
/*
const ID = 100;

//Equal to
if(ID == 100){
    console.log(true);
} else {
    console.log(false);
}

//Equal to value and type - MOST PROGRAMERS USE THIS
if(ID === 100){
    console.log(true);
} else {
    console.log(false);
}

//check if variable is defined
if(typeof ID !== 'undefined') {
    console.log(`The ID is ${ID}`);
} else {
    console.log('No ID');
}

//if else
const color = 'red'
if(color === 'red'){
    console.log('color is red');
} else if(color === 'blue'){
    console.log('color is blue');
} else {
    console.log('differnt color');
}

//Logical operators
const name = 'steve';
const age = '2';

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is adult`);
}

//OR ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`);
}

//ternary operator
console.log(ID === 101 ? 'it is 101' : ID === 100 ? 'it is 100' : 'it isnt 100 or 101');

//without braces
if(ID === 100)
console.log('correct');
else
console.log('incorrect');
*/

//LESSON 17 switches
/*
//switches is the same as if but you can use if there is many of cases

let day;

switch(new Date().getDay()){
    case 0: //this is like if(new Date().getDay() === 0)
        day = 'Sunday'; //this is result
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
console.log(`Today is ${day}`);
*/
//LESSON 18 Functions and expressions
/*
//function declarations (parameters)
function greet(firstName = 'Jan', lastName = 'Kowalski'){ //declare default as Jan Kowalski - if there is undefined it will be Jan Kowalski
     return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet('Steve', 'Smith'));

//Function expressions

const squere = function(x = 3) { //again default is 3
    return x+x;
};
console.log(squere(2));

//Immidietly Invokable Function Expressions IFFE
(function(){
    console.log('This is IFFE');
})();

(function(name){
    console.log('Hello ' + name);
})('Brad');

// Property Methods
const todo = {
    add : function(){
        console.log('Add task');
    },
    edit : function(ID){
        console.log(`Edit ${ID}`);
    }
}
todo.add();
todo.edit(21);

//different property method
todo.delete = function(){
    console.log('Delete todo');
}
todo.delete();
*/
