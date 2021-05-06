//Good example as we normally use await with fetch
async function getUsers() {
    //request fatch and await response. It works like new promise
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');

    //only proceed once resolved
    const data = await resp.json();

    //only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));


//Examplese without fetch
/*
async function myFunc() { //Just adding 'async' make this promise function.
    return 'HELLO';
}

myFunc()
    .then(res => console.log(res));
*/

/*
async function myFunc() {
    const prom = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 1000)
    });
    error = false; //Fabricate an error, put true
    if(!error) {
        const res = await prom;
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
}
myFunc()
    .then(res => console.log(res))
    .catch(err => console.log(err));


*/