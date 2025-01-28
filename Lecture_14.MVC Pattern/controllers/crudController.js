const userModel = require('../models/UsersModel');

const addCrud = (req,res) => {
    return res.render('crud/add');
}

const viewCrud = async (req,res) => {
    try {
        let allRecord = await userModel.find({})
        return res.render('crud/view', {
            allRecord
        })
    } catch(err) {
        console.log(err);
        return false;
    }
}

const insertRecord = async (req,res) => {
    try{
        const { name, email, password, gender, hobby, city } = req.body;
        
        await userModel.create({
            username : name,
            useremail : email,
            userpassword : password,
            usergender : gender,
            userhobby : hobby,
            usercity : city,
            userimage : req.file?.path
        })
        console.log("Data added..!");
        return res.redirect('/crud');
    }catch(err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addCrud,
    viewCrud,
    insertRecord
}