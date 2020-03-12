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


  handleUpload (theFile) {
     console.log('file in service: ', theFile)
    return this.service.post('/games/upload', theFile)
      .then(response =>  response.data)  
  }

  handleUpload (theFile) {
    console.log('file in service: ', theFile)
   return this.service.post('/consoles/upload', theFile)
     .then(response =>  response.data)
}

} 

export default Service;