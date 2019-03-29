function ezFetch() {
    this.http = new XMLHttpRequest();
};

//make http get request
ezFetch.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    //TODO: arrow function
    let that = this;
    this.http.onload = function() {
        if(that.http.status === 200){
            callback(null, that.http.responseText);
        } else {
            callback('Error: ' + that.http.status);
        }
    };

    this.http.send();
};

//make an http post request
ezFetch.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    //TODO: arrow function
    let that = this;
    this.http.onload = function() {
        callback(null, that.http.responseText);
    };

    this.http.send(JSON.stringify(data))
};

//make http delete request
ezFetch.prototype.get = function(url, callback) {
    this.http.open('DELETE', url, true);
    //TODO: arrow function
    let that = this;
    this.http.onload = function() {
        if(that.http.status === 200){
            callback(null, "Deleted " + that.http.responseText);
        } else {
            callback('Error: ' + that.http.status);
        }
    };

    this.http.send();
};

/*
 +
 *
 *
 */
const http = new ezFetch();
//get posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
    if(err) {
        console.log(err);
    } else{
        console.log(posts);
    }
});

//get single post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
    if(err) {
        console.log(err);
    } else{
        console.log(post);
    }
});

//post data
const data = {
    title: 'custom post',
    body: 'this is a custom post'
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, response) {
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});

//delete post
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if(err) {
        console.log(err);
    } else{
        console.log(response);
    }
});