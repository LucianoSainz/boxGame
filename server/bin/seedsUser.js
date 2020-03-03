// $ node bin/seeds.js
require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const saltRounds = 10;
const plainPassword1 = "123";
const salt = bcrypt.genSaltSync(saltRounds);
const hash1 = bcrypt.hashSync(plainPassword1, salt);

const { DBURL } = process.env;
mongoose
  .connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  User.collection.drop()

const user = [
  {
    username: "Daniel Sainz",
    password:hash1,
    email:"daniel.ronhacker@gmail.com",
    birthDate:"1986-03-04",
    photo:""
  },
  {
    username: "bob",
    password:hash1,
    email:"bob@yahoo.com",
    birthDate:"1983-10-01",
    photo:""
  },
  {
    username: "Jaime",
    password:hash1,
    email:"jaimehidalgo@hotmail.com",
    birthDate:"1988-07-12",
    photo:"" 
  },
  {
    username: "frank",
    password:hash1,
    email:"frank_35gmail.com",
    birthDate:"1984-02-25",
    photo:""
  },
  {
    username: "cesar",
    password:hash1,
    email:"cesarbaires@hotmail.com",
    birthDate:"1989-02-15",
    photo:""
  },
  {
    username: "Maria",
    password:hash1,
    email:"mary@gmail.com",
    birthDate:"1986-06-09",
    photo:""
  },
  {
    username: "Alba",
    password:hash1,
    email:"albaperez@yahoo.com",
    birthDate:"1990-01-30",
    photo:""
  },
  {
    username: "Silvia",
    password:hash1,
    email:"silvia@hotmail.com",
    birthDate:"1988-06-08",
    photo:""
  },
  {
    username: "Miriam",
    password:hash1,
    email:"miriam@yahoo.com",
    birthDate:"1991-10-12",
    photo:""
  },
  {
    username: "Gema",
    password:hash1,
    email:"gema@gmail.com",
    birthDate:"1985-12-24",
    photo:""
  }
];

User.create(user, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${user.length} user`)
  mongoose.connection.close()
});