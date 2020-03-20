const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const consolesSchema = new Schema({
  consoleModel: String,
  controlsIncluded: Number,
  memoryCapacity: Number,
  gameIncluded: String,
  description: String,
  imageUrl: { type: String },
  price: Number,
  contact:String

});

const Consoles = mongoose.model('Consoles', consolesSchema);
module.exports = Consoles;