const {pool} = require('../config/db');

const getAllAddress = async() =>{
    return new Promise((resolve,reject) => {
        const query = 'SELECT * FROM address;';
        pool.query(query, (err, results) => {
            if(err){
                reject(err);
                return;
            }
            resolve(results);
        })
    })
}

const addAddress = async ({user_id, street_address, city, state, postal_code, country}) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO address (user_id, street_address, city, state, postal_code, country)
                        VALUES (?, ?, ?, ?, ?, ?);
        `;
        pool.query(
            query,
            [user_id, street_address, city, state, postal_code, country],
            (error, results) => {
                if(error){
                    reject(error);
                    return;
                }
                resolve(results);
            }
        );
    });
}

module.exports = {
    getAllAddress,
    addAddress
}