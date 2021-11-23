
const express = require('express');
const app = express ();
const path = require('path');
const port = 3000
const mainRouter = require('./routes/main');

app.set('view engine','ejs'); // definición de ejs como view engine
app.set('views',path.resolve(__dirname,'views')); //configuración para indicar dónde está la carpeta de vistas

app.use(express.static(path.resolve(__dirname,'../public')));

app.listen (port,()=>console.log("servidor funcionando en el puerto " + port));

app.use('/', mainRouter)