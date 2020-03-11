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


  addGame = (type, title, gender, year, imageUrl, description, price) => this.service.post(`/addGame`, {type, title, gender, year, imageUrl, description, price})
  .then(response => {
        return response.data
})
}

  

export default Service;