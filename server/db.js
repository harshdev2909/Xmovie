// connectDb.js
const mongoose = require('mongoose');
const movies = require('./Movies'); 
const Movie = require('./Model/movieModel');

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://harshdev2909:harsh9560@cluster0.gkf5y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to Database');

        // Clear existing movies
        // const de=await Movie.deleteMany({}); 
        // if(de){
        //     console.log('deleted all')
        // }

       
        const result = await Movie.insertMany(movies);
        console.log(`${result.length} movies have been added to the database.`); 
        return result; 
    } catch (err) {
        console.error('Error connecting to the database or inserting movies:', err);
    }
};

module.exports = connectDb;
