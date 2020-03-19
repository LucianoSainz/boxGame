const express = require('express');
const router = express.Router();
const Games = require('../../models/Game')
const Consoles = require ('../../models/Consoles')
const User = require('../../models/User');
const uploader = require('../../configs/cloudinary');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  console.log('file is: ', req.file)
 if (!req.file) {
   next(new Error('No file uploaded!'));
   return;
 }
 console.log(req.file.secure_url)
 res.json({ secure_url: req.file.secure_url });
})
router.get('/', (req, res, next) => {
  Games.find()
  .then(allgames => {
    res.json(allgames)
  })
  .catch (err => next(err))
  console.log('error');
})

router.get('/:id', (req, res, next) => {
  Games.findById(req.params.id)
  .then(onegame => {
    res.json(onegame)
  })
  .catch (err => console.log('error'))
})

router.delete("/:id", (req, res, next) => {
    Games.findByIdAndDelete(req.params.id).then(deleteGames =>
       res.json({ deleteGames })
     );
   });

router.post('/add-game/:userId', (req, res, next) => {
  Games.create(req.body).then(gameCreated =>
    User.findByIdAndUpdate(req.params.userId, {
      $push: {games: req.body._id}
    })
    .then(response => res.json(response))
  );
})



module.exports = router;