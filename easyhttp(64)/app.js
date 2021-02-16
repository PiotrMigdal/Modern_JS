//GET POSTS
const http = new easyHTTP;

// const post = http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts){ //receiving callback
//     if(err){
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

//CREATE POST
//create data
const data = {
    //we don't add ID - it is added by the website
    title: 'Custom post',
    body: 'this is post body'
};

// //create post
// http.post('https://jsonplaceholder.typicode.com/posts', data,
// function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//Update Post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data,
// function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//Delete post
const post = http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err, response){ //receiving callback
    if(err){
        console.log(err);
    } else {
        console.log(response);
    }
});