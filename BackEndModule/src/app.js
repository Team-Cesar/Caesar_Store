const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

// requerimientos para autenticacion
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport');



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Conexion a base de datos
// mongoose.connect('mongodb+srv://caesar_store:qFkKUQsB4uCxK9wy@cluster0-9ay4b.azure.mongodb.net/caesar_store?retryWrites=true')
mongoose.connect('mongodb://localhost:27017/CesarStore')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));
// importing routes
const indexRoutes = require('./routes/index');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);

//starting the server

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});