const http = require('http');
const url = require('url');

http.createServer((req,res)=>{
	const parsedUrl = url.parse(req.url,true);
	if(parsedUrl.pathname === '/api/parsetime' && parsedUrl.query.iso){
		const date = new Date(parsedUrl.query.iso);
		res.end(JSON.stringify({'hour':date.getHours(),'minute': date.getMinutes(),'second': date.getSeconds()}));
    }
    else if(parsedUrl.pathname === '/api/unixtime' && parsedUrl.query.iso){
		const date = new Date(parsedUrl.query.iso);
		res.end(JSON.stringify({'unixtime': date.getTime()}));
	}
}).listen(process.argv[2]);
