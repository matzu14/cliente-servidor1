var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    iq:{
        type: Number,
        min: [69, "Es un iq muy bajo"],
        Max: [200, "Es un iq demasiado alto"],
    },
    flavor:{
        type:String,
        required: [true, 'Debe llenar este campo caballero']
    },
    description:{
        type:String,
        requiered: [true, 'Debe llenar este campo caballero']
    },
    picture:String
    
});

var cerebros = mongoose.model("cerebros", modelSchema);
module.exports = cerebros;