import React from 'react';
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
    this.service.getGames()
    .then(response => {
      this.setState({
        games: response
      })

    })
    this.service.getConsoles()
    .then(response => {
      this.setState({
        consoles: response
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
                <h5>title: {game.title}</h5>
                </div>
          ))}
        </div>
      </div>

      <div>
        <div>
          <h3>our best offers Consoles</h3>
          {this.state.consoles.map(consol => (
              <div>
                <img src={consol.photo} alt=""/>
                <p>{consol.consoleModel}</p>
              </div>
          ))}
        </div>
      </div>
        </div>
      )
  }

}

export default Home;



