const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const consoleSchema = new Schema({
  consoleModel:String,
  controlIncluded:Number,
  memoryCapacity:String,
  gameIncluded:Number,
  description:String,
  photo: {type:String},
  price:Number

});

const Console = mongoose.model('Console', consoleSchema);
module.exports = Console;