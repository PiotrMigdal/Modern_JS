document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);
/*
//FETCH TEXT FILE DATA
function getText() {
    fetch('test.txt')
    .then(function(res) {
        return res.text(); // fetch is window promise so we need to use then to get text()..
    })
    .then(function(data) {
        document.getElementById('output').innerHTML = data; //.. and text is promise too so we need to use then again to get its data
    })
    .catch(function(err){
        console.log(err);
    });
}
//FETCH JSON FILE DATA
function getJson() {
    fetch('posts.json')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let output = '';
        data.forEach(function (post) {
            output += `<li>${post.title}</li>`
        });
        console.log(data);
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}
//FETCH EXTERNAL DATA
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let output = '';
        data.forEach(function (user) {
            output += `<li>${user.login}</li>`
        });
        console.log(data);
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}
function getText() {
    fetch('test.txt')
    .then(function(res) {
        return res.text(); // fetch is window promise so we need to use then to get text()..
    })
    .then(function(data) {
        document.getElementById('output').innerHTML = data; //.. and text is promise too so we need to use then again to get its data
    })
    .catch(function(err){
        console.log(err);
    });
}
//*/

//THE SAME BUT WITH ARROW FUNCTIONS

//FETCH TEXT FILE DATA
function getText() {
    fetch('test.txt')
    .then(res => res.text())
    .then(data => document.getElementById('output').innerHTML = data)
    .catch(err => console.log(err));
}
//FETCH JSON FILE DATA
function getJson() {
    fetch('posts.json')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(post => output += `<li>${post.title}</li>`);
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}
//FETCH EXTERNAL DATA
function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        let output = '';
        data.forEach(user => output += `<li>${user.login}</li>`);
        console.log(data);
        document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}