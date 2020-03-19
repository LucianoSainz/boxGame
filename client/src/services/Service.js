import axios from 'axios';
class Service {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }
  getGames = () => {
    return this.service.get("/games")
      .then(response => response.data)
  }
  getConsoles = () => {
    return this.service.get("/consoles")
      .then(response => response.data)
  }
  handleUploadGames (theFile) {
     console.log('file in service: ', theFile)
    return this.service.post('/games/upload', theFile)
      .then(response =>  response.data)  
  }
  addGame = (newGame, userId) => {
    return this.service.post(`/games/add-game/${userId}`, newGame)
    .then(response =>  response.data)  
  }
    handleUploadConsoles (theFile) {
    console.log('file in service: ', theFile)
   return this.service.post('/consoles/upload', theFile)
     .then(response =>  response.data)
}
  addConsoles = (newConsoles, userId) => {
    return this.service.post(`/consoles/add-consoles/${userId}`, newConsoles)
    .then(response => response.data)
  }

  deleteGame(id) {
    return this.service.delete(`/games/${id}`)
     .then(response => response.data)
  }
  deleteConsole(id) {
    return this.service.delete(`/consoles/${id}`)
     .then(response => response.data)
  }
} 
export default Service;