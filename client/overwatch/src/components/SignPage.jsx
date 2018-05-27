import { connect } from 'react-redux';
import * as actions from '../actions'
import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';

class SignPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:""
        }
    }

    componentWillMount(){
        if (localStorage.jwtToken !== undefined) {
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

    handleLogin = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.login(this.state).then(
            () => {
                this.props.history.push('dashboard')
            },
            err => {
                console.log(err.message)
            }
        );
        this.props.setCurrentUser(this.state.username)
            console.log(`You're in!`)
    }
    render(){
        return (
            <div className={this.props.background}>
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
            <Button onClick ={this.props.handleLogin} color={this.props.color}>{this.props.use}</Button>
            </div>
            </form>
            </div>
        
        )
    }
}

export default SignPage