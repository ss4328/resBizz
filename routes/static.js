var express = require("express");
var router = express.Router();


router.get("/", function(req,res){
    res.render('index');
});

router.get("/home", function(req,res){
    res.render('index');
});

router.get("/about", function(req,res){
    res.render('about');
});

router.get("/blog", function(req,res){
    res.render('blog');
});

router.get("/blog-single", function(req,res){
    res.render('blog-single');
});

router.get("/contact", function(req,res){
    res.render('contact');
});

router.get("/menu", function(req,res){
    res.render('menu');
});

router.get("/services", function(req,res){
    res.render('services');
});

module.exports = router;