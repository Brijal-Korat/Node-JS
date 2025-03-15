const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/adminPanelAuth_passportJS');

const db = mongoose.connection;

db.on('connected', (err) => {
    if(err) {
        console.log(err);
        return false;
    }
    console.log('Database Connected SuccessFully..!');
});

module.exports = db;