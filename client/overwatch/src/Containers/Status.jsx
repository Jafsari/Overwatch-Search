import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import {withRouter} from "react-router-dom";
import { compose } from 'redux';
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
        const information = (this.state.data ? (
        <div className="StatusBackground">
        <div className="StatusLayout">
            <span className="statusTitle">Overwatch Streamer Status </span>
                <div className="StatusContainer">
                <table id="statusTable">
                <th>Stream Title</th>
                <th>Viewer_Count</th>
            
                {this.props.streamer.data.map((stream,index) => {
                    return(
                    <tr key={index} className="statusInfo">               
                        <td className="streamTitle">{stream.title}</td>
                        <td>{stream.viewer_count}</td>
                    </tr>


                    )
                })}
                    </table>
                </div>
                <Navigation />
            </div>
            
        </div>
        ) : (
            <div className="StatusBackground">
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