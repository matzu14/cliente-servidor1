var express = require('express');
var router = express.Router();

var Zoombie = require("../models/zombie");

/* GET home page. */
router.get('/', function(req, res, next) {
  Zombie.find().exec(function(error, zombies){
    if(!error){
      console.log(zombies);
      res.render('index', { title: 'C/S Course' });
    }
  })
  
});

router.get('/prueba', function(req, res){
  res.send('<h1> Esto es una prueba <h1>');
});

module.exports = router;
