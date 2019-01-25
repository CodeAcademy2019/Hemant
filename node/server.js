var http = require('http');

http.createServer((req, res) => {
    const url = req.url;
    if (url === '/q') {
        res.write('q');
        res.end();
    } else if (url === '/w') {
        res.write('w');
        res.end();
    } else if (url === '/e') {
        res.write('e');
        res.end();
    }
}).listen(7000,  () => console.log("server start at port 3000")); 
