const recipesRouter = require('express').Router();
const knex = require('knex');

const Recipes = require('./recipes-model.js')

recipesRouter.get('/', async (req, res)=> {
    try{
        const recipes = await Recipes.getRecipes();
        res.status(200).json(recipes);
    } catch(err){res.status(500).json(err)}
})

recipesRouter.post('/', async (req, res)=> {
    const recipe = req.body;
    if(recipe.name){
        try{
            const inserted = await Recipes.addRecipe(recipe)
            res.status(200).json(inserted)
        }catch(err){res.status(500).json(err)}
    }else{res.status(400).json({message:'can not add any recipe'})}
})


recipesRouter.use((req, res, next)=>{
    res.status(404).json({message:"in recipes route"});
})

module.exports = recipesRouter;