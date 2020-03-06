import axios from 'axios';

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`, //esto va en la ruta de abajo de app.js en el server
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
}
  export default Service;