const express = require('express');
const port = 9000;
const app = express();  

app.set('view engine','ejs');

app.get('/',(req,res) => {
    return res.render('add')
})

app.get('/viewDetails',(req.res) => {
    return res.render('viewDetails')
})

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})