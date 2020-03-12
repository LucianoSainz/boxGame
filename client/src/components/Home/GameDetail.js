import React from 'react';
import { Redirect } from 'react-router-dom';


class GameDetail extends React.Component {
    constructor(props) {
        super(props);
    }   

    componentDidMount() {
        return this.props.fetchGames()
    }

    // Annadir redireccion a login
    render () {
        return (
            <div>
               
            
            <div className="">
            {this.props.allGames
            .filter(game => game._id === this.props.match.params.id)
            .map(game => (
                <div>
                <p>{game.imageUrl}</p>
                <p>{game.type}</p>
                <p>{game.title}</p>
                <p>{game.gender}</p>
                <p>{game.year}</p>
                <p>{game.description}</p>
                <p>{game.price } €</p>
                
                
                
                
                
                </div>

            )

            
            )}
            </div>
            </div>
        )
    }

}

export default GameDetail