var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose")

var TableSchema = new mongoose.Schema({
    UUID: Number,
    seating: Number,
    name: String
});

TableSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", TableSchema)