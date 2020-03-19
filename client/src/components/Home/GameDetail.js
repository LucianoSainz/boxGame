import React from 'react';
import { Redirect } from 'react-router-dom';
import "./GameDetail.scss"
import axios from "axios";
import Service from "../../services/Service"

class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        this.service = new Service()
    }   

    componentDidMount() {
        return this.props.fetchGames()
    }


    deleteGame = (id) => {
        this.props.onDeleteGame(id)
      }

    render () {
        return (
            <div>
               
            
            <div className="gameTitle">
            {this.props.allGames
            .filter(game => game._id === this.props.match.params.id)
            .map(game => ( 
                <div>
                <div className="gameDet" >
                
                <img src= {game.imageUrl} /> 
                <p><strong>console:</strong> {game.type}</p>
                <p><strong>title:</strong> {game.title}</p>
                <p><strong>gender:</strong>{game.gender}</p>
                <p><strong>year:</strong> {game.year}</p>
                <p><strong>description:</strong> {game.description}</p>
                <p><strong>contact:</strong>{game.contact}</p>
                <p><strong>price:</strong> {game.price } €</p>
                <button className="btn" onClick={() => this.deleteGame(game._id)}>🗑 delete</button>
               
                
                
                
                </div>
             </div>
            )

            
            )}
            </div>
            </div>
        )
    }

}

export default GameDetail