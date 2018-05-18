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
        <Switch>
        <Route exact path='/welcome' component={Landing} />
        <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
     
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
