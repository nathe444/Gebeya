const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongo db connection success")
}).catch((err)=>{
    console.log("Mongo db connection failed")
    console.log(err)
})



app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    headers: ['Content-Type',
              'Authorization',
              'Cache-Control',
              'Expires',
              "Pragma"],
    credentials: true
}))
app.use(cookieParser());
app.use(express.json());



app.listen( port , ()=>{
    console.log(`server is running on port ${port}`);
})