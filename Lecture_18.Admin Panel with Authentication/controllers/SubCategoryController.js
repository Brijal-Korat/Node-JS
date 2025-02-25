const subCategoryModel = require('../models/subCategoryModel');
const categoryModel = require('../models/categoryModel');

const addSubCategoryPage = async (req,res) =>{
    try{
        let categories = await categoryModel.find({ status: 'active' });

        return res.render('subcategory/addSubCategory',{
            categories: categories
        });
    }catch(err){
        console.log(err);
        return false;
    }
}

const viewSubCategoryPage = async (req,res) => {
    try{
        let subcategorydata = await subCategoryModel.find({}).populate('categoryId');
        return res.render('subcategory/viewSubCategory', {
            subcategorydata
        })
    }catch(err){
        console.log(err);
        return false;
    }
}

const insertSubCategory = async (req,res) => {
    try{
        const { category, subcategory } = req.body;

        await subCategoryModel.create({
            categoryId: category,
            subcategory: subcategory
        })
        req.flash('success', 'SubCategory Successfully Added..! ( You can view it on ViewSubCategory Page..! )')
        return res.redirect("/subcategory/addsubcategorypage");
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    addSubCategoryPage,
    viewSubCategoryPage,
    insertSubCategory,
}