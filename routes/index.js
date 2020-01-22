var express = require('express');
var router = express.Router();

var zoombies = require("../models/zoombies");

/* GET home page. */
router.get('/', function(req, res, next) {
  zoombies.find().exec(function(error, zoombies){
    if(!error){
      console.log(zoombies);
      res.render('index', { title: 'C/S Course', coleccion: zoombies});
    }
  })

});

router.get('/prueba', function(req, res){
  res.send('<h1> Esto es una prueba <h1>');
});

module.exports = router;
