import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup, Label, Input, FormFeedback, FormText, Button, Form } from 'reactstrap';
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import jwtDecode from 'jwt-decode';
import {withRouter} from "react-router-dom";
import { compose } from 'redux';
import axios from 'axios';
import { TwitchClient } from '../config.js'
import Progress from '../Components/Progress.jsx'



class Roster extends Component{
    constructor(props){
        super(props)
        this.state={
            data:false,
            team:''
        }
    
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if(nextProps.owl) {  
            (this.setState({
                data:true
            }));

        } 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          });
          console.log(this.state.search)
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }
    
    render(){
        console.log(this.state)
        const information = (this.state.data ? (

            <div className="RosterBackground">
            <div className="InviteLoading">
            <Progress />
            </div>
            </div>
            
        ) : (
            <div className="RosterBackground">
            <div className="StatusLayout">
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
            < Input 
          onChange={this.handleChange}
          placeholder="Enter Team"
          name="team"
          type="text"
          id="team"
          value={this.state.team} 
         valid />
        </FormGroup>
        </Form>
        <Navigation />
            </div>
            </div>

            
         ));
    return(
        <div>
            {information}
        </div>
            )
        }
    
    }
    const mapStateToProps = (state) => { 
        return { 
          owl: state.owl.current.content
          };
      };
      
    
    export default compose(
    connect(mapStateToProps,actions),
    withRouter
    )
    (Roster);