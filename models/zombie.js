var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    name:String,
    email: String,
    type: String
});

var Zombie = mongoose.model("Zombie", modelSchema);
module.exports = Zombie;
