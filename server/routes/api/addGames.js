const express = require('express');
const router = express.Router();
const Game = require('../../models/Game')


router.post('/addGame', (req, res, next) => {

  Game.create(req.body)
  .then(thisGame => res.json(thisGame))
  .catch(err => console.log(err));
});


router.put("/:id", (req, res, next) => {
  game.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(updatedGame =>
    res.json(updatedGame)
  );
});

router.delete("/:id", (req, res, next) => {
  game.findByIdAndDelete(req.params.id).then(deletedGame =>
    res.json({ deleted: true, deletedGame })
  );
});

module.exports = router;



