//LESSON 63 Callback function

const posts = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'}
  ];

  function createPost(post){
    //Promises have 2 parameters - resolve and reject
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        posts.push(post);

        const error = true; //Just dummy error to test reject
        if(!error) {
          resolve(); //If no error it resolves the function above (posts.push(post))
        } else {
          reject('Error: Something wrong!');
        }
      }, 2000);
    });
  }

  function getPosts(){
    setTimeout(function() {
      let output = '';
      posts.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    }, 1000);
  }


  createPost({title: 'Post 3', body: 'This is post 3'})
  .then(getPosts)//You need to use .then for promises
  .catch(function(err) {//catch is used when there is 'reject' because of error
    console.log(err);
  });