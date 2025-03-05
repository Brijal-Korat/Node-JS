const addProductsPage = (req,res) => {
    return res.render('products/addProducts');
}

const viewProductsPage = (req,res) => {
    return res.render('products/viewProducts');
}

module.exports = {
    addProductsPage,
    viewProductsPage,
}