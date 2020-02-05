var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
    name:{
        type: String,
        minlength:[6,"El nombre es muy corto"],
        maxlength:[12, "El nombre es muy largo"],
    },
    email:{
        type:String,
        require:[true, "El correo electronico es obligatorio"],
    },
    type:{
        type: String,
        enum: ['Maestro', 'Alumno'],
    }
});


var zombie = mongoose.model("zoombies", modelSchema);
module.exports = zombie;