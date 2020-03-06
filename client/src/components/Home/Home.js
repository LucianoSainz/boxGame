import React from 'react';
import {Link} from "react-router-dom"

function Home(props) {

    return (
      <div>
          <div>
        <div>
          <h3>our best offers Games</h3>
          {props.games.map(game => (
            <Link to={"game/"+game._id}>
              <div>
                  <img src={game.photo} alt=""/>
                  <h2>{game.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
      <div>
        <h3>our best offers Games</h3>
          {props.consoles.map(consol => (
              <Link to={"console/"+consol._id}>
                <div>
                  <img src={consol.photo} alt=""/>
                  <h2>{consol.consoleModel}</h2>
              </div>
              </Link>
          ))}
        </div>
      </div>
      </div>

    )
}

export default Home;



