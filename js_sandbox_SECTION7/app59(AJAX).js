//LESSON 59 - working with plain text
//Listener
document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //Create an XHR object
  const xhr = new XMLHttpRequest(); //xhr is a popular variable name for this

  //Open - one of the XmlHttpRequest method. Specify type iof request
  xhr.open('GET', 'data.txt', true); //GET method, data.xml location of the document, true which means we wand asynchronise

  //Optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log('Ready State', xhr.readyState);
  }


  //NEW METHOD
  xhr.onload = function() {
    if(this.status === 200){ //Statuses http are 200 for success, 403 forbidden, 404 not found
      // console.log(this.responseText);
      //Output to the html
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }
/*
  //OLD METHOD - uses Ready States:
  // 0 not initialized,
  // 1 server conn established,
  // 2 request received,
  // 3 processing request,
  // 4 response ready
  xhr.onreadystatechange = function(){
    if(this.status === 200 && this.readyState === 4){
      console.log(this.responseText);
    }
  }
  */

  //Optional - on Error
  xhr.onerror = function(){
    console.log('Error...');
  }
  //to finalize you need to send
  xhr.send();

}

