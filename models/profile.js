var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

var Table = require("./user");
var MenuItem = require("./menuItem")

var ProfileSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    tables: [Table], 
    menu: [MenuItem]
});

ProfileSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Profile", ProfileSchema)