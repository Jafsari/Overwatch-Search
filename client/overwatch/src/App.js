import React, { Component } from 'react';
import Landing from './Containers/Landing.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Overwatch Finder</h1>
        </header>
        <Landing />
        <p className="App-intro">
          Sign in to join the Competitive Overwatch Premier Community!
        </p>
      </div>
    );
  }
}

export default App;
