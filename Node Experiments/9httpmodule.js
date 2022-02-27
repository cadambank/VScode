const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/'){
        res.end('<h1>Welcome to our homepage</h1>');
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