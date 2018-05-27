import React, { Component } from 'react';
import Landing from './containers/Landing.jsx'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Dashboard from './containers/Dashboard.jsx'
import Signup from './containers/Signup.jsx'
import Login from './containers/Login.jsx'
import Competitive from './components/Competitive.jsx'
import Diamond from './components/Diamond.jsx'
import Master from './components/Master.jsx'
import Grandmaster from './components/Grandmaster.jsx'
import General from './components/General.jsx'
import Search from './containers/Search.jsx'
import Playerinfo from'./containers/PlayerInfo.jsx'
import requireAuth from './containers/Auth.jsx'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="Dash">
        <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
        <Route exact path="/signup" component = {Signup} />
        <Route exact path="/login" component ={Login} />
        <Route exact path="/competitive" component={requireAuth(Competitive)} />
        <Route exact path="/general" component={requireAuth(General)} />
        <Route exact path="/grandmaster" component={requireAuth(Grandmaster)} />
        <Route exact path="/master" component={requireAuth(Master)} />
        <Route exact path="/diamond" component={requireAuth(Diamond)} />
        <Route exact path="/search" component={requireAuth(Search)} />
        <Route exact path="/player" component={requireAuth(Playerinfo)} />
        </Switch>
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
