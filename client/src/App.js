import React, { Component } from "react";
import { Switch, Route, Link} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from './components/Home/Home';
import GameDetail from "./components/Home/GameDetail";
import Service from './services/Service';
import AuthService from "./services/AuthService";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: null,
      games: [],
      consoles: []
    };
    this.service = new Service()
    this.authService = new AuthService();
    this.fetchUser();
  }

  componentDidMount() {
    this.fetchGames();
    //this.fetchConsoles();

    // fetchConsoles = () => {
    // console.log("esto es Consoles")
    this.service.getConsoles()
    .then(response => {
      this.setState({
        consoles: response
      })

    })
  }

  fetchGames = () => {
    console.log("esto no es undefined")
    this.service.getGames()
    .then(response => {
      this.setState({
        games: response
      })
    })
  }

 

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.authService.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    return this.authService
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
    console.log(this.state.games)
    if (this.state.loggedInUser) {
      return (
        <React.Fragment>

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header> 
            <main>
              
              <Switch>
                <Route exact path="/" render={()=><Home consoles={this.state.consoles} games={this.state.games} ></Home>} />              
                <Route exact path="/game/:id" render={(props) =><GameDetail fetchGames={this.fetchGames} allGames={this.state.games} {...props}></GameDetail>} />
                {/* <Route exact path="/consoles/:id" render={(props) =><ConsolesDetail fetchGames={this.fetchGames} allConsoles={this.state.consoles} {...props}></ConsolesDetail>} /> */}
              </Switch> 
            </main>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {/* <Redirect to="/" /> */}

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <main>
              <Switch>
  
                <Route exact path="/" render={()=><Home consoles={this.state.consoles} games={this.state.games}></Home>} />              
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
