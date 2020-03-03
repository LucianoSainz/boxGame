// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import "./Navbar.css"

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
        <nav className="nav-style">
          <ul>
            <li>
              <a onClick={this.handleLogout}>Logout</a>
            </li>
          </ul>

          <div className="header">
            {/* <img src={logo} alt="" height="100"/> */}
            <h2>Welcome {this.state.loggedInUser.username} - Ironhacker</h2>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
