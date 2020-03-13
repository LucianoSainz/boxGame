import React from 'react';
import { Redirect } from 'react-router-dom';


class ConsolesDetails extends React.Component {
    constructor(props) {
        super(props);
    }   

    componentDidMount() {
        return this.props.fetchConsoles()
    }

    // Annadir redireccion a login
    render () {
        return (
            <div>

            <div className="">
            {this.props.allConsoles
            .filter(consoles => consoles._id === this.props.match.params.id)
            .map(consoles => (
                <div>
                <p>{consoles.imageUrl}</p>
                <p>{consoles.consoleModel}</p>
                <p>{consoles.controlsIncluded}</p>
                <p>{consoles.memoryCapacity}</p>
                <p>{consoles.gameIncluded}</p>
                <p>{consoles.description}</p>
                <p>{consoles.price } €</p>
                </div>
            )

            
            )}
            </div>
            </div>
        )
    }

}

export default ConsolesDetails