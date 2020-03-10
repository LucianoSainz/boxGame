const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  type: String,
  title: String,
  gender: String,
  year: Number, 
  img: { type: String},
  description: String,
  price: Number

});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;