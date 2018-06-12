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



class Watch extends Component{
    constructor(props){
        super(props)
        this.state={
            data:false,
            search:''
        }
    }
componentDidMount(){
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

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
      console.log(this.state.search)
}

render(){
    const information = (this.state.data ?  (
            <div className>
            <div>
            <Form>
        <FormGroup>
        <Input 
          onChange={this.handleChange}
          placeholder="Who do you want to watch?"
          name="search"
          type="text"
          id="search"
          value={this.state.search} 
 valid />
        </FormGroup>
        </Form>
            <div>
        </div>
                </div>
                <div>
                                    <iframe
                        src={`http://player.twitch.tv/?channel=${this.state.search}&muted=true`}
                        height="720"
                        width="1280"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen="true">
                        </iframe>
                        </div>
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
