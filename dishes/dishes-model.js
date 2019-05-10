
const db = require('../data/dbConfig');

module.exports = {
    getDishes,
    getDishById,
    addDish
}

function getDishes(){
    return db('dishes')
}

function getDishById(){
    return db('dishes')
        .where({id})
        .first()
}

function addDish(dish){
    return db('dishes')
        .insert(dish, 'id')
}