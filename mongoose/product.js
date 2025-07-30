const mongoose = require('mongoose');
//schema for product
let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: Number,
    description: String,
});
//exporting the product model
const productModel = mongoose.model('node-tut', productSchema, 'node-tut');
module.exports = productModel;