import React, { Component } from "react";
import { Switch, Route, Link, Redirect} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Home from './components/Home/Home';
import GameDetail from "./components/Home/GameDetail";
import ConsolesDetails from "./components/Home/ConsolesDetails";
import Footer from "./components/footer/Footer";
import Service from './services/Service';
import AuthService from "./services/AuthService";
import AddGame from "./components/addGame/AddGame";
import AddConsoles from "./components/addConsoles/AddConsoles";
import Profile from "./components/Profile/Profile"


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
    console.log(this.state.loggedInUser)
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
    this.service.getGames()
    .then(response => {
      this.setState({
        games: response
      })
    })
  }

  fetchConsoles = () => {
    this.service.getConsoles()
    .then(response => {
      this.setState({
        consoles: response
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
        }, () => console.log(this.state));
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
          

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header> 
            <main>
              
              <Switch>
                {/* <Route exact path="/" render={()=><Home consoles={this.state.consoles} games={this.state.games} ></Home>} />  */}
                <Route exact path="/home" render={()=><Home consoles={this.state.consoles} games={this.state.games} ></Home>} /> 
                <Route exact path="/addGame" render={()=><AddGame></AddGame>} />  
                <Route exact path="/addConsoles" render={()=><AddConsoles></AddConsoles>} />  
                <Route exact path="/profile" render={()=><Profile></Profile>} />          
                <Route exact path="/game/:id" render={(props) =><GameDetail fetchGames={this.fetchGames} allGames={this.state.games} {...props}></GameDetail>} />
                <Route exact path="/console/:id" render={(props) =><ConsolesDetails fetchConsoles={this.fetchConsoles} allConsoles={this.state.consoles} {...props}></ConsolesDetails>} />
              </Switch> 
              <Footer></Footer>
            </main>
           
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {/* <Redirect to="/home" /> */}

          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <main>
              <Switch>
                <Route exact path="/home" render={()=><Home consoles={this.state.consoles} games={this.state.games}></Home>} />              
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
              </Switch>
              <Footer></Footer>
              
            </main>
          </div>
          
        </React.Fragment>
      );
    }
  }
}

export default App;
