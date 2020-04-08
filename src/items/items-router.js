const express = require('express');
const logger = require('../logger');
const ItemsService = require('./items-service.js');


const bodyParser = express.json();
const itemsRouter = express.Router();

itemsRouter
  .route('/')
  .get((req, res, next) => {
    ItemsService.getItems(req.app.get('db'))
      .then((items) => {
        console.log('items is', items);
        // if (req.query.q) {
        //   const filterResults = ingredients.filter((ingredient) => {
        //     return ingredient.ingredient_name.toLowerCase().includes(req.query.q.toLowerCase());
        //   });
        //   res.json(filterResults.map(serializeIngredient));
        // }
        res
          .status(200)
          .json(items);
      });
  });

// .post(bodyParser, (req, res, next) => {

// })

module.exports = itemsRouter;