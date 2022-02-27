const http = require('http');
const {readFileSync} = require('fs');

//get all files

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method)
    if(req.url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
        return;
    }
    
    else if(req.url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>About Page</h1>")
        res.end()
        return;
    }

    else if(req.url === '/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
        return;
    }

    else if(req.url === '/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
        return;
    }

    else if(req.url === '/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
        return;
    }

    res.writeHead(404,{'content-type':'text/html'})
        res.write("<h1>Page not Found</h1>")
        res.end()
        return;
})

server.listen(5000);