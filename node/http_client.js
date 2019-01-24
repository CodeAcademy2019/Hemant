let http = require('http');

let callback = (arg) => arg;

let wrapper = (url) => {
    http.get(url, (response) => {
        response.on("data", (data) => {
            console.log(data.toString());
            callback(data.toString());
        })
    });
}

wrapper(process.argv[2]);
module.exports = callback;