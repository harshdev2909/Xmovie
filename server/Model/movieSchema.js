// movieSchema.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    imageUrl: {
        type: String,
        required: true,
        trim: true,      
    },
    category: {
        type: String,
        required: true,
        trim: true,      
    }
});

module.exports = movieSchema; // Export the schema
