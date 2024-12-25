const express = require('express');
const port = 9000;
const app = express();

app.get('/',(req,res) => {
    res.send(`<h1>Hello World..!</h1>`);
})

app.listen(port,(err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})