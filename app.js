const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//! rutas
const rutasParque = require('./routes/park_incidents-routes');
const rutasLugar = require('./routes/places-routes');
const rutasTipo = require('./routes/types-routes');

const path = require('path');

//! View engine
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public'))); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//! rutas
app.use('/park_incidents', rutasParque);
app.use('/places', rutasLugar);
app.use('/types', rutasTipo);

app.use((request, response, next) => {
    console.log('Segundo middleware!');
    response.status(404).send('Recurso no encontrado');
});

app.use('/error', (request, response, next) => {
    response.status(500).send('Internal Server Error');
});

app.listen(3000);