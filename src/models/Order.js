const {pool} = require('../config/db');

const createOrder = async (user_id, order_date, total_amount) =>{
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO orders (user_id, order_date, total_amount)
                    VALUES (?, ?, ?);`;
        pool.query(query, [user_id, order_date, total_amount], (error, result) => {
            if(error){
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    createOrder,
}