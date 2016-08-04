var express = require("express");
var router = express.Router({mergeParams: true}); 
var Project = require("../models/project.js"); 
// var Comment = require("../models/comment"); 
// var middleware = require("../middleware"); 

//===============================
// PROJECTS ROUTES
// ===============================

// INDEX - show all projects
router.get("/", function(req, res) {
    // Get all campgrounds from DB
    Project.find({}, function(err, allProjects) {
       if (err) {
           console.log(err);
       } else {
            // res.render("projects/index", {projects:allProjects}); 
            res.json(allProjects); 
       }
    });
});


// CREATE - add new project to database
router.post("/", function(req, res) {
    var name = req.body.name;
    var image = req.body.image; 
    var description = req.body.description; 
    var tech = req.body.technologies; 
    var github = req.body.github; 
    var newProject = {name: name, description: description, technologies: tech, github: github, image: image }; 
    console.log(name); 
    // Create a new campground and save to DB 
    Project.create(newProject, function(err, newlyCreated) {
        if (err) {
            console.log(err); 
        } else {
            // res.redirect("/campgrounds"); 
            res.json(newlyCreated);
        }
    });
    
   // get data from form and add to campgrounds array
   // redirect back to campgrounds page 
});

// NEW - show form to create new campground 
// router.get("/new", function(req, res) {
//     res.render("projects/new.ejs"); 
// }); 

// SHOW - shows more info about one project
router.get("/:id", function(req, res) {
    // find the campground with provided ID
    Project.findById(req.params.id).exec(function(err, foundProject) {
       if (err) {
           console.log(err); 
       } else {
           console.log(foundProject); 
        //   res.render("campgrounds/show", {campground: foundCampground}); 
        res.json(foundProject);
       }
    });
    // render show template with that campground 
}); 

// EDIT CAMPGROUND ROUTE
// router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res) {
//     Campground.findById(req.params.id, function(err, foundCampground) {
//         res.render("campgrounds/edit", {campground: foundCampground});
//     }); 
// });

// UPDATE PROJECT ROUTE 
router.put("/:id", function(req, res) {
    // find and update the correct project
    Project.findByIdAndUpdate(req.params.id, req.body.project, function(err, updatedProject) {
       if (err) {
        //   res.redirect("/campgrounds"); 
            console.log(err); 
       } else {
            // res.redirect("/campgrounds/" + req.params.id); 
            res.json(updatedProject); 
       }
    });
    // redirect somewhere (show page) 
});

// DESTROY PROJECT ROUTE 
router.delete("/:id", function(req, res) {
    Project.findByIdAndRemove(req.params.id, function(err, deletedProject) {
        if (err) {
            // res.redirect("/campgrounds"); 
            console.log(err); 
        } else {
            // res.redirect("/campgrounds"); 
            res.json(deletedProject); 
        }
    });
});


module.exports = router; 