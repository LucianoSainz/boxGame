const express = require('express');
const router = express.Router();
const games = require('../../models/Game')

router.get('/', (req, res, next) => {
  games.find()
  .then(allgames => {
    res.json(allgames)
  })
  .catch (err => next(err))
  console.log('error');
})


router.get('/:id', (req, res, next) => {
  games.findById(req.params.id)
  .then(onegame => {
    res.json(onegame)
  })
  .catch (err => console.log('error'))
})


// router.post('/add', (req, res, next) => {
// })

module.exports = router;


