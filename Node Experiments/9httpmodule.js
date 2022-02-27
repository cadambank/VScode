const http = require('http');
// const {readFileSync} = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        // const todoList = readFileSync('./todoList','utf8')
        res.end(todoList);
        return;
    }
    if(req.url === '/about'){
        res.end('<h1>Welcome to our aboutpage</h1>');
        return;
    }
    res.end(`
        <h1> Page requested is not available </h1>
        <p> Please click <a href="/"> here </a> to go back home. </a>
    `)
});

server.listen(5000);