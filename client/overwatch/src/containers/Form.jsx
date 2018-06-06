import React, { Component } from 'react';
import '../App.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import {withRouter} from "react-router-dom";
import { compose } from 'redux';
import { Button } from 'reactstrap';

 class BasicForm extends React.Component {
  
    constructor(props) {
      super(props);
      
      this.state = {
        username: '',
        password: '',
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    clear = () => {
        this.setState({
            username:"",
            password:""
        });
    }
    
    handleChange(e) {
      e.target.classList.add('active');
      
      this.setState({
        [e.target.name]: e.target.value
      });
      
      this.showInputError(e.target.name);
    }

    handleSubmitLogin = (e) => {
        this.props.login(this.state,this.state.username).then(
            () => {
                this.props.history.push('dashboard')
            },
            err => {
                console.log(err.message)
            }
        );
            this.clear();
            console.log(`You're in!`)
    }
    handleSignup = (e) => {
        console.log(this.state)
        this.props.signup(this.state).then(
            () => {
                this.props.history.push('dashboard')
            },
            err => {
                console.log(err.message)
            }
        );

        this.props.setCurrentUser(this.state.username)
            this.clear();
            console.log(`You're in!`)
    }
    
    handleSubmit(e) {    
      e.preventDefault();
      console.log('component state', JSON.stringify(this.state));
      if (!this.showFormErrors()) {
        this.clear();
        console.log('form is invalid: do not submit');
      }
       else {
        if (this.props.current === 'Login')
        this.handleSubmitLogin()
      
      if (this.props.current === 'Signup'){
          this.handleSignup()
      }
        console.log('form is valid: submit');
      }
    }
    
    showFormErrors() {
      const inputs = document.querySelectorAll('input');
      let isFormValid = true;
      
      inputs.forEach(input => {
        input.classList.add('active');
        console.log(inputs)
        console.log(isInputValid)
        const isInputValid = this.showInputError(input.name);
        
        if (this.state.username.length < 4 || this.state.username.length > 12 || this.state.password.length < 4 || this.state.password.length > 12) {
          isFormValid = false;
        }
      });
      
      return isFormValid;
    }
    
    showInputError(refName) {
      const validity = this.refs[refName].validity;
      const label = document.getElementById(`${refName}Label`).textContent;
      const error = document.getElementById(`${refName}Error`);
      const isPassword = refName.indexOf('password') !== -1;
      const isPasswordConfirm = refName === 'passwordConfirm';
      
      if (isPasswordConfirm) {
        if (this.refs.password.value !== this.refs.passwordConfirm.value) {
          this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
        } else {
          this.refs.passwordConfirm.setCustomValidity('');
        }
      }
          
      if (!validity.valid) {
        if (validity.valueMissing) {
          error.textContent = `${label} is a required field`; 
        // } else if (validity.typeMismatch) {
        //   error.textContent = `${label} should be a valid email address`; 
        // } else if (isPassword && validity.patternMismatch) {
        //   error.textContent = `${label} should be longer than 4 chars`; 
        } else if (isPasswordConfirm && validity.customError) {
          error.textContent = 'Passwords do not match';
        }
        return false;
      }
      
      error.textContent = '';
      return true;
    }

    renderButton = () => {
        if (this.props.current === 'Login'){
            return   <Button onClick ={this.handleSubmit} color="danger">Login</Button>
        } else {
            if (this.props.current === 'Signup'){
            return   <Button onClick ={this.handleSubmit} color="primary">Signup</Button>
            }
        }
    }
  
    render() {

      return (
        <form noValidate>
          <div className="form-group">
            <label id="usernameLabel">Username</label>
            <input className="form-control"
              type="email"
              name="username"
              ref="username"
              value={ this.state.username } 
              onChange={ this.handleChange }
              placeholder='Enter username'
              required />
            <div className="error" id="usernameError" />
          </div>
          <div className="form-group">
            <label id="passwordLabel">Password</label>
            <input className="form-control"
              type="password" 
              name="password"
              ref="password"
              value={ this.state.password } 
              onChange={ this.handleChange }
              pattern=".{4,}"
              placeholder='Enter password'
              required />
            <div className="error" id="passwordError" />
          </div>
          {this.renderButton()}
        </form>
      );
    }
  }
  const mapStateToProps = (state) => { 
    return { 
      user: state.auth.user ,
      isAuthenticated: state.auth.isAuthenticated
      };
  };
  
  export default compose(
  connect(mapStateToProps,actions),
  withRouter
  )(BasicForm);
  