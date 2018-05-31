import { connect } from 'react-redux';
import * as actions from '../actions'
import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

class Signup extends Component{
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
    handleSignup = (e) => {
        e.preventDefault()
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

    render(){
        return (
            <div className="signup">
            <form className="login2">
              <div>
              <FormGroup>
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
            <Button onClick ={this.handleSignup} color="primary">Signup</Button>
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
  
  export default connect(mapStateToProps,actions)(Signup);;

