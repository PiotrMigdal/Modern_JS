function easyHTTP() {
    this.http = new XMLHttpRequest();
}

//Make HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true)

    let self = this; //you must add this to variable because the below function is in different scope
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, self.http.responseText);// send as callback as tis is asynchorniously. Added null for errors
        } else {
            callback('Error' + self.http.status);
        }
    }
    this.http.send();
}

//Make HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json'); //set up the header

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));

}

//Make HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json'); //set up the header

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));

}

//Make HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true)

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200){
            callback(null, 'Post deleted');
        } else {
            callback('Error' + self.http.status);
        }
    }
    this.http.send();
}