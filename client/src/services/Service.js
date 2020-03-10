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

  getAddGame = () => {
    return this.service.get("/addGame")
    .then(response => response.data)
  }

  getAddConsoles = () => {
    return this.service.get("/addCosoles")
    .then(response => response.data)
  }
}

export default Service;