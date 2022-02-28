const http = require('http');
const {readFileSync} = require('fs');

//get all files
// console.log(__dirname);

const homePage = readFileSync('./app_modules/index.html')
const homeStyles = readFileSync('./app_modules/style.css')
const homeLogic = readFileSync('./app_modules/index.js')

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method)
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
        return;
    }
    
    else if(req.url === '/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
        return;
    }

    else if(req.url === '/index.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
        return;
    }

    res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>Page not Found</h1>")
        res.end()
        return;
})

server.listen(5000);