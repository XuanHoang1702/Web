const {pool} = require('../config/db');

const getHeader = async () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM header;';
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
    getHeader,
}