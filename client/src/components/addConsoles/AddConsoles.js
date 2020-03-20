import React from 'react';
import Service from '../../services/Service';
import './addConsoles.scss';


class AddConsoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleModel: "",
            controlsIncluded: "",
            memoryCapacity: "",
            gameIncluded: "",
            imageUrl: "",
            description: "",
            price: "",
            contact: ''

        };
        this.service = new Service();
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.service.addConsoles(this.state, this.props.user._id)
            .then(response => {
                this.setState({
                    consoleModel: "",
                    controlsIncluded: "",
                    memoryCapacity: "",
                    gameIncluded: "",
                    imageUrl: "",
                    description: "",
                    price: "",
                    contact: '',
                }, () => this.props.history.push('/home'))
            })
            .catch(error => {
                console.log('catch')
                console.log(error)
            })
    };


    handleConsoleModelInput = (event) => {
        this.setState({
            consoleModel: event.target.value
        })
    }

    handleControlsIncludedInput = (event) => {
        this.setState({
            controlsIncluded: event.target.value
        })
    }
    handleMemoryCapacityInput = (event) => {
        this.setState({
            memoryCapacity: event.target.value
        })
    }
    handleGameIncludedInput = (event) => {
        this.setState({
            gameIncluded: event.target.value
        })
    }


    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
        const uploadData = new FormData();

        uploadData.append("imageUrl", e.target.files[0]);
        this.service.handleUploadConsoles(uploadData)
            .then(response => {
                console.log(response)
                this.setState({ imageUrl: response.secure_url }, () => console.log(this.state));
            })
            .catch(err => {
                console.log("Error while uploading the file: ", err);
            });
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

    handleContactInput = event => {
        this.setState({
            contact: event.target.value
        });
    }


    render() {
        return (
            <div>
                <div className='formular'>
                    <form onSubmit={this.handleFormSubmit}>
                        <h4 className="title">Add the console you want to sell</h4>

                        <div>
                            <label>Console Model:</label>
                            <input
                                type='text'
                                name='consoleModel'
                                required
                                placeholder="Nintendo"
                                value={this.state.consoleModel}
                                onChange={(e) => this.handleConsoleModelInput(e)}
                            />
                        </div>
                        <div>
                            <label>Control Included:</label>
                            <input
                                type='number'
                                name='controlsIncluded'
                                required
                                placeholder="2"
                                value={this.state.controlsIncluded}
                                onChange={(e) => this.handleControlsIncludedInput(e)}
                            />
                        </div>
                        <div>
                            <label>Memory Capacity:</label>
                            <input
                                type='number'
                                name='MemoryCapacity'
                                required
                                placeholder="16"
                                value={this.state.memoryCapacity}
                                onChange={e => this.handleMemoryCapacityInput(e)}
                            />
                        </div>
                        <div>
                            <label>Game Included:</label>
                            <input
                                type='text'
                                name='GameIncluded'
                                required
                                placeholder="Mario Bros"
                                value={this.state.gameIncluded}
                                onChange={e => this.handleGameIncludedInput(e)}
                            />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input
                                type="file"
                                name="imageUrl"
                                required
                                onChange={e => this.handleFileUpload(e)}
                            />
                        </div>
                        <div>
                            <label>Desription:</label>
                            <textarea
                                type="text"
                                name="description"
                                required
                                placeholder="console in good condition"
                                value={this.state.description}
                                onChange={e => this.handleDescriptionInput(e)}
                            />
                        </div>
                        <div>
                            <label>Contact:</label>
                            <input
                                type='text'
                                name='email'
                                required
                                placeholder="boxgame@gmail.com"
                                value={this.state.contact}
                                onChange={e => this.handleContactInput(e)}
                            />
                        </div>

                        <div>
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                required
                                placeholder="20"
                                value={this.state.price}
                                onChange={e => this.handlePriceInput(e)}
                            />
                        </div>
                        <div>
                            <button className="botons" type="submit" value="Submit">Submit</button> 
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddConsoles;

