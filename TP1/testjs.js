const fs = require('fs');
const http = require('http');
const url = require('url');

const html = fs.readFileSync('./index.html', 'utf-8');
const data = fs.readFileSync('./data.json','utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res)=> {
    const {html , pathname } = url.parse(req.url, true );
    
    

    if(pathname==='/' || pathname==='/html'){
    
        res.writeHead(200, {'Content-type' : 'text/html' });
   
      res.end(html);
    }
 else if (pathname = 'data'){
    res.writeHead(200, {'Content-type' : 'application/json' });
    res.end(dataObj);
 }
});