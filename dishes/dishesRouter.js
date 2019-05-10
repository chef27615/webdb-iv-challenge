const dishesRouter = require('express').Router();
const knex = require('knex');

const Dishes = require('./dishes-model')

dishesRouter.get('/', async (req, res) => {
    try{
        const dishes = await Dishes.getDishes();
        res.status(200).json(dishes);
    } catch(err){res.status(500).json(err)}
})

dishesRouter.get('/:id', async (req, res) => {
    try{
        const dish = await Dishes.getDishById(req.params.id);
        dish ? res.status(200).json(dish) : res.status(404).json({ message:"no such dish"})
    } catch(err){res.status(500).json(err)}
})

dishesRouter.post('/', async (req, res) => {
    const dish = req.body;
    if(dish.name){
        try{
            const inserted = await Dishes.addDish(dish);
            res.status(201).json(inserted);
        } catch(err){res.status(500).json(err)}
    }else{res.status(400).json({message:"can not perform this action"})}
    
})


dishesRouter.use((req, res, next) => {
    res.status(404).json({ message:"in dishes route"})
})

module.exports = dishesRouter;