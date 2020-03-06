import React from 'react';
import { Redirect } from 'react-router-dom';


class ConsolesDetail extends React.Component {
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
            {this.props.allConsoles
            .filter(consoles => consoles._id === this.props.match.params.id)
            .map(consoles => (
                consoles.title

            )

            
            )}
            </div>
        )
    }

}

export default GameDetail