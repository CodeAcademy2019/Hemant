var http = require('http');

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('Hello');
        res.end();
    } else if (url === '/world') {
        res.write('<h1>World<h1>');
        res.end();
    }
}).listen(3000,  () => console.log("server start at port 3000")); 
