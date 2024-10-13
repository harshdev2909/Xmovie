const express = require("express");
const app = express();
const connectDB = require('./db')
const Ticket = require('./schema');
const Movie = require('./Model/movieModel');
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
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});