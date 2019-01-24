const http = require('http');

const callback = (data) => {
    console.log(data);
};

const getRequest = (callback) => {
    http.get(process.argv[2], (response) => {
        response.setEncoding('utf8');
        response.on('data', callback);
        response.on('error', console.log);    
    }).on('error', console.log);  
};

module.exports = getRequest; 