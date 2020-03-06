const express = require('express');
const router = express.Router();
const Consoles = require('../../models/Consoles')

router.get('/', (req, res, next) => {
  Consoles.find()
  .then(allconsoles => {
    res.json(allconsoles)
  })
  .catch (err => next(err))
  console.log('error');
})


module.exports = router;


