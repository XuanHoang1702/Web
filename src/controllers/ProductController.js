const Product = require('../models/Product');

const index = async (req, res) => {
    try{
        const products = await Product.getAllProduct();
        res.status(200).json(products);
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error",
        });
    }
}

module.exports = {
    index,
}