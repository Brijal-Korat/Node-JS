const addSubCategory = (req,res) => {
    return res.render('category/addCategory');
}

const viewSubCategoryPage = (req,res) => {
    return res.render('category/viewCategory')
}


module.exports = {
    addSubCategory,
    viewSubCategoryPage
}