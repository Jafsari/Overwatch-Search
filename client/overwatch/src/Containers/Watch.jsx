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
componentDidMount(){
    this.props.watch();
}

loop = () => {
    this.props.streamer.data.map(stream => {
        return (
            <div>
                {stream}
            </div>
        )
    })
}
check = () => {
    if (this.props.streamer === false){
    console.log(this.props.streamer)
    } else {
    console.log(this.props.streamer.data)
}
}

render(){
return(
    <div className="WatchBackground">
    {this.check()}
<FormFeedback className="formLay" valid>Search Players for their Info!</FormFeedback>
<FormText className="formLay2" > Remember to keep stalking at a minimum :)</FormText>
<div >
    
            </div>

<div>
</div>
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
(Watch);
