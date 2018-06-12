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



class Status extends Component{
    constructor(props){
        super(props)
        this.state={
            data:false
        }
    
    }
    componentDidMount(){
        this.props.watch();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if(nextProps.streamer.data) {  
            (this.setState({
                data:true
            }));

        } 
    }
    
    render(){
        console.log(this.state)
        const information = (this.state.data ? (
            <div className="StatusBackground">
            <div className="StatusLayout">
                <div className="StatusContainer">
                {this.props.streamer.data.map((stream,index) => {
                    return(
                    <div key={index} className="statusInfo">
                        <span>{stream.title}</span>:<span>{stream.viewer_count}</span>
                    </div>

                    )
                })}
                </div>
                <Navigation />
            </div>
            
        </div>
        ) : (
            <div>
            <Progress />
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
          streamer: state.stream.information
          };
      };
      
    
    export default compose(
    connect(mapStateToProps,actions),
    withRouter
    )
    (Status);

    // {this.props.streamer.data.map((stream,index) => {
    //     return (
    //             <div key={index}>
             
    //             <div>

    //             </div>
    //             </div>

    //     )
    // })}