require('dotenv').config();
const mongoose = require("mongoose");
const Consoles = require("../models/Consoles");


mongoose
  .connect('mongodb://localhost/user', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  Consoles.collection.drop()

  const consoles = [
    {
      photo:"",
      consoleModel:'PS4',
      controlsIncluded: 2,
      memoryCapacity:'1TB',
      gameIncluded: 2,
      description:'se vende PS4 color negra con los juegos Need for Speed heat y Matterfall, todo en buen estado mejor ver y probar',
      price: 300
    },
    {
      photo:"",
      consoleModel:'Microsoft Xbox One',
      controlsIncluded: 1,
      memoryCapacity:'1TB',
      gameIncluded: 1,
      description:'se vende Xbox One color blanca con poco uso',
      price: 250
    },
    {
      photo:"",
      consoleModel:'Family Game',
      controlsIncluded: 2,
      memoryCapacity:'-',
      gameIncluded: 3,
      description:'se vende Family Game bien conservado con los juegos Mario bros3, Exite Bike y Galaxian',
      price: 50
    },
    {
      photo:"",
      consoleModel:'Game Boy Color',
      controlsIncluded: 0,
      memoryCapacity:'-',
      gameIncluded: 3,
      description:' vendo Game Boy Color roja',
      price: 100
    },
    {
      photo:"",
      consoleModel:'PS I',
      controlsIncluded: 2,
      memoryCapacity:'Memory Card 128Mb',
      gameIncluded: 3,
      description:'PS I color gris con los juegos Metal Gear,Crash Racing y Tom Raider',
      price: 150
    },
    {
      photo:"",
      consoleModel:'Game Boy',
      controlsIncluded: 0,
      memoryCapacity:'-',
      gameIncluded: 1,
      description:'includes the game The Legend of Zelda',
      price: 90
    },
    {
      photo:"",
      consoleModel:'tamagotchi',
      controlsIncluded: 0,
      memoryCapacity:'-',
      gameIncluded: 1,
      description:'In vendita tamagotchi in buone condizioni',
      price: 20
    },
    {
      photo:"",
      consoleModel:'Sega Genesis',
      controlsIncluded: 2,
      memoryCapacity:'-',
      gameIncluded: 3,
      description:'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
      price:60
    },
    {
      photo:"",
      consoleModel:'PS3',
      controlsIncluded: 2,
      memoryCapacity:'-',
      gameIncluded: 3,
      description:'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
      price:200
    },
   {
      photo:"",
      consoleModel:'Game Boy Color',
      controlsIncluded: 0,
      memoryCapacity:'-',
      gameIncluded: 0,
      description:'compro game color',
      price:90
   }
  ];

  Consoles.create(consoles, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${consoles.length} consoles`)
    mongoose.connection.close()
  });