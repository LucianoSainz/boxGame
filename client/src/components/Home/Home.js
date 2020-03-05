import React from 'react';
import { Link } from "react";
import Service from './Service';



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      games: [],
      consoles: []
    }
    this.service = new Service()
  }

  componentDidMount() {
    console.log(this.state)
    this.service.getGames()
    .then(response => {
      console.log(response)
      this.setState({
        games: response
      })

    })
  }

  render() {
    return (
        <div>
                <div>
        <div>
          <h3>our best offers Games</h3>
          {this.state.games.map(game => (
                <div>
                  <img src={game.photo} alt=""/>
                <h4>{game.title}</h4>
                </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h3>our best offers Consoles</h3>
          {this.state.consoles.map(consol => (
              <div key={consol._id}>
                <Link to={`/consoles/${consol._id}`}>
                <img src={consol.photo} alt=""/>
                <h3>{consol.consolesModel}</h3>
              </Link>
              </div>
          ))}
        </div>
      </div>
        </div>
      )
  }

}

export default Home;



