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
    // this.props.watch()
    this.props.getStreams()
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
    // console.log(this.props.streamer.data)
    const information = (this.state.data ?  (
            <div className="stream">
                                    <iframe
                        src="http://player.twitch.tv/?channel=
                        overwatchpit&muted=true"
                        height="720"
                        width="1280"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen="true">
                        </iframe>
            {this.props.streamer.data.map((stream,index) => {
                return (
                        <div key={index}>
                     
                        <div>

                        </div>
                        </div>
                )
            })}
            < Navigation />
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
