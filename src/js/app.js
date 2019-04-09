/*
 * ezFetch library to interact with JSON APIs
 *
 * @author  Yannik Hewlik
 * @email   hi@yannik.dev
 * @license Beerware [https://en.wikipedia.org/wiki/Beerware]
 */
class  EzHTTP {
    //make http get request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        })
    }

    //make http post request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        })
    }

    //make http put request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error));
        })
    }

    //make http delete request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => resolve("Resource deleted... " + data))
                .catch(error => reject(error));
        })
    }
}