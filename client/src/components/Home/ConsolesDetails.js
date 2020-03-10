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
            {this.props.allConsoles
            .filter(consoles => consoles._id === this.props.match.params.id)
            .map(consoles => (
                consoles.consoleModel

            )

            
            )}
            </div>
        )
    }

}

export default ConsolesDetails