var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    name:String,
    email:String,
    type:String
});


var zombie = mongoose.model("zoombies", modelSchema);
module.exports = zombie;