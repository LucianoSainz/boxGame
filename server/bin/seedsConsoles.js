require('dotenv').config();
const mongoose = require("mongoose");
const Consoles = require("../models/Consoles");



const consoles = [
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/ps4_ixxxtc.jpg",
    consoleModel:'PS4',
    controlsIncluded: 2,
    memoryCapacity:'600',
    gameIncluded: 2,
    description:'se vende PS4 color negra con los juegos Need for Speed heat y Matterfall, todo en buen estado mejor ver y probar',
    contact:"miriam@hotmail.com",
    price: 300
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021442/boxGame/xbox_nkxccv.jpg",
    consoleModel:'Microsoft Xbox One',
    controlsIncluded: 1,
    memoryCapacity:'1',
    gameIncluded: 1,
    description:'se vende Xbox One color blanca con poco uso',
    contact:"gema@gmail.com",
    price: 250
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021520/boxGame/nintendo_nes_uuz3rx.jpg",
    consoleModel:'Nintendo Nes',
    controlsIncluded: 2,
    memoryCapacity:0,
    gameIncluded: 3,
    description:'se vende Nintendo Nes bien conservado con los juegos Mario bros3, Exite Bike y Galaxian',
    contact:"nano@yahoo.com",
    price: 50
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/gameboycolor_d31fam.jpg",
    consoleModel:'Game Boy Color',
    controlsIncluded: 0,
    memoryCapacity:0,
    gameIncluded: 3,
    description:' vendo Game Boy Color',
    contact:"roberto@gmail.com",
    price: 100
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/gameboycolor_d31fam.jpg",
    consoleModel:'PS I',
    controlsIncluded: 2,
    memoryCapacity:'128',
    gameIncluded: 3,
    description:'PS I color gris con los juegos Metal Gear,Crash Racing y Tom Raider',
    contact:"jose@hotmail.com",
    price: 150
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/Game-Boy_itk91k.jpg",
    consoleModel:'Game Boy',
    controlsIncluded: 0,
    memoryCapacity:0,
    gameIncluded: 1,
    description:'includes the game The Legend of Zelda',
    contact: "nico@gmail.com",
    price: 90
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/tama_u6nble.jpg",
    consoleModel:'tamagotchi',
    controlsIncluded: 0,
    memoryCapacity:0,
    gameIncluded: 1,
    description:'In vendita tamagotchi in buone condizioni',
    contact:"mica@hotmail.com",
    price: 20
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/sega_gksjvm.jpg",
    consoleModel:'Sega Genesis',
    controlsIncluded: 2,
    memoryCapacity:0,
    gameIncluded: 3,
    description:'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
    contact:"juan@yahoo.com",
    price:60
  },
  {
    imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021432/boxGame/ps3_xz1imf.jpg",
    consoleModel:'PS3',
    controlsIncluded: 2,
    memoryCapacity:0,
    gameIncluded: 3,
    description:'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
    contact:"daniel@hotmail.com",
    price:200
  },
 {
  imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1584021463/boxGame/gcolor_pk8w8v.jpg",
    consoleModel:'Game Boy Color',
    controlsIncluded: 0,
    memoryCapacity:0,
    gameIncluded: 0,
    description:'compro game color',
    contact:"luz@yahoo.com",
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

