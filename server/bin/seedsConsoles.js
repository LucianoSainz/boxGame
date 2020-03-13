require('dotenv').config();
const mongoose = require("mongoose");
const Consoles = require("../models/Consoles");



const consoles = [
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/ps4_ixxxtc.jpg",
    consoleModel:'PS4',
    controlsIncluded: 2,
    memoryCapacity:'1TB',
    gameIncluded: 2,
    description:'se vende PS4 color negra con los juegos Need for Speed heat y Matterfall, todo en buen estado mejor ver y probar',
    contact:5677219,
    price: 300
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021442/boxGame/xbox_nkxccv.jpg",
    consoleModel:'Microsoft Xbox One',
    controlsIncluded: 1,
    memoryCapacity:'1TB',
    gameIncluded: 1,
    description:'se vende Xbox One color blanca con poco uso',
    contact:7977469,
    price: 250
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021520/boxGame/nintendo_nes_uuz3rx.jpg",
    consoleModel:'Nintendo Nes',
    controlsIncluded: 2,
    memoryCapacity:'-',
    gameIncluded: 3,
    description:'se vende Nintendo Nes bien conservado con los juegos Mario bros3, Exite Bike y Galaxian',
    contact:27877469,
    price: 50
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/gameboycolor_d31fam.jpg",
    consoleModel:'Game Boy Color',
    controlsIncluded: 0,
    memoryCapacity:'-',
    gameIncluded: 3,
    description:' vendo Game Boy Color',
    contact:602372159,
    price: 100
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/gameboycolor_d31fam.jpg",
    consoleModel:'PS I',
    controlsIncluded: 2,
    memoryCapacity:'Memory Card 128Mb',
    gameIncluded: 3,
    description:'PS I color gris con los juegos Metal Gear,Crash Racing y Tom Raider',
    contact:951542159,
    price: 150
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/Game-Boy_itk91k.jpg",
    consoleModel:'Game Boy',
    controlsIncluded: 0,
    memoryCapacity:'-',
    gameIncluded: 1,
    description:'includes the game The Legend of Zelda',
    contact:693472159,
    price: 90
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/tama_u6nble.jpg",
    consoleModel:'tamagotchi',
    controlsIncluded: 0,
    memoryCapacity:'-',
    gameIncluded: 1,
    description:'In vendita tamagotchi in buone condizioni',
    contact:466872159,
    price: 20
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/sega_gksjvm.jpg",
    consoleModel:'Sega Genesis',
    controlsIncluded: 2,
    memoryCapacity:'-',
    gameIncluded: 3,
    description:'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
    contact:776372159,
    price:60
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/ps3_xz1imf.jpg",
    consoleModel:'PS3',
    controlsIncluded: 2,
    memoryCapacity:'-',
    gameIncluded: 3,
    description:'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
    contact:567928959,
    price:200
  },
 {
  imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/gcolor_pk8w8v.jpg",
    consoleModel:'Game Boy Color',
    controlsIncluded: 0,
    memoryCapacity:'-',
    gameIncluded: 0,
    description:'compro game color',
    contact:567372159,
    price:90
 }
];


mongoose
.connect(`${process.env.DBURL}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Consoles.collection.drop()
    .then(_ => {
      return Consoles.create(consoles, (err) => {
        if (err) { throw (err) }
        console.log(`Created ${consoles.length} consoles`)
        mongoose.connection.close()
      });
    })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

