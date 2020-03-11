// $ node bin/seeds.js
require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Game = require("../models/Game");
const Consoles = require("../models/Consoles");

const saltRounds = 10;
const plainPassword1 = "123";
const salt = bcrypt.genSaltSync(saltRounds);
const hash1 = bcrypt.hashSync(plainPassword1, salt);





// game Id
const game1 = new mongoose.mongo.ObjectID();
const game2 = new mongoose.mongo.ObjectID();
const game3 = new mongoose.mongo.ObjectID();
const game4 = new mongoose.mongo.ObjectID();
const game5 = new mongoose.mongo.ObjectID();
const game6 = new mongoose.mongo.ObjectID();
const game7 = new mongoose.mongo.ObjectID();
const game8 = new mongoose.mongo.ObjectID();
const game9 = new mongoose.mongo.ObjectID();
const game10 = new mongoose.mongo.ObjectID();
const game11 = new mongoose.mongo.ObjectID();
const game12 = new mongoose.mongo.ObjectID();
const game13 = new mongoose.mongo.ObjectID();

//connsoles Id
const consoles1 = new mongoose.mongo.ObjectID();
const consoles2 = new mongoose.mongo.ObjectID();
const consoles3 = new mongoose.mongo.ObjectID();
const consoles4 = new mongoose.mongo.ObjectID();
const consoles5 = new mongoose.mongo.ObjectID();
const consoles6 = new mongoose.mongo.ObjectID();
const consoles7 = new mongoose.mongo.ObjectID();
const consoles8 = new mongoose.mongo.ObjectID();
const consoles9 = new mongoose.mongo.ObjectID();
const consoles10 = new mongoose.mongo.ObjectID();


const games = [
  {
    imageUrl:"",
    _id: game1,
    type: 'Juego Nintendo Switch',
    title: 'Luigi s Mansion 3',
    gender: 'adventure',
    year: 2019,
    description: 'vendo juego la Mansion de Luigi s 3 en buen estado',
    price: 28.90
  },
  {
    imageUrl:"",
    _id: game2,
    img: "",
    type: 'Juego PS4',
    title: 'Juego PS4 Marvel´s Spider-Man',
    gender: 'Entretenimiento',
    year: 2019,
    description: 'I sell a new game because they gave it to me and I already had it.',
    price: 30
  },
  {
    imageUrl:"",
    _id: game3,
    type: 'Pc',
    title: ' Xbox One South Park: La Vara de la Verdad',
    gender: ' Aventura',
    year: 2018,
    description: 'juego en buen estado para pasar tardes divetidas con los colegas',
    price: 15.50
  },
  {
    imageUrl:"",
    _id: game4,
    type: ' Juego PS3',
    title: ' PES 2011',
    gender: ' Deportes',
    year: 2011,
    description: 'Vendo gioco per ps3 in buone condizioni, meglio vedere',
    price: 17
  },
  {
    imageUrl:"",
    _id: game5,
    type: ' Juego PS4',
    title: ' Resident Evil 3 Remake PS4',
    gender: ' Entretenimiento',
    year: 2019,
    description: 'vendo el mejor juego de Resident Evil de todos los tiempos, buen estado , caja original',
    price: 50.90
  },
  {
    imageUrl:"",
    _id: game6,
    type: 'Game Boy Color',
    title: 'Pokemon especial pikachu edicion',
    gender: ' Entretenimiento',
    year: 1998,
    description: 'estoy buscando este juego retro de pokemon si alguin lo tiene contactar',
    price: 60
  },
  {
    imageUr:"",
    _id: game7,
    type: 'Sega',
    title: 'Sonic the Hedgehog',
    gender: 'Videojuego de plataformas',
    year: 1991,
    description: '',
    price: 30
  },
  {
    imageUrl:"",
    _id: game8,
    type: 'Family Game',
    title: 'Captain Tsubasa Vol. II: Super Striker',
    gender: 'football',
    year: 1990,
    description: 'I have been looking for this family range console game for a long time now I am a collector',
    price: 60
  },
  {
    imageUrl:"",
    _id: game9,
    type: 'PS I',
    title: 'Final Fantasy VII',
    gender: 'Entretenimiento',
    year: 1997,
    description: 'I sell final game fantasie in good condition, short time of use',
    price: 40
  },
  {
    imageUrl:"",
    _id: game10,
    type: 'PC',
    title: 'Doom',
    gender: 'Entretenimiento',
    year: 1993,
    description: 'estoy buscando el juego de mi infancia el Doom para remorar las tardes despues del colegio.',
    price: 50
  },
  {
    imageUrl:"",
    _id: game11,
    type: 'PS I',
    title: 'Driver',
    gender: 'Carreras',
    year: 1999,
    description: 'vendo el mejor juego de carreras de PS I',
    price: 15
  },
  {
    imageUrl:"",
    _id: game12,
    type: 'Game Boy',
    title: 'Donkey Kong Land 3',
    gender: 'Entretenimiento',
    year: 1997,
    description: 'compro juego DONKEY KONG en buen estado',
    price: 20
  },
  {
     imageUrl:"",
    _id: game13,
    type: 'Nintendo Nes',
    title: 'Super Mario Bros',
    gender: 'Plataformas',
    year: 1987,
    description: 'vendo super mario bros',
    price: 17
  }
]

