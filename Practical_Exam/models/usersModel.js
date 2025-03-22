const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const users = mongoose.model("userlogin", userSchema);

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    quantity : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
})

const blogUser = mongoose.model("product", productSchema);


const cartSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'userlogin'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image : {
        type : String,
        required : true
    }
});

const cart = mongoose.model("cart", cartSchema);

module.exports = {
    users,
    blogUser,
    cart
};


// hey gpt, please make my add to cart functionality in viewProduct page. I want the functionality like that when I click on "add to cart" buttton , then my product will add on cart page automaticalluy but the after clicking on "add to cart" button, i want viewProduct rendering. and when I click on viewCart page, all the products which I added in cart would show in that page with the total of the all product price also in the end of the page. 