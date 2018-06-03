import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import * as actions from '../actions';
import logo from '../logo.svg';
import Progress from '../components/Progress.jsx';
import { Button } from 'reactstrap';


class Landing extends Component {

componentDidMount(){
    if (this.props.isAuthenticated){
        console.log('hi')
        this.props.history.push('dashboard')
    }
}
handleLogin = (e) => {
    e.preventDefault()
    this.props.history.push('login')
}
handleSignup = (e) => {
    e.preventDefault()
    this.props.history.push('signup')
}


render(){
        return (
         <div className="format">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="App-title">Welcome to OverChat</h1>
         <div>

      </div>
      <div>
      <Button onClick ={this.handleSignup} color="info">Signup</Button>
      <Button onClick ={this.handleLogin} color="warning"> Login </Button>
     </div>
     <p className="App-intro">
          Sign in to join the Competitive Overwatch Premier Community!
        </p>
      </div>
    
        )
    }
}



const mapStateToProps = (state) => { 
    return { 
      user: state.auth.user ,
      isAuthenticated: state.auth.isAuthenticated
      };
  };
  
  export default connect(mapStateToProps,actions)(Landing);