import React, { Component } from 'react';
import Landing from './Containers/Landing.jsx'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Dashboard from './Containers/Dashboard.jsx'
import requireAuth from './Containers/Auth.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <div className="format">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Overwatch Finder</h1>
        </header>
        <Switch>
        <Route path='/' component={Landing} />
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
        </Switch>
        <p className="App-intro">
          Sign in to join the Competitive Overwatch Premier Community!
        </p>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
