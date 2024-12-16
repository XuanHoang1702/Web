const {pool} = require('../config/db');

const getAllProduct = async () => {
    return new Promise( (resolve, reject) => {
        const query = 'SELECT * FROM product;';
        pool.query(query, (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    getAllProduct,
};