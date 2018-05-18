import React, { Component } from 'react';
import Landing from './Containers/Landing.jsx'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Dashboard from './Containers/Dashboard.jsx'
import requireAuth from './Containers/Auth.jsx'
import Signup from './Containers/Signup.jsx'
import Login from './Containers/Login.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path='/welcome' component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component = {Signup} />
        <Route exact path="/login" component ={Login} />
        </Switch>
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
