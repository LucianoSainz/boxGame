const express = require('express');
const router = express.Router();
const games = require('../../models/Game')
const uploader = require('../../configs/cloudinary');

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



router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  console.log('file is: ', req.file)
 if (!req.file) {
   next(new Error('No file uploaded!'));
   return;
 }
 console.log(req.file.secure_url)
 res.json({ secure_url: req.file.secure_url });
})





router.delete("/:id", (req, res, next) => {
    games.findByIdAndDelete(req.params.id).then(deletedGame =>
       res.json({ deleted: true, deletedGame })
     );
   });


module.exports = router;


