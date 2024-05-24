const http = require('http');
const url = require('url');
const fs = require('fs');



http.createServer((req, res)=>{
    const pages = ['./index.html','./about.html','./contact-me.html']
    
    const q = url.parse(req.url, true);
    let filename = "."+ q.pathname + ".html";

    if(filename === './.html')
        filename = './index.html';

    if(!pages.includes(filename))
        filename = './404.html';
    
    fs.readFile(filename, (err, data)=>{
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'})
            return res.end(data)
        }
        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end();
    })
}).listen(8080)

