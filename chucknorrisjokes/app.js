document.querySelector('.get-jokes').addEventListener('click', getJokes
);
function getJokes(e){
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function(){

    if(this.status === 200){
      const reponse = JSON.parse(this.responseText);

      let output = '';

      if(reponse.type === 'success'){
        reponse.value.forEach(function(value){
          output += `<li>${value.joke}</li>`;
        })
      } else {
        output += 'Something went wrong';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }
  xhr.send();
  e.preventDefault();
}