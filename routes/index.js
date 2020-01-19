var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = passport = require("passport");

router.get("/login", function(req,res){
    res.render("login");
})

// router.post("/login", passport.authenticate("local",
//     {
//         successRedirect: "/management",
//         failureRedirect: "/login",
//         failureFlash: true,
//         successFlash: "Welcome to resBizz"
//     }), function(req,res){
//         console.log("login successful")
// });


router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect("/management?username="+req.user.username);
  });
  
  
router.post("/register", function(req,res){
    console.log(req.body.name)
    var newUser = new User({username: req.body.username, name: req.body.name, restaurant: req.body.restaurant, phone: req.body.phone })
    User.register(newUser, req.body.password, function(err,user){
        if(err){
            console.log("error while registering new user")
            console.log(err);
            return res.render("/register")
        }
        passport.authenticate("local")(req,res,function(){
            console.log("Success while")
            res.redirect("/management?username="+req.user.username);
        });
    })
})

router.get("/register", function(req,res){
    res.render("register")
})

router.get("/management", function(req,res){
    res.render("management")
})

router.get("/logout", function(req,res){
    req.logout();
    req.flash("Success", "See you later!")
    res.redirect("/")
})

// router.get("/users/:id", function(req,res){
//     User.findById(req.params.id, function(err, foundUser){
//         if(err){
//             req.flash("error", "Something went wrong.")
//             res.redirect("/")
//         }
//         res.render("/users/show", {user: foundUser});
//     })
// })

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;