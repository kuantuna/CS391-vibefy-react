import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Happy from "./components/Happy";
import Sad from "./components/Sad";
import Energetic from "./components/Energetic";
import Angry from "./components/Angry";
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component
{
  constructor(props){
    super(props);

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
  }

  handleSuccessfulLogin(){
    this.setState({
      loggedInStatus : "LOGGED_IN"
    })
  }

  handleLogout(){
    this.setState({
      loggedInStatus : "NOT_LOGGED_IN"
    })
  }

  render(){
    return (
      <div className="page-container">
        
        <Router>
        <Header loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout}/>
          <div className="content-wrap">
            <Route path="/" exact 
            render = {props => (
              <Jumbo {...props} loggedInStatus={this.state.loggedInStatus} />
            )}
             />
            <Route path="/home" render = {props => (
              <Jumbo {...props} loggedInStatus={this.state.loggedInStatus} />
            )} />
            <Route path="/happy" render = {props => (
              <Happy {...props} loggedInStatus={this.state.loggedInStatus} />
            )} />
            <Route path="/sad" render = {props => (
              <Sad {...props} loggedInStatus={this.state.loggedInStatus} />
            )} />
            <Route path="/energetic" render = {props => (
              <Energetic {...props} loggedInStatus={this.state.loggedInStatus} />
            )} />
            <Route path="/angry" render = {props => (
              <Angry {...props} loggedInStatus={this.state.loggedInStatus} />
            )} />
            <Route path='/login' render = {props => (
              <Login {...props} loggedInStatus={this.state.loggedInStatus} 
              handleSuccessfulLogin={this.handleSuccessfulLogin}/>
            )}/>
            <Route path="/register" render = {props => (
              <Register {...props} loggedInStatus={this.state.loggedInStatus} />
            )}/>
          </div>
        </Router>
        <Footer loggedInStatus={this.state.loggedInStatus} />
      </div>
    );
  }
}

export default App;
