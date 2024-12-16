const {pool} = require('../config/db');

const getAllBrand = async () => {
    return new Promise((resolve, reject ) => {
        const query = 'SELECT * FROM brand; ';
        pool.query(query, (error, results) => {
            if(error){
                reject(error);
                return;
            }
            resolve(results);
        });
    });
}

module.exports = {
    getAllBrand,
};