var express = require('express');
var router = express.Router();

var zoombies = require("../models/zoombies");
var cerebros = require("../models/cerebros");

/* GET home page. */
router.get('/', function(req, res, next) {
  zoombies.find().exec(function(error, zombie){
    if(!error){
      console.log(zombie);
      res.render('index', { title: 'C/S Course', coleccion: zombie});
    }
  })

});

router.get('/cerebros', function(req, res, next) {
  cerebros.find().exec(function(error, cerebros){
    if(!error){
      console.log(cerebros);
      res.render('cerebros/index', { title: 'Delichus', coleccion: cerebros});
    }
  })

});


router.get('/zombies/add', function(req, res){
  res.render('add', {mensajeError:""});
});

router.post('/zombies/new', function(req, res){
  var zombie = req;
  var data = req.body;

  var nuevoZombie = new zoombies({
    name: data.name,
    email: data.email,
    type: data.type

  });

//   nuevoZombie.save(function(error){
//     if(error)
//     {
//       res.send(error);
//     }else{
//       res.send("Se agrego un nuevo zombie");
//     }
//    }).then(function(){
//      res.send("se agrego un nuevo zombie!")
//    });
// });

nuevoZombie.save(function(error){
  if(error)
  {
    var mensaje = error.message;
    res.render('add', {mensajeError: mensaje, mensajeExito:''});
  }else{
    res.render('add', {mensajeError:'', mensajeExito:'se agrego un nuevo zombie'})
  }
 })
});

router.get('/prueba', function(req, res){
  res.send('<h1> Esto es una prueba <h1>');
});

module.exports = router;
