import React from 'react';
import Service from '../../services/Service';


class AddConsoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleModel: "",
            controlIncluded: "",
            memoryCapacity: "",
            gameIncluded: "",
            img: "",
            description: "",
            price: "",

        };

        this.service = new Service();
    }

    handleFormSubmit = (event) => {
        console.log(event)
        event.prevetDefault();
        const consoleModel = this.state.consoleModel;
        const controlIncluded = this.state.controlIncluded;
        const memoryCapacity = this.state.memoryCapacity;
        const gameIncluded = this.state.gameIncluded;
        const img = this.state.img;
        const description = this.state.description;
        const price = this.state.price;

        this.service.getNewAddConsoles(this.state)

            .then(response => {
                console.log('then')
                console.log(response)
                this.setState({
                    consoleModel: "",
                    controlIncluded: "",
                    memoryCapacity: "",
                    gameIncluded: "",
                    img: "",
                    description: "",
                    price: "",

                })
            })

            .catch(error => {
                console.log('catch')
                console.log(error)
                this.setState({
                    consoleModel: "",
                    controlIncluded: "",
                    memoryCapacity: "",
                    gameIncluded: "",
                    img: "",
                    description: "",
                    price: "",
                    error: true
                })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    handleConsoleModelInput = (event) => {
        this.setState({
            consoleModel: event.target.value
        })
    }

    handleControlIncludedInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleMemoryCapacityInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleGameIncludedInput = (event) => {
        this.setState({
            year: event.target.value
        })
    }
    handleImgInput = (event) => {
        this.setState({
            img: event.target.value
        })
    }
    handleDescriptionInput = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handlePriceInput = (event) => {
        this.setState({
            price: event.target.value
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <h5>add the console you want to sell</h5>
                    <label>ConsoleModel:</label>
                    <input type="text" name="consoleModel" value={this.state.consoleModel} onChange={(e) => this.handleConsoleModelInput(e)} />

                    <label>ControlIncluded:</label>
                    <input type="text" name="controlIncluded" value={this.state.controlIncluded} onChange={(e) => this.handleControlIncludedInput(e)} />

                    <label>MemoryCapacity:</label>
                    <input type="text" name="memoryCapacity" value={this.state.memoryCapacity} onChange={(e) => this.handleMemoryCapacityInput(e)} />

                    <label>GameIncluded:</label>
                    <input type="number" name="gameIncluded" value={this.state.gameIncluded} onChange={(e) => this.handleGameIncludedInput(e)} />

                    <label>img:</label>
                    <input type="file" name="img" value={this.state.img} onChange={(e) => this.handleImgInput(e)} />

                    <label>Desription:</label>
                    <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleDescriptionInput(e)} />

                    <label>Price:</label>
                    <input type="number" name="price" value={this.state.price} onChange={(e) => this.handlePriceInput(e)} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddConsoles;
