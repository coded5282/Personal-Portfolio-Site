var mongoose = require("mongoose"); 

var projectSchema = new mongoose.Schema({
   name: String,
   description: String,
   technologies: String,
   github: String,
   image: String
});

// var Campground = mongoose.model("Campground", campgroundSchema); 
module.exports = mongoose.model("Project", projectSchema); 