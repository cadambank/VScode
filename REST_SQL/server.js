require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');
const app = express();
const sql = require('mssql');
const bajajRouter = require('./routers/primaryInvoices');

// mongoose.connect(process.env.DATABASE_URL);
// const db = mongoose.connection;

// db.on('error',(error)=> console.log(error));
// db.once('open',()=>console.log("Mongo Connected"));

app.use(express.json())

//const subscriberRouter = require('./routers/subscribers')

app.use('/bajaj/primary',bajajRouter) 



app.listen(3000,() => console.log("Listening"));

