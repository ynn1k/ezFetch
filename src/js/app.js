/*
 * ezFetch library to interact with JSON APIs
 *
 * @author  Yannik Hewlik
 * @email   hi@yannik.dev
 * @license Beerware [https://en.wikipedia.org/wiki/Beerware]
 */
class  EzHTTP {
    //make http get request
    async get(url){
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }

    //make http post request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }

    //make http put request
    async put(url, data) {
        const response = await fetch (url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return responseData;
    }

    //make http delete request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const responseData = await "Resource Deleted... " + response.json();
        return responseData;
    }
}