import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup, Label, Input, FormFeedback, FormText, Button, } from 'reactstrap';
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import jwtDecode from 'jwt-decode';
import {withRouter} from "react-router-dom";
import { compose } from 'redux';
import axios from 'axios';
import { TwitchClient } from '../config.js'

class Watch extends Component{
constructor(props){
    super(props)
    this.state = {
        platform:'',
        region:'',
        tag:'',
    }

}

componentDidMount(){
    this.props.watch();
}

clear = () => {
    this.setState({
        platform:"",
        region:"",
        tag:""
    });
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
    
}
route = () => {
    this.props.history.push('player')
}


information = () => {
 var that = false
 var self = this
 var check = true
 let success;
    this.props.search(this.state).then(res => {
        let info = res.data
        this.props.setSearchUser(info.username)
       })
    .catch(err => {
        console.log(err.message)
        check = false
    })
    if (check === undefined){
        return;
    } else {
    self.props.history.push('player')
    console.log(check)
    }
}

handleSearch =(e) => {
e.preventDefault();
if (this.state.platform.length === 0 || this.state.region.length === 0 || this.state.tag.length === 0){
    alert('Please fill out the forms')
} else {
this.information(setTimeout(0))
}

}

render(){
return(
    <div className="WatchBackground">
    <FormGroup className="Searchlayout">



<FormFeedback className="formLay" valid>Search Players for their Info!</FormFeedback>
<FormText className="formLay2" > Remember to keep stalking at a minimum :)</FormText>
<div >
    
            </div>
</FormGroup>
<div>
</div>
</div>
        )
    }

}

export default compose(
connect(null,actions),
withRouter
)
(Watch);
