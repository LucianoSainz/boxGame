const express = require('express');
const router = express.Router();
const games = require('../models/Game')

router.get('/', (req, res, next) => {
  games.find()
  .then(allgames => {
    res.json(allgames)
  })
  .catch (err => next(err))
  console.log('error');
})

module.exports = router;