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
import Progress from '../Components/Progress.jsx'

class Watch extends Component{
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
    if(nextProps !== undefined && nextProps.streamer.data) {  
        (this.setState({
            data:true
        }));
       
    } 
}

render(){
    console.log(this.props.streamer.data)
    const information = (this.state.data ?  (
            <div className="stream">
            {this.props.streamer.data.map((stream,index) => {
                return (
                        <div key={index}>
                        {stream.title}
                        <div>
                        <img className='image' src={stream.thumbnail_url.replace("{width}x{height}","100x100")} />
                        </div>
                        </div>
                )
            })}
            </div>
            

    ) : (
        <div>
            <Progress />
        </div>
    ));

return(
    <div className="WatchBackground">
<div className='stream' >
    {information}
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
