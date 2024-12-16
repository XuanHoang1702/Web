const Brand = require('../models/Brand');

const index = async (req, res) => {
    try{
        const brands = await Brand.getAllBrand();
        res.status(200).json(brands);
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
        
    }
}

module.exports = {
    index,
}