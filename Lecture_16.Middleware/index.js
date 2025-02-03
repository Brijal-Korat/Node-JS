const express = require('express');

const port = 9000;

const app = express();

app.set('view engine','ejs');

// Creating Custom Middleware

const checkAge = (req,res,next) => {
    let age = req.query.age;

    if(!age || age < 18) {
        return res.redirect('/');
    }
    return next();
}


app.get('/', (req,res) => {
    return res.render('index');
})

app.get('/product', checkAge, (req,res) => {
    return res.render('product');
})

app.get('/about', checkAge, (req,res) => {
    return res.render('about');
})

app.use(checkAge);

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})