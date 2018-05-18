import { connect } from 'react-redux';
import * as actions from '../actions'
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../App.css';

class Signup extends Component{
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
            console.log(`You're in!`)
    }

    render(){
        return (
            <div className="login">
            <form className="dashboard">
              <div>
        <input
          onChange={this.handleChange}
          placeholder="Enter username"
          name="username"
          type="text"
          id="username"
          value={this.state.username}
        />
        <input
          onChange={this.handleChange}
          placeholder="Enter password"
          name="password"
          id="password"
          type="password"
          value={this.state.password}
        />
      </div>
            <div>
            <Button onClick ={this.handleLogin} color="danger">Login</Button>
            </div>
            </form>
            </div>
        
        )
    }
}

export default connect(null,actions)(Signup);