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
            {this.props.allGames
            .filter(game => game._id === this.props.match.params.id)
            .map(game => (
                game.title

            )

            
            )}
            </div>
        )
    }

}

export default GameDetail