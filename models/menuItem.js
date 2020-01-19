var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

var MenuItem = new mongoose.Schema({
    name: String,
    phone: Number,
    price: {type: Number, get: getPrice, set: setPrice }
});

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

MenuItem.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", MenuItem)