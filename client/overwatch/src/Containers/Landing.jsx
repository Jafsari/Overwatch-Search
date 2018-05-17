import { connect } from 'react-redux';
import * as actions from '../actions'
import React, { Component } from 'react';
import { Button, FormFeedback, FormGroup, FormText, Label, Input, Jumbotron } from 'reactstrap';

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
handleSubmit = (e) => {
    e.preventDefault()
   this.props.login(this.state);
   console.log(this.state)
}


render(){
        return (
            <form onSubmit ={this.handleSubmit}>
         <div>
        <h1>Please Sign in</h1>
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
      <Button color="primary">Signup</Button>
      <Button color="danger"> Login </Button>
     </div>
      </form>
    
        )
    }
}

  
  export default connect(null,actions)(Landing);