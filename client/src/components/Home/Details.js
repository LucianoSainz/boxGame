import React from 'react';
import { Link } from "react";
import Service from './Service';

//  esto por ahora no hace nada realizar mas tarde....

class details extends React.Component {
    constructor(props) {
        super(props)
        this.state = { games: {} }


        this.service = new Service()
    }

    componentDidMount = () => this.getGames()

    getCoasterDetails = () => {
        this.services.getGames(this.props.match.params.id)
            .then(games => this.setState({ game: games }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='gameDetail'>
                <p>{this.state.game.photo}</p>
                <p>type:{this.state.game.type}</p>
                <p>title:{this.state.game.gender}</p>
                <p>age classification:{this.state.game.ageClassification}</p>
                <p>year:{this.state.game.year}</p>
                <p>lenguage:{this.state.game.lenguage}</p>
                <p>price:{thiis.state.game.price}</p>


                <Link to="/">go back</Link>
            </div>

        )
    }
}


