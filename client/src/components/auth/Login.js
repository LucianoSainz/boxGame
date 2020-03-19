// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService'; 
import "./Login.scss"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        }, ()=> {this.props.history.push('/')}
        );

        this.props.getUser(response)
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
      <h3 className="titleOne">login</h3>

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
        <input type="submit" value="Login" />
      </div>
       
        </form>

       </div>

       <div>
        <nav className="link">
              <Link to="/signup">You still don't have an account: Signup</Link>
        </nav>
      </div>

      <h1>{this.state.error ? 'Error' : ''}</h1>
      </div>
    )
  }
}

export default Login;