// movieModel.js
const mongoose = require("mongoose");
const movieSchema = require("./movieSchema");

const Movie = mongoose.model("Movie", movieSchema); 

module.exports = Movie; 
