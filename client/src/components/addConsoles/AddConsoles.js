import React from 'react';
import Service from '../../services/Service';
import './addConsoles.scss';


class AddConsoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleModel: "",
            controlIncluded: "",
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
                    controlIncluded: "",
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

    handleControlIncludedInput = (event) => {
        this.setState({
            controlIncluded: event.target.value
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
                            <label>ConsoleModel:</label>
                            <input
                                type='text'
                                name='consoleModel'
                                value={this.state.consoleModel}
                                onChange={(e) => this.handleConsoleModelInput(e)}
                            />
                        </div>
                        <div>
                            <label>ControlIncluded:</label>
                            <input
                                type='text'
                                name='controlIncluded'
                                value={this.state.controlIncluded}
                                onChange={(e) => this.handleControlIncludedInput(e)}
                            />
                        </div>
                        <div>
                            <label>MemoryCapacity:</label>
                            <input
                                type='number'
                                name='MemoryCapacity'
                                value={this.state.memoryCapacity}
                                onChange={e => this.handleMemoryCapacityInput(e)}
                            />
                        </div>
                        <div>
                            <label>GameIncluded:</label>
                            <input
                                type='text'
                                name='GameIncluded'
                                value={this.state.gameIncluded}
                                onChange={e => this.handleGameIncludedInput(e)}
                            />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input
                                type="file"
                                name="imageUrl"
                                onChange={e => this.handleFileUpload(e)}
                            />
                        </div>
                        <div>
                            <label>Desription:</label>
                            <textarea
                                type="text"
                                name="description"
                                value={this.state.description}
                                onChange={e => this.handleDescriptionInput(e)}
                            />
                        </div>
                        <div>
                            <label>Cotact:</label>
                            <input
                                type='number'
                                name='contact'
                                value={this.state.contact}
                                onChange={e => this.handleContactInput(e)}
                            />
                        </div>

                        <div>
                            <label>Price:</label>
                            <input
                                type="number"
                                name="price"
                                value={this.state.price}
                                onChange={e => this.handlePriceInput(e)}
                            />
                        </div>
                        <div className="btn">
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddConsoles;

