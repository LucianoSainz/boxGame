import React from 'react';
import { Redirect } from 'react-router-dom';
import "./ConsoleDetails.scss"

class ConsolesDetails extends React.Component {
    constructor(props) {
        super(props);
    }   

    componentDidMount() {
        return this.props.fetchConsoles()
    }

   
    render () {
        return (
            <div>

            <div className="gameTitle">
            {this.props.allConsoles
            .filter(consoles => consoles._id === this.props.match.params.id)
            .map(consoles => (
                <div>
                <div className="gameDet" >
                <img src= {consoles.imageUrl} /> 
                <p><strong>console:</strong> {consoles.consoleModel}</p>
                <p><strong>controls:</strong> {consoles.controlIncluded}</p>
                <p><strong>memory:</strong> {consoles.memoryCapacity}</p>
                <p><strong>included game:</strong> {consoles.gameIncluded}</p>
                <p><strong>description:</strong> {consoles.description}</p>
                <p><strong>contact:</strong> {consoles.contact}</p>
                <p><strong>price:</strong> {consoles.price } €</p>
                </div>
              </div>
            )

            
            )}
            </div>
            </div>
        )
    }

}

export default ConsolesDetails