const addCrud = (req,res) => {
    return res.render('crud/add');
}

const viewCrud = (req,res) => {
    return res.render('crud/view');
}

module.exports = {
    addCrud,
    viewCrud
}