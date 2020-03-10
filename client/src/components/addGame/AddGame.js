import React from 'react';
import Service from '../../services/Service';


class AddConsoles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            title: "",
            gender: "",
            year: "",
            img: "",
            description: "",
            price: "",

        };

        this.service = new Service();
    }

    handleFormSubmit = (event) => {
        console.log(event)
        event.prevetDefault();
        const type = this.state.type;
        const title = this.state.title;
        const gender = this.state.gender;
        const year = this.state.year;
        const img = this.state.img;
        const description = this.state.description;
        const price = this.state.price;

        this.service.getAddGame(this.state)


            .then(response => {
                console.log('then')
                console.log(response)
                this.setState({
                    type: "",
                    title: "",
                    gender: "",
                    year: "",
                    img: "",
                    description: "",
                    price: "",

                })
            })

            .catch(error => {
                console.log('catch')
                console.log(error)
                this.setState({
                    type: type,
                    title: title,
                    gender: gender,
                    year: year,
                    img: img,
                    description: description,
                    price: price,
                    error: true
                })
            })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    handleTypeInput = (event) => {
        this.setState({
            type: event.target.value
        })
    }

    handleTitleInput = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleGenderInput = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleYearInput = (event) => {
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
                    <h5>add the game you want to sell</h5>
                    <label>Type:</label>
                    <input type="text" name="type" value={this.state.type} onChange={(e) => this.handleTypeInput(e)} />

                    <label>Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={(e) => this.handleTitleInput(e)} />

                    <label>Gender:</label>
                    <input type="text" name="gender" value={this.state.gender} onChange={(e) => this.handleGenderInput(e)} />

                    <label>Year:</label>
                    <input type="number" name="year" value={this.state.year} onChange={(e) => this.handleYearInput(e)} />

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