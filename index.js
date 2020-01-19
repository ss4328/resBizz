var express = require("express"),
    app = express(),
    request = require('request'),
    bodyParser = require("body-parser"),
    fs = require("fs"),
    formidable = require('formidable'),
    flash=require("connect-flash"),
    mongoose = require("mongoose"),
    passport = require("passport"), 
    localStrategy = require("passport-local"),
    User = require("./models/user")
    
var indexRoutes = require("./routes/index"),
    staticRoutes = require("./routes/static")

// mongoose.connect(process.env.DATABASEURL)
mongoose.connect("mongodb://testResBizz:helloTest123@ds039165.mlab.com:39165/resbizz")


//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Secret message",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(bodyParser.urlencoded({extended: true}));
app.get(bodyParser.json());

app.use(express.static("public"));
app.set("view engine", "ejs");

//no clue what this is for
// app.use(function(req,res,next){
//     res.locals.currentUser = req.user;
// })

app.use(indexRoutes);
// app.use();       for routefiles
app.use(staticRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has Started!");
})