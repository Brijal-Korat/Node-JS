const express = require("express");
const port = 9000;
const app = express();

app.set('view engine','ejs');

const path = require('path');
app.use('/',express.static(path.join(__dirname, 'public')))

const db = require('./config/db');

app.use(express.urlencoded());
const cookieparser = require('cookie-parser');

app.use(cookieparser());

//passpport js start

const passport = require('passport');
const passportLocal = require('./config/passportLocal');
const session = require('express-session');

app.use(session({
    name : 'brijal',
    secret : 'briee',
    resave : true,
    saveUninitialized : true,
    cookie : {
        maxAge : 1000 * 60 * 60 * 24 * 7
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

//passpport js end

app.use('/',require('./routes/indexRoute'));

// app.get('/',(req,res) => {
//     return res.render('dashboard');
// })

// app.get('/charts',(req,res) => {
//     return res.render('charts');
// })
// app.get('/widgets',(req,res) => {
//     return res.render('widgets');
// })
// app.get('/tables',(req,res) => {
//     return res.render('tables');
// })
// app.get('/grid',(req,res) => {
//     return res.render('grid');
// })
// app.get('/form-basic',(req,res) => {
//     return res.render('form-basic');
// })
// app.get('/form-wizard',(req,res) => {
//     return res.render('form-wizard');
// })
// app.get('/pages-buttons',(req,res) => {
//     return res.render('pages-button');
// })

app.listen(port,(err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})