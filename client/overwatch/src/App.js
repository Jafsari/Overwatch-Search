import React, { Component } from 'react';
import Landing from './Containers/Landing.jsx'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Dashboard from './Containers/Dashboard.jsx'
import Signup from './Components/Signup.jsx'
import Login from './Components/Login.jsx'
import Competitive from './Components/Competitive.jsx'
import Diamond from './Components/Diamond.jsx'
import Master from './Components/Master.jsx'
import Grandmaster from './Components/Grandmaster.jsx'
import General from './Components/General.jsx'
import Search from './Containers/Search.jsx'
import Playerinfo from'./Containers/PlayerInfo.jsx'
import requireAuth from './Containers/Auth.jsx'
import Invite from './Containers/Invite.jsx'
import Watch from './Containers/Watch.jsx'
import Status from './Containers/Status.jsx'
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
        <Route exact path="/login" component ={Login}   />
        <Route exact path="/competitive" component={requireAuth(Competitive)} />
        <Route exact path="/general" component={requireAuth(General)} />
        <Route exact path="/grandmaster" component={requireAuth(Grandmaster)} />
        <Route exact path="/master" component={requireAuth(Master)} />
        <Route exact path="/diamond" component={requireAuth(Diamond)} />
        <Route exact path="/search" component={requireAuth(Search)} />
        <Route exact path="/player" component={requireAuth(Playerinfo)} />
        <Route exact path="/invite" component={requireAuth(Invite)} />
        <Route exact path="/watch" component={requireAuth(Watch)} />
        <Route exact path='/status' component={requireAuth(Status)} />
        </Switch>
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
