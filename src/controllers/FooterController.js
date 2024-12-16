const Footer = require('../models/Footer');

const index = async (req, res) => {
    try{
        const footer = await Footer.getFooter();
        res.status(200).json(footer);
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
    }
}

module.exports = {
    index,
}