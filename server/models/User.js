const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Game = require("../models/Game");
const Consoles = require("../models/Consoles");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  img: { type: String },
  games: [
    {type: Schema.Types.ObjectId, ref: "Game"}
  ],
  consoles: [
    {type: Schema.Types.ObjectId, ref: "Consoles"}
  ]
  },
  {
    timestamps: true

  });

const User = mongoose.model('User', userSchema);
module.exports = User;
