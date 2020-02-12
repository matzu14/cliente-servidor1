var express = require('express');
var router = express.Router();

var zoombies = require("../models/zoombies");
var cerebros = require("../models/cerebros");

/* GET home page. */
router.get('/', function(req, res, next) {
  zoombies.find().exec(function(error, zombie){
    if(!error){
      console.log(zombie);
      res.render('index', { title: 'Lista de zombies', coleccion: zombie});
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
  res.render('add', {mensajeError:"", mensajeExito:''});
});

router.post('/zombies/new', function(req, res){
  var zombie = req;
  var data = req.body;

  var nuevoZombie = new zoombies({
    name: data.name,
    email: data.email,
    type: data.type

  });

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



router.get('/zombies/delete/:id', async function(req, res){
  var zombie = await zoombies.findById(req.params.id);
  
  res.render('delete', {zombie: zombie});
  });

router.get('/zombies/edit/:id', async function(req, res){
  var zombie = await zoombies.findById(req.params.id);
  
  res.render('edit', {zombie: zombie});
});

router.put('/zombies/edit/:id', async function(req, res){
  try
  {
    var zombie = await zoombies.findById(req.params.id);

    zombie.name = req.body.name;
    zombie.email = req.body.email;
    zombie.type = req.body.type;

    await zombie.save();
    res.redirect('/');
  }
  catch (e)
  {
   res.render('edit', {zombie: zombie}) 
  }

});

router.delete('/zombies/delete/:id', async function(req, res){
try
{
  var zombie = await zoombies.findById(req.params.id);
  zombie.remove();

  res.redirect('/');
}
catch (e)
{
  res.render('/zombies/delete/:id', {mensajeError:'No se ha podido eliminar'});
}
})

//CRUD cerebros
//Create
router.get('/cerebros/add', function(req, res){
  res.render('cerebros/add', {mensajeError:"", mensajeExito:''});
});

router.post('/cerebros/new', function(req, res){
  var cerebro = req;
  var data = req.body;

  var nuevoCerebro = new cerebros({
    iq: data.iq,
    flavor: data.flavor,
    description: data.description

  });
  
  nuevoCerebro.save(function(error){
  if(error)
  {
    var mensaje = error.message;
    res.render('cerebros/add', {mensajeError: mensaje, mensajeExito:''});
  }else{
    res.render('cerebros/add', {mensajeError:'', mensajeExito:'se agrego un nuevo cerebro'})
  }
 })
});
//delete

router.get('/cerebros/delete/:id', async function(req, res){
  var cerebro = await cerebros.findById(req.params.id);
  
  res.render('cerebros/delete', {cerebro: cerebro});
  });

  router.delete('/cerebros/delete/:id', async function(req, res){
    try
    {
      var cerebro = await cerebros.findById(req.params.id);
      cerebro.remove();
    
      res.redirect('/cerebros');
    }
    catch (e)
    {
      res.render('/cerebros/delete/:id', {mensajeError:'No se ha podido eliminar'});
    }
    })

//update

router.put('/cerebros/edit/:id', async function(req, res){
  try
  {
    var cerebro = await cerebros.findById(req.params.id);

    cerebro.iq = req.body.iq;
    cerebro.flavor = req.body.flavor;
    cerebro.description = req.body.description;

    await cerebro.save();
    res.redirect('/');
  }
  catch (e)
  {
   res.render('/cerebros/edit/:id', {cerebros: cerebro}) 
  }

});

router.get('/prueba', function(req, res){
  res.send('<h1> Esto es una prueba <h1>');
});

module.exports = router;
