import React, { Component } from 'react';
import Landing from './Containers/Landing.jsx'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Dashboard from './Containers/Dashboard.jsx'
import requireAuth from './Containers/Auth.jsx'
import Signup from './Containers/Signup.jsx'
import Chat from './Containers/chatroom.jsx'
import Login from './Containers/Login.jsx'
import Diamond from './Containers/Diamond.jsx'
import Master from './Containers/Master.jsx'
import Grandmaster from './Containers/Grandmaster.jsx'
import General from './Containers/General.jsx'
import Search from './Containers/Search.jsx'
import Playerinfo from'./Containers/PlayerInfo.jsx'
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
        <Route exact path="/general" component={General} />
        <Route exact path="/grandmaster" component={Grandmaster} />
        <Route exact path="/master" component={Master} />
        <Route exact path="/diamond" component={Diamond} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/player" component={Playerinfo} />
        </Switch>
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
