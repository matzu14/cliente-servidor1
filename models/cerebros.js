var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    iq:Number,
    flavor:String,
    description:String,
    picture:String
    
});

var cerebros = mongoose.model("cerebros", modelSchema);
module.exports = cerebros;