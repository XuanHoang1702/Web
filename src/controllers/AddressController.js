const Address = require('../models/Address');

const index = async (req, res) => {
    try{
        const address = await Address.getAllAddress();
        res.status(200).json(address);
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
    }
}

const store = async (req, res) => {
    try{
        const {user_id, street_address, city, state, postal_code, country} = req.body;

        if(!street_address || !city || !country){
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const result = await Address.addAddress({user_id, street_address, city, state, postal_code, country});
        res.status(201).json(result);
    }catch(error){
        console.error(error);
        res.status(error.code || 500).json({
            message: error.message || "Internal Server Error"
        });
    }
}

module.exports = {
    index,
    store
}
