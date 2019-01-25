const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

// connecting to db
mongoose.connect('mongodb+srv://caesar_store:qFkKUQsB4uCxK9wy@cluster0-9ay4b.azure.mongodb.net/caesar_store?retryWrites=true')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err));
// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', indexRoutes);

//starting the server

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});