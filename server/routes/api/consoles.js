const express = require('express');
const router = express.Router();
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
  Consoles.find()
  .then(allconsoles => {
    res.json(allconsoles)
  })
  .catch (err => next(err))
  console.log('error');
})

router.delete("/:id", (req, res, next) => {
  Consoles.findByIdAndDelete(req.params.id).then(deleteConsoles =>
     res.json({ deleteConsoles })
   );
 });

router.post('/add-consoles/:userId', (req, res, next) => {
  Consoles.create(req.body).then(consolesCreated =>
    User.findByIdAndUpdate(req.params.userId, {
      $push: {consoles: req.body._id}
    })
    .then(response => res.json(response))
  );
})


module.exports = router;

