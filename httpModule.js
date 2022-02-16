const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello from Byjus')
    }
    else if(req.url === '/about'){
        res.write(`<h1>Your in about page</h1>`)
    }
    
    res.end()
}).listen(5000);