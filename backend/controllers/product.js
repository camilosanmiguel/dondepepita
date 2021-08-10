const Product = require("../models/product");

const registerProduct = async (req,res) => {
    if (!req.body.name || !req.body.name) {
        return res.status(401).send("Process failed: Imcoplete data");
    }
    const product = new Product({
        name:req.body.name,
        description: req.body.description,
        dbStatus:true,
    });
    const result = await product.save();
    if (!result) return res.status(401).send("Failed to register product")
    return res.status(200).send({product});
};

const listProduct = async (req,res) => {
    const product = await Product.find();
    if(!role) return res.status(401).send("No product");
};

module.exports = { registerProduct , listProduct };