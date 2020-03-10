require('dotenv').config();
const mongoose = require("mongoose");
const User = require("../models/User");
const Game = require("../models/Game");


const game = [
  {
    // imageUrl:"https://res.cloudinary.com/dlbu6iemy/image/upload/v1583495125/boxGame/71srfb1tCXL._AC_SY355__kfl1kg.jpg",
    img:"",
    type:'Juego Nintendo Switch',
    title:'Luigi s Mansion 3',
    gender: 'adventure',
    year: 2019,
    description:'vendo juego la Mansion de Luigi s 3 en buen estado',
    price:28.90
  },
  {
    // imageUrl:"",
    img:"",
    type:'Juego PS4',
    title:'Juego PS4 Marvel´s Spider-Man',
    gender: 'Entretenimiento',
    year: 2019,
    description:'I sell a new game because they gave it to me and I already had it.',
    price:30
  },
  {
    // imageUrl:"",
    img:"",
    type:'Pc',
    title:' Xbox One South Park: La Vara de la Verdad',
    gender: ' Aventura',
    year: 2018,
    description:'juego en buen estado para pasar tardes divetidas con los colegas',
    price:15.50   
  },
  {
    // imageUrl:"",
    img:"",
    type:' Juego PS3',
    title:' PES 2011',
    gender: ' Deportes',
    year: 2011,
    description:'Vendo gioco per ps3 in buone condizioni, meglio vedere',
    price:17  
  },
  {
    // imageUrl:"",
    img:"",
    type:' Juego PS4',
    title:' Resident Evil 3 Remake PS4',
    gender: ' Entretenimiento',
    year: 2019,
    description:'vendo el mejor juego de Resident Evil de todos los tiempos, buen estado , caja original',
    price:50.90 
  },
  {
    // imageUrl:"",
    img:"",
    type:'Game Boy Color',
    title:'Pokemon especial pikachu edicion',
    gender: ' Entretenimiento',
    year: 1998,
    description:'estoy buscando este juego retro de pokemon si alguin lo tiene contactar',
    price:60
  },
  {
    // imageUrl:"",
    img:"",
    type:'Sega',
    title:'Sonic the Hedgehog',
    gender:'Videojuego de plataformas',
    year: 1991,
    description:'',
    price:30
  },
  {
    // imageUrl:"",
    img:"",
    type:'Family Game',
    title:'Captain Tsubasa Vol. II: Super Striker',
    gender:'football',
    year: 1990,
    description:'I have been looking for this family range console game for a long time now I am a collector',
    price:60
  },
  {
    // imageUrl:"",
    img:"",
    type:'PS I',
    title:'Final Fantasy VII',
    gender:'Entretenimiento',
    year: 1997,
    description:'I sell final game fantasie in good condition, short time of use',
    price:40
  },
  {
    // imageUrl:"",
    img:"",
    type:'PC',
    title:'Doom',
    gender:'Entretenimiento',
    year: 1993,
    description:'estoy buscando el juego de mi infancia el Doom para remorar las tardes despues del colegio.',
    price:50
  },
  {
    // imageUrl:"",
    img:"",
    type:'PS I',
    title:'Driver',
    gender:'Carreras',
    year: 1999,
    description:'vendo el mejor juego de carreras de PS I',
    price:15
  },
  {
    // imageUrl:"",
    img:"",
    type:'Game Boy',
    title:'Donkey Kong Land 3',
    gender:'Entretenimiento',
    year: 1997,
    description:'compro juego DONKEY KONG en buen estado',
    price:20
  },
  {
    // imageUrl:"",
    img:"",
    type:'Nintendo Nes',
    title:'Super Mario Bros',
    gender:'Plataformas',
    year: 1987,
    description:'vendo super mario bros',
    price:17
  }
];


mongoose
  .connect(`${process.env.DBURL}`, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return Game.collection.drop()
    .then(_ => {
      return Game.create(game, (err) => {
        if (err) { throw (err) }
        console.log(`Created ${game.length} game`)
        mongoose.connection.close()
      });
    })
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });



