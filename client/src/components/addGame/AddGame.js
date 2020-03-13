import React from 'react';
import Service from '../../services/Service';
import './addGame.scss';


class addGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      title: '',
      gender: '',
      year: '',
      imageUrl: '',
      description: '',
      price: '',
      contact:''
    };
    this.service = new Service();
  }
  handleFormSubmit = event => {
    event.preventDefault();
    this.service.addGame(this.state, this.props.user._id)
        .then(response => {
            this.setState({
                type: "",
                title: "",
                gender: "",
                year: "",
                imageUrl: "",
                description: "",
                price: "",
                contact:'',
            }, () => this.props.history.push('/home'))
        })
        .catch(error => {
            console.log('catch')
            console.log(error)
        })
  };
  handleTypeInput = event => {
    this.setState({
      type: event.target.value
    });
  };
  handleTitleInput = event => {
    this.setState({
      title: event.target.value
    });
  };
  handleGenderInput = event => {
    this.setState({
      gender: event.target.value
    });
  };
  handleYearInput = event => {
    this.setState({
      year: event.target.value
    });
  };
  handleFileUpload = e => {
    console.log('The file to be uploaded is: ', e.target.files[0]);
    const uploadData = new FormData();
    uploadData.append('imageUrl', e.target.files[0]);
    this.service
      .handleUploadGames(uploadData)
      .then(response => {
        this.setState({ imageUrl: response.secure_url }, () =>
          console.log(this.state)
        );
      })
      .catch(err => {
        console.log('Error while uploading the file: ', err);
      });
  };
  handleDescriptionInput = event => {
    this.setState({
      description: event.target.value
    });
  };
  handlePriceInput = event => {
    this.setState({
      price: event.target.value
    });
  };
  handleContactInput = event => {
    this.setState({
      contact: event.target.value
    });
  }
  render() {
    return (
      <div>
      <div className='formular'>
        <form onSubmit={this.handleFormSubmit} className="form">
          <h4 className="title">Add the game you want to sell</h4>
        
          <div>
          <label>Console:</label>
          <input
            type='text'
            name='type'
            value={this.state.type}
            onChange={e => this.handleTypeInput(e)}
          />
          </div>
          <div>
          <label>Title:</label>
          <input
            type='text'
            name='title'
            value={this.state.title}
            onChange={e => this.handleTitleInput(e)}
          />
          </div>
          <div>
          <label>Gender:</label>
          <input
            type='text'
            name='gender'
            value={this.state.gender}
            onChange={e => this.handleGenderInput(e)}
          />
          </div>
          <div>
          <label>Year:</label>
          <input
            type='number'
            name='year'
            value={this.state.year}
            onChange={e => this.handleYearInput(e)}
          />
          </div>
          <div>
          <label>image:</label>
          <input
            type='file'
            name='imageUrl'
            onChange={e => this.handleFileUpload(e)}
          />
          </div>
          <div>
          <label>Desription:</label>
          <textarea
            type='text'
            name='description'
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
            type='number'
            name='price'
            value={this.state.price}
            onChange={e => this.handlePriceInput(e)}
          />
          </div>
          <div className="btn">
          <input type='submit' value='Submit' />
        </div>
        </form>
      </div>
      </div>
      
    );
  }
}
export default addGame;