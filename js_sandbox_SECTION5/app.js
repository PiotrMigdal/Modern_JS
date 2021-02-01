//LESSON 44 CONSTRUCTORS
//OBJECT LITERAL
//- its fine if you deal with one object
/*
const person = {
    name: 'Brad',
    age: 30
}
console.log(person);
console.log(person.name);

//CONSTRUCTOR
//- can be used for multiply objects
function Person(name, dob){ //Constructor Person() it starts always with capital
    this.name = name; //Semicons not comma
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    } //This is common function to calculate the age from DOB
}

// const piotr = new Person('Piotr', 29);
// const pawel = new Person('Pawel', 28);

// console.log(piotr.age);

const brad = new Person('Brad', '5-16-1991');
console.log(brad.birthday);
console.log(brad.calculateAge()); //it is a function
*/

//LESSON 46
//Object.prototype
/*
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // ! You can take this outsite the constructor to the prototype
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}
// ! took it here
Person.prototype.calculateAge =  function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
//Use prototype to get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
//GetMarried Override object using prototype
Person.prototype.getMarried = function(newLastName){
    this.lastName = newLastName;
}

const john = new Person('Johne', 'Doe', '12/1/2000');
const mary = new Person('Mary', 'Johnson', 'March 11 1999');

console.log(mary);
console.log(john.calculateAge());
console.log(mary.getFullName());
//Get married
mary.getMarried('Smith');
console.log(mary.getFullName());

//Use built in object prototypes
console.log(mary.hasOwnProperty('lastName')); //return true if has
*/

//LESSON 47 Prototype inheritance

//Person constructor
/*
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}
const person1 = new Person('Piotr', 'Almond');

console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName) //call person using this

    this.phone = phone;
    this.membership = membership;
}

//Inherit person prototype to customer
Customer.prototype = Object.create(Person.prototype);
//Make customer prototype return Customer
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Jhon', 'Trav', '024313312', 'Standard');

console.log(customer1);

console.log(customer1.greeting());
*/

//LESSON 48 Using Object.create
/*
const personPrototypers = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}
const mary = Object.create(personPrototypers);
mary.firstName = 'Mary';
mary.lastName = 'Smith';
mary.age = 20;

mary.getsMarried('Thomson');

console.log(mary.greeting());

//Alternative method to create object
const brad = Object.create(personPrototypers, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Smith'},
    age: {value: 36}
})
console.log(brad);
console.log(brad.greeting());

*/
//LESSON 49 - ES6 Classes
/*
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    calculateAge(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getsMarried(newLastName){
        this.lastName = newLastName;
    }
    static addNumbers(x, y){
        return x+y;
    }
}
const mary = new Person('Mary', 'Thomson', '1/31/2000');
mary.getsMarried('Smith');

console.log(mary.calculateAge());

console.log(mary);

console.log(Person.addNumbers(1,2)); // Must include class name to use static functions

*/

//LESSON 50 SubClasses and Extended classes

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }


}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName); //use super to use Person constructor

        this.phone = phone;
        this.membership = membership;
    }
    static getMembershipCost(){
        return 500;
    }
}

const john = new Customer('John', 'Trav', '057567423', 'Stnadard');

console.log(john);
console.log(Customer.getMembershipCost());
