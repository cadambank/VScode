
// const {createUser,deleteUser,updateUser,pool} = require('./model/userCRUD')
const express = require('express');

const server = express();

server.get('/:id',(req,res)=>{
     res.send(`The user ID is ${req.params.id}`)
})
server.get('/',(req,res)=>{
     res.send(`Hello World`)
})

server.post('')

server.listen(3000,()=>{
     console.log('server is listening');
})


// createUser('cadamban5','123','cadamban4@test.com')

