import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Home from './components/Home/Home';
import gameItems from './components/Home/gameItems'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>
          <Redirect to="/login" />

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header> 
            <main>
            <gameItems></gameItems>

              {/* <Switch>
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
              </Switch> */}
            </main>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Redirect to="/" />

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />              
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
              </Switch>
            </main>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
