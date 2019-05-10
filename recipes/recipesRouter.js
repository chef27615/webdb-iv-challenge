const recipesRouter = require('express').Router();
const knex = require('knex');

recipesRouter.use((req, res, next)=>{
    res.status(404).json({message:"in recipes route"});
})

module.exports = recipesRouter;