const express = require('express');
const port = 9000;
const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded());
let record = [];

app.get('/',(req,res) => {
    return res.render('table',{
        record
    });
})

app.get('/add',(req,res) => {
    return res.render('form');
})

app.post('/adduser',(req,res) => {
    const {username, userphone} = req.body;
    let obj = {
        id: Math.floor(Math.random()*10000),
        name : username,
        phone : userphone
    }
    record.push(obj);
    console.log("Successfully added..!");
    return res.redirect('/');
})

app.get('/deleteUser',(req,res) => {
    let id = req.query.delId;
    let deleteData = record.filter(val => val.id != id);
    record = deleteData;
    return res.redirect('/');
})

app.get('/editUser',(req,res) => {
    let id = req.query.editId;
    let singleData = record.find(val => val.id == id);
    return res.render('edit',{
        singleData
    })
})

app.post('/editData',(req,res) => {
    const {editId, username, userphone} = req.body;
    let up = record.map((val) => {
        if(val.id == editId){
            val.name = username,
            val.phone = userphone
        }
        return val;
    })
    record = up;
    console.log("successfully updated..!");
    return res.redirect('/');
})

app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})