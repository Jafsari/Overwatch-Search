import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
}

render(){
        return (
         <div>
        <h1>Please Sign in</h1>
        <input
          onChange={this.handleChange}
          placeholder="What's your username?"
          name="username"
          value={this.state.username}
        />
        <input
          onChange={this.handleChange}
          placeholder="What's your password?"
          name="password"
          value={this.state.password}
        />
      </div>
        )
    }
}