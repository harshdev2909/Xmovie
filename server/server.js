const express = require('express')
const app = express();
const cors = require('cors')
const connectDb = require('./db')
const Tickets = require('./schema')
app.use(cors())
app.use(express.json())
connectDb()
const port = 5000
app.use('/',(req,res)=>{
    res.send("hello")
})
// app.use("api",require('./route'))
app.listen(port,()=>{
    console.log("Server is running")
})