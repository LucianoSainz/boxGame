const express = require('express');
const router = express.Router();
const games = require('../../models/Game');
const uploader = require('../../configs/cloudinary');


router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
//   const imgName = req.file.originalname;
//   const newPhoto = new Photo({imgName})
//   console.log(req.file.url);


//   newPhoto.save()
//   .then(photo => {
//     res.json({url: req.file, photo: photo});
//   })
//   .catch(error => {
//     console.log(error);
//   })
// });
   console.log('file is: ', req.file)
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  console.log(req.file.secure_url)
  res.json({ secure_url: req.file.secure_url });
})


// router.post('/', uploader.single("imageUrl"), (req, res, next) => {
//    console.log('file is: ', req.file)
//    let gameToCreate = {
//     "type": req.body.type,
//     "title": req.body.title,
//     "gender": req.body.gender,
//     "year": req.body.year,
//     "description": req.body.year,
//     "price": req.body.price,
//     "imageUrl": {secure_url: req.file.secure_url}
//    }
//    .then(createGame => {
//      res.json(createGame)
//    })

//   if (!req.file) {
//     next(new Error('No file uploaded!'));
//     return;
//   }
//   // get secure_url from the file object and save it in the 
//   // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
//   res.json({ secure_url: req.file.secure_url });
// })

module.exports = router;

  
  

