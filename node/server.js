var http = require('http');

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('Hello');
        res.end();
    } else if (url === '/w') {
        res.write('world');
        res.end();
    } else if (url === '/e') {
        res.write('e');
        res.end();
    }
}).listen(4000,  () => console.log("server start at port 4000")); 
