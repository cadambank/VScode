require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error',(error)=> console.log(error));
db.once('open',()=>console.log("Mongo Connected"));

app.use(express.json())

const subscriberRouter = require('./routers/subscribers')

app.use('/subscribers',subscriberRouter) 

app.listen(3000,() => console.log("Listening"));

