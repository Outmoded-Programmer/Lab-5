const express = require('express') ;
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT 


app.listen(port , ()=>{
    console.log(`The server is running succesfully on port ${port} `)
    connectDB()
})