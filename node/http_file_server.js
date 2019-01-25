// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//     fs.createReadStream(process.argv[3]).pipe(res);
// }).listen(process.argv[2]); 

const callback = (data) => {
    console.log(data);
};

const getFile = (callback) => {
    const http = require('http');
    const fs = require('fs');
    const server = http.createServer(((request, response) => {
        const src = fs.createReadStream(process.argv[3]);
        src.pipe(response);
    }));
    server.listen(process.argv[2]);
};
getFile(callback);
module.exports = getFile;
