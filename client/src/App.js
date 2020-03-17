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
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      games:[],
      consoles:[],
      loggedInUser: null,
      
    }

    this.service = new Service()
    this.authService = new AuthService();
    this.fetchUser();
  }

  componentDidMount() {
    console.log(this.state.loggedInUser)
    this.fetchGames();
    

   
   
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
        games:response
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

  deleteExistingGames(id) {
    axios.delete(`http://localhost:4000/games/${id}`)
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
                <Route exact path="/home" render={()=><Home consoles={this.state.consoles}  games={this.state.games} ></Home>} /> 
                <Route exact path="/addGame" render={(props)=><AddGame user={this.state.loggedInUser} {...props}></AddGame>} /> 
                <Route exact path="/addConsoles" render={(props)=><AddConsoles user={this.state.loggedInUser} {...props}></AddConsoles>} />  
                <Route exact path="/game/:id" render={(props) =><GameDetail fetchGames={this.fetchGames} allGames={this.state.games} {...props}  onDeleteGames={id => this.deleteExistingGames(id)}></GameDetail>} />
                <Route exact path="/consoles/:id" render={(props) =><ConsolesDetails fetchConsoles={this.fetchConsoles} allConsoles={this.state.consoles} {...props}></ConsolesDetails>} />
              </Switch> 
              <Footer></Footer>
            </main>
           
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
         
          <div className="App">
            <header className="App-header">
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            </header>
            <main>
              <Switch>
                <Route exact path="/home" render={()=><Home consoles={this.state.consoles} games={this.state.games}></Home>} />              
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/game/:id" render={(props) =><Redirect to = "/login"/>} />
                <Route exact path="/consoles/:id" render={(props) =><Redirect to ="/login"/>} />
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


//()=>{
  //   console.log(this.props)
    // this.props.history.push("/")