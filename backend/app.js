const express = require('express') ;
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT 
const foodRoute = require('./routes/foodRoute.js')
const categoryRoute = require('./routes/categoryRoute.js')


app.use('/api/v1/food' , foodRoute );
app.use('/api/v1/category' , categoryRoute)

app.listen(port , ()=>{
    console.log(`The server is running succesfully on port ${port} `)
    connectDB()
})