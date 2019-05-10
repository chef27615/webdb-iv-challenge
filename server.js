const express = require('express');
const helmet = require('helmet');

const dishesRouter = require('./dishes/dishesRouter.js');
const recipesRouter = require('./recipes/recipesRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);


server.get('/', (req, res) => {
    res.status(200).json({hello:'world'})
});

module.exports = server;