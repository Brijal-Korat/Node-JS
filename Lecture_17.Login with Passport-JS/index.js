const express = require('express');

const port = 9000;

const app = express();

app.listen(err, (port) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log(`Server is running on port :- ${port}`);
})