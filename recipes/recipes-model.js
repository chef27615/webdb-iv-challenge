const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    addRecipe
}

function getRecipes(dishId){
    return db('recipes as r')
    .join('dishes as d', 'r.dish_id', 'd.id')
    .select('r.id', 'r.name', 'd.id', 'd.name')
    .where({dish_id: dishId});
}

function addRecipe(recipe){
    return db('recipes')
    .insert(recipe, 'id')
}