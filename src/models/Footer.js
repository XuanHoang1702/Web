const {pool} = require('../config/db');

const getFooter = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM footer;';
        pool.query(query, (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        })
    })
}

module.exports = {
    getFooter,
}