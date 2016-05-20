//Include de Express
var express = require('express');
// Include de body parser
var bodyParser = require('body-parser');
//Variable global del frameWok Expresss
var app = express();

//configuracion del motor de vistas
app.set("view engine", "jade");
//Configuracion para que se vea bonito el HTML escupido por jade
app.locals.pretty = true;

//configuracion de body parser
app.use(bodyParser.json()); // para peticiones json
app.use(bodyParser.urlencoded({extended: true}));

// Configurar Archivos estaticos
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

// //Otra forma de utilizar directorios publicos con path virtuales
// app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
// app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

//Ruta de GET  / que renderisa index.jade
app.get("/", function(req, res) {
  res.render("index");
});

//Ruta de GET  /login que renderisa login.jade
app.get("/login", function(req, res) {


  res.render("login");
});


app.post("/users", function (req,res) {
  console.log('Email: ' + req.body.email);
  console.log('Password: ' + req.body.pass);
  res.send('Parametros enviados al servidor');

})


//Final del codigo
//Esuchando en el puerto 3000
app.listen(3000); console.log("Ejecutando aplicacion... localhost:3000");
