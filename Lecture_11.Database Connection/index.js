const express = require('express');

const port = 9000;
const db = require('./config/db'); 
const app = express();

app.get('/',(req,res) => {
    res.write(`<h1>Hello world</h1>`);
    res.end();
})

app.listen(port,(err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`Server start on port :- ${port}`);
    
})