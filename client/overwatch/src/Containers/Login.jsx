import { connect } from 'react-redux';
import * as actions from '../actions'
import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }
    componentDidMount(){
    if (this.props.isAuthenticated){
        this.props.history.push('dashboard')
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
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
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

    render(){
        return (
            <div className="login">
            <form className="login2">
              <div>
        <FormGroup onSubmit={this.handleSubmit}>
          <Label for="exampleEmail">Username</Label>
          <Input     
          onChange={this.handleChange}
          placeholder="Enter username"
          name="username"
          type="text"
          id="username"
          value={this.state.username} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input 
                    onChange={this.handleChange}
                    placeholder="Enter password"
                    name="password"
                    id="password"
                    type="password"
                    value={this.state.password}/>
        </FormGroup>
      </div>
            <div>
            <Button onClick ={this.handleSubmit} color="danger">Login</Button>
            </div>
            </form>
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
  
  export default connect(mapStateToProps,actions)(Login);