const consoles = [
  {
    imageUrl:"",
    _id: consoles1,
    consoleModel: 'PS4',
    controlsIncluded: 2,
    memoryCapacity: '1TB',
    gameIncluded: 2,
    description: 'se vende PS4 color negra con los juegos Need for Speed heat y Matterfall, todo en buen estado mejor ver y probar',
    price: 300
  },
  {
    imageUrl:"",
    _id: consoles2,
    consoleModel: 'Microsoft Xbox One',
    controlsIncluded: 1,
    memoryCapacity: '1TB',
    gameIncluded: 1,
    description: 'se vende Xbox One color blanca con poco uso',
    price: 250
  },
  {
    imageUrl:"",
    _id: consoles3,
    consoleModel: 'Nintendo Nes',
    controlsIncluded: 2,
    memoryCapacity: '-',
    gameIncluded: 3,
    description: 'se vende Nintendo Nes bien conservado con los juegos Mario bros3, Exite Bike y Galaxian',
    price: 50
  },
  {
    imageUrl:"",
    _id: consoles4,
    consoleModel: 'Game Boy Color',
    controlsIncluded: 0,
    memoryCapacity: '-',
    gameIncluded: 3,
    description: ' vendo Game Boy Color roja',
    price: 100
  },
  {
    imageUrl:"",
    _id: consoles5,
    consoleModel: 'PS I',
    controlsIncluded: 2,
    memoryCapacity: 'Memory Card 128Mb',
    gameIncluded: 3,
    description: 'PS I color gris con los juegos Metal Gear,Crash Racing y Tom Raider',
    price: 150
  },
  {
    imageUrl:"",
    _id: consoles6,
    consoleModel: 'Game Boy',
    controlsIncluded: 0,
    memoryCapacity: '-',
    gameIncluded: 1,
    description: 'includes the game The Legend of Zelda',
    price: 90
  },
  {
    imageUrl:"",
    _id: consoles7,
    consoleModel: 'tamagotchi',
    controlsIncluded: 0,
    memoryCapacity: '-',
    gameIncluded: 1,
    description: 'In vendita tamagotchi in buone condizioni',
    price: 20
  },
  {
    imageUrl:"",
    _id: consoles8,
    consoleModel: 'Sega Genesis',
    controlsIncluded: 2,
    memoryCapacity: '-',
    gameIncluded: 3,
    description: 'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
    price: 60
  },
  {
    imageUrl:"",
    _id: consoles9,
    consoleModel: 'PS3',
    controlsIncluded: 2,
    memoryCapacity: '-',
    gameIncluded: 3,
    description: 'incluye juegos Sonic the Hedgehog 2,Mortal Kombat 3 y Streets of Rage 2',
    price: 200
  },
  {
    imageUrl: "",
    _id: consoles10,
    consoleModel: 'Game Boy Color',
    controlsIncluded: 0,
    memoryCapacity: '-',
    gameIncluded: 0,
    description: 'compro game color',
    price: 90
  }
]


const user = [
  {
    username: "Daniel Sainz",
    password: hash1,
    email: "daniel.ronhacker@gmail.com",
    games: [game5, game1, game9,],
    consoles: [consoles1]


  },
  {

    username: "bob",
    password: hash1,
    email: "bob@yahoo.com",
    games: [game2, game4],
    consoles: [consoles3]

  },
  {

    username: "Jaime",
    password: hash1,
    email: "jaimehidalgo@hotmail.com",
    games: [game3],
    consoles: []

  },
  {

    username: "frank",
    password: hash1,
    email: "frank_35gmail.com",
    games: [game6, game7, game8,],
    consoles: [consoles2]

  },
  {

    username: "cesar",
    password: hash1,
    email: "cesarbaires@hotmail.com",
    games: [game10, game12,],
    consoles: [consoles6, consoles9]

  },
  {

    username: "Maria",
    password: hash1,
    email: "mary@gmail.com",
    games: [game11, game13],
    consoles: [consoles10]

  },
  {

    username: "Alba",
    password: hash1,
    email: "albaperez@yahoo.com",
    games: [game4],
    consoles: [consoles7]

  },
  {

    username: "Silvia",
    password: hash1,
    email: "silvia@hotmail.com",
    games: [],
    consoles: []

  },
  {

    username: "Miriam",
    password: hash1,
    email: "miriam@yahoo.com",
    games: [game9],
    consoles: []

  },
  {

    username: "Gema",
    password: hash1,
    email: "gema@gmail.com",
    games: [],
    consoles: []

  }
];


mongoose
  .connect(`${process.env.DBURL}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  // .then(_ => user.collection.drop())
  // .then(_ => collection.collection.drop())
  // .then(_ => game.collection.drop)

 .then(_ => {
     Game.create(games, (err) => {
      if (err) { throw (err) }
      console.log(`Created ${games.length} games`)
        
          Consoles.create(consoles, (err) => {
            if (err) { throw (err) }
            console.log(`Created ${consoles.length} consoles`)
          
            return User.create(user, (err) => {
              if (err) { throw (err) }
              console.log(`Created ${user.length} user`)
              mongoose.connection.close()
            })
          })
        })
    })

  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  // Game.create(games, (err) =>{
  // })
  // .then(()=>{
  //   return Player.create()
  // })
  // then(()=>{
  //   return Games2.create()
  // })
  // then(()=>console.log("Successfully created"))