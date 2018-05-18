import { connect } from 'react-redux';
import * as actions from '../actions'
import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import { Button } from 'reactstrap';
import Modal from '../Components/Modal.jsx'

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }
clear = () => {
    this.setState({
        username:"",
        password:""
    });
}
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
}
handleLogin = (e) => {
    e.preventDefault()
    this.props.login(this.state).then(
        () => {
            this.props.history.push('dashboard')
        },
        err => {
            debugger
        }
    );
        this.clear();

}

handleSignup =(e) => {
    e.preventDefault();
   this.props.signup(this.state);
   this.clear();
}

handleLogout = (e) => {
    e.preventDefault();
    this.props.logout()
    this.clear();
}




render(){
        return (
         <form className="format">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to Overwatch Finder</h1>
         <div>
        <input
          onChange={this.handleChange}
          placeholder="What's your username?"
          name="username"
          type="text"
          id="username"
          value={this.state.username}
        />
        <input
          onChange={this.handleChange}
          placeholder="What's your password?"
          name="password"
          id="password"
          type="password"
          value={this.state.password}
        />
      </div>
      <div>
      <Button onClick ={this.handleSignup} color="primary">Signup</Button>
      <Button onClick ={this.handleLogin} color="danger"> Login </Button>
      <Button onClick ={this.handleLogout} color="success"> Logout </Button>
     </div>
     <p className="App-intro">
          Sign in to join the Competitive Overwatch Premier Community!
        </p>
      </form>
    
        )
    }
}

  
  export default connect(null,actions)(Landing);