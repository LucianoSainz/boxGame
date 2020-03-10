// auth/Signup.js
import React, { Component } from 'react';
import AuthService from '../../services/AuthService'
import { Link } from 'react-router-dom';
import "./Login.scss"


//uno llama a /signup y el otro a /login usando nuestro AuthService
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    //aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
    this.service.signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",
        });
        //aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
        //por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
        //y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
        this.props.getUser(response.user)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  render() {
    return (<div>
      <h3 className="titleOne">Signup</h3>

      <div className="login">
        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label className="user"></label>
            <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={e => this.handleChange(e)} />
          </fieldset>

          <fieldset>
            <label className="password"></label>
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={e => this.handleChange(e)} />
          </fieldset>


          <div className="botton">
            <input type="submit" value="Sign up" />
          </div>

        </form>
      </div>

      <div>
        <nav className="link">
          <Link to="/login">do you have an account? login</Link>
        </nav>
      </div>

      <h1>{this.state.error ? 'Error' : ''}</h1>
    </div>

    )
  }
}

export default Signup;