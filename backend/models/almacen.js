const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    cod:String,
    direction:String,
    date: {type:Date,default:Date.now},
});

const product = mongoose.model("product",productSchema);
module.exports = product;