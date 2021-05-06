/**
 * Easy HTTP 2 Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author Brad Traversy
 * @license MIT
 *
 **/

 class EasyHTTP {
    //Make HTTP GET requets
    get(url) {
        //Need to wrap around a promise so it will work in sync way
        return new Promise((resolve, reject) =>{
        fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make HTTP POST requets
    post(url, data) {
        return new Promise((resolve, reject) =>{
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make HTTP PUT requets
    //the same as post just put on the beginning and method: PUT
    put(url, data) {
        return new Promise((resolve, reject) =>{
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    //Make HTTP DELETE requets
    delete(url) {
        return new Promise((resolve, reject) =>{
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(() => resolve('Resoursce deleted..'))
            .catch(err => reject(err));
        });
    }
}
