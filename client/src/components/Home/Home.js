import React from 'react';
import {Link} from "react-router-dom"
import logo from "../navbar/logo_transparent.png";
import "./Home.scss"


function Home(props) {

    return (
        
          <div>
            <header className="logo">
            <img src={logo} alt="" width="500" heith="300"/>
            </header>

        {/* SECTION GAMES */}
        <div className="all">
        <div className="games">
          <h3>Our best offers Games:</h3>
          
          {props.games.map(game => (
            <Link className="sect" to={"game/"+game._id}>
             
              <div className="info">
                  <img className="info"src={game.imageUrl} alt=""/>
                  <div>
                  <h4>{game.title}</h4>
                  </div>
              </div>
            </Link>
            
          ))}
        </div>
      

      {/* SECTION CONSOLES */}
      
      <div className="consoles" >
        <h3>Our best deals on consoles:</h3>
          {props.consoles.map(consol => (
              <Link to={"consoles/"+consol._id}>
                <div className="info">
                  <img src={consol.imageUrl} alt=""/>
                  <div>
                  <h4>{consol.consoleModel}</h4>
                  </div>
              </div>
              </Link>
          ))}
        </div>
      </div>
     
     
      </div>

    )
}

export default Home;



