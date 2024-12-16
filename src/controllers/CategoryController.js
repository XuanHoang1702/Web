const Category = require('../models/Category');

const index = async (req, res) => {
    try{
        const categories = await Category.getAllCategory();
        res.status(200).json(categories);
    }catch(error){
        res.status(error.code || 500).json({
            message: error.message || "Intenal Server Error",
        });
    }
}

const create = async (req, res) => {
    try{
        const {name, description} = req.body;
        if (!name || !description) {
            return res.status(400).json({ message: '!' });
        }
        const result = await Category.createCategory(name, description);
        res.status(201).json({
            message: "Created category",
            data: result
        })
    }catch(error){
        if (error.code === 'ER_PARSE_ERROR') {
            return res.status(400).json({ message: 'Syntax error SQL: ' + error.message });
        }
        res.status(error.code || 500).json({message: error.message || "Internal Server Error"});
    }
}

module.exports = {
    index,
    create
};