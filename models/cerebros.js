var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    iq:{
        type: Number,
        min: [69, "Es un iq muy bajo, el minimo es 69"],
        Max: [200, "Es un iq demasiado alto, el maximo es 200"],
        required: [true, 'Debe agregar un numero entre 69 y 200']
    },
    flavor:{
        type:String,
        required: [true, 'Debe llenar este campo caballero']
    },
    description:{
        type:String,
        required: [true, 'Debe llenar este campo caballero']
    },
    picture:String
    
});

var cerebros = mongoose.model("cerebros", modelSchema);
module.exports = cerebros;