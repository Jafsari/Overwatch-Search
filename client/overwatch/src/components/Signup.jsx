import { connect } from 'react-redux';
import * as actions from '../actions'
import React, { Component } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import '../App.css';
import BasicForm from '../containers/Form.jsx';

class Signup extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if (this.props.isAuthenticated){
            this.props.history.push('dashboard')
        }
    }
    render(){
        return (
            <div className="signup">
            <form className="login2">
              <div>
              <BasicForm current="Signup"/>
      </div>
            <div>
            </div>
            </form>
            </div>
        )
    }
}
  
  export default Signup

