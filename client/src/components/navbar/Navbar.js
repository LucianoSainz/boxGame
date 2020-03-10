// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from 'react-router-dom'
import AuthService from "../../services/AuthService";
import "./Navbar.scss"
import logo from "../navbar/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="menu">
          <div>
            <img src={logo} alt="" width="80" heith="85" />
          </div>
          <div className="one">
            <div className="two">
              <Link className="linav" to="/home">Home</Link>
            </div>
            <div className="two">
              <Link className="linav" to="/addGame">AddGame</Link>
            </div>
            <div className="two">
              <Link className="linav" to="/addConsoles">AddConsoles</Link>
            </div>
            <div className="two">
              <a onClick={this.handleLogout}>Logout</a>
            </div>
          </div>
        </nav>
     
      );

    } else {
      return (
        <div>
          <nav className="menu">
            <div>
              <img src={logo} alt="" width="80" heith="85" />
            </div>
            <div className="one">
              <div className="two">
                <Link className="linav" to="/login">Login</Link>
              </div>
              <div className="two">
                <Link className="linav" to="/signup">Signup</Link>
              </div>
              <div className="two">
                <Link className="linav" to="/home">Home</Link>
              </div>

            </div>

          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
