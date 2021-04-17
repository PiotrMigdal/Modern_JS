//LESSON 63 Callback function

const posts = [
  {title: 'Post 1', body: 'This is post 1'},
  {title: 'Post 2', body: 'This is post 2'}
];

function createPost(post, callback){ // We pass in a callback
  setTimeout(function(){
    posts.push(post);
    callback(); //execute callback function which is passed in getPosts
  }, 2000); //takes 2s to create
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000); //takes 1s to get - wrong order
}

createPost({title: 'Post 3', body: 'This is post 3'}, getPosts); //we pass getPosts