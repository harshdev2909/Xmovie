const express = require("express");
const app = express();
const connectDB = require('./db')
const Ticket = require('./schema');
const cors = require("cors");

app.use(cors());
//Middleware for parsing Json
app.use(express.json());
//Connecting to Database
connectDB();
app.use(express.urlencoded({ extended: false }))
// creating an api and seperating it.
app.use("/api", require("./router"));

app.listen(5000,()=>{
    console.log("App listening to port 5000")
});