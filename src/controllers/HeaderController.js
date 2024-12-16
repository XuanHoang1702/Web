const Header = require('../models/Header');

const index = async (req, res) =>{
    try{
        const header = await Header.getHeader();
        res.status(200).json(header)
    }catch(error){
        res.status(error.code || 500).json({
            message:error.message || "Internal Server Error",
        });
    }
}

module.exports = {
    index,
}