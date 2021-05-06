const http = new EasyHTTP;

//Get users
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log(err));

//Create User
data = {
    name: 'Jhon Migdal',
    username: 'jmigdal',
    email: 'jmig@gmail.com'
}

//Create user, POST
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


//Update user, PUT
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(err => console.log(err));


//Delete user, DELETE
http.delete('https://jsonplaceholder.typicode.com/users/3')
.then(data => console.log(data))
.catch(err => console.log(err));