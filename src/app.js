const express = require('express');
const path = require('path');
require('dotenv').config();
require('./config/passport');

const cookieSession = require('cookie-session');
const passport = require('passport');


const app = express();

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ['clave'] //clave para encriptar
}))

app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/public/html/home.html'));
});

module.exports = app;
