const express = require('express')
const app = express();

const cors = require('cors')
const port = 5000
app.use('/',(req,res)=>{
    res.send("hello")
})
app.listen(port,(req,res)=>{
    console.log("Server is running")
})