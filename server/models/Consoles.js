const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consolesSchema = new Schema({
  consoleModel: String,
  controlIncluded: Number,
  memoryCapacity: String,
  gameIncluded: Number,
  description: String,
  img: { type: String},
  price: Number

});

const Consoles = mongoose.model('Consoles', consolesSchema);
module.exports = Consoles;