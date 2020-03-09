const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  type: String,
  title: String,
  gender: String,
  ageClassification: Number,
  year: Number,
  // imageUrl: { type: String, required: true 
  img: { type: String },
  lenguage: String,
  description: String,
  price: Number

});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;