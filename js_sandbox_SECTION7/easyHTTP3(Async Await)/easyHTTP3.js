/**
 * Easy HTTP 2 Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author Brad Traversy
 * @license MIT
 *
 **/

 class EasyHTTP {
    //Make HTTP GET requets
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make HTTP POST requets
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    //Make HTTP PUT requets
    //the same as post just put on the beginning and method: PUT
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;

    }

    //Make HTTP DELETE requets
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'Resoursce deleted';
        return resData;
    }
}
