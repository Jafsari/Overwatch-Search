import React, { Component } from 'react';
import Landing from './Containers/Landing.jsx'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Dashboard from './Containers/Dashboard.jsx'
import requireAuth from './Containers/Auth.jsx'
import Signup from './Containers/Signup.jsx'
import Chat from './Containers/chatroom.jsx'
import Login from './Containers/Login.jsx'
import General from './Containers/GeneralChat.jsx'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="Dash">
        <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component = {Signup} />
        <Route exact path="/login" component ={Login} />
        <Route exact path="/competitive" component={Chat} />
        </Switch>
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
