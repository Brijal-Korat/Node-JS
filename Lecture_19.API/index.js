const express = require('express');
const app = express();
const port = 9000;

app.get('/users',(req,res) => {
    return res.status(200).send({
        success : true,
        message : "User successfully fetched",
        users : [
            {
                id : 1,
                name : "Jenny",
                email : "jenny@gmail.com"
            },
            {
                id : 2,
                name : "David",
                email : "david@gmail.com"
            },
            {
                id : 3,
                name : "Freya",
                email : "freya@gmail.com"
            },
            {
                id : 4,
                name : "Kalix",
                email : "kalix@gmail.com"
            },
            {
                id : 5,
                name : "Mykel",
                email : "mykel@gmail.com"
            }
        ]
    })
})


app.listen(port,(err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})