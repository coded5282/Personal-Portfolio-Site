var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
// var Campground = require("./models/campground");
// var Comment = require("./models/comment");
// var Project = require("./models/project"); 
// var User = require("./models/user");
var seedDB = require("./seeds");
    
// // requiring routes     
// var commentRoutes = require("./routes/comments"),
//     campgroundRoutes = require("./routes/campgrounds"),
//     authRoutes = require("./routes/index"); 
// var indexRoutes = require("./routes/index");
// var projectRoutes = require("./routes/projects"); 

var url = process.env.DATABASEURL || "mongodb://localhost/portfolio"; 
// mongoose.connect("mongodb://localhost/yelp_camp"); 
mongoose.connect(url); // environment variable for database url 
// mongoose.connect("mongodb://ed:mongoed123@ds023634.mlab.com:23634/yelpcamp"); // connecting to mongolabs 



app.use(bodyParser.urlencoded({extended: true})); 
app.use(bodyParser.json());
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method")); 
app.use(flash()); 
//seedDB(); // seed the database 
var Project = require("./models/project"); 

var indexRoutes = require("./routes/index");
var projectRoutes = require("./routes/projects"); 

// // PASSPORT CONFIGURATION
// app.use(require("express-session")({
//     secret: "This is secret",
//     resave: false,
//     saveUninitialized: false 
// })); 
// app.use(passport.initialize()); 
// app.use(passport.session()); 
// passport.use(new LocalStrategy(User.authenticate())); 
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser()); 

// app.use(function(req, res, next) {
//   res.locals.currentUser = req.user; 
//   res.locals.error = req.flash("error"); 
//   res.locals.success = req.flash("success"); 
//   next(); 
// });


// app.use("/", authRoutes);
// app.use("/campgrounds", campgroundRoutes);
// app.use("/campgrounds/:id/comments", commentRoutes); 
app.use("/", indexRoutes); 
app.use("/projects", projectRoutes); 

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Portfolio server has started!");  
});

Project.create({
    name: "ed",
    image: "ed",
    description: "ed",
    technologies: "ed",
    github: "ed"
});

module.exports = app; 

/* RESTFUL ROUTES

name url verb desc.
=======================
INDEX /dogs GET Display a list of all dogs
NEW /dogs/new GET Displays form to make a new dog
CREATE /dogs POST Add new dog to DB
SHOW /dogs/:id GET Shows info about one dog 
*/ 