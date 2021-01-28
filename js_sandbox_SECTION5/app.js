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