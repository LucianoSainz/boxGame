// config/ cloudinary.js
require('dotenv').config();

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  Cloud_name: process.env.Cloud_name,
  API_Key:process.env.API_Key,
  API_Secret: process.env.API_Secret
});

var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'folder-name', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png'],
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploader = multer({ storage: storage });

module.exports = uploader;