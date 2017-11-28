import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./demo/login";
import Register from "./demo/register";
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

require("./demo/style.css");

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
        <ul>
        <div>
          <li><Link to="">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/#">#</Link></li>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login}  />
        </div>
        </ul>
        </Router>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

// https://www.youtube.com/watch?v=Cm2fKqJb7Hk

export default App;
