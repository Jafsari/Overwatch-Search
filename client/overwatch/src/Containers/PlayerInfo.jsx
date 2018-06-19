import React, { Component } from 'react';
import { connect } from 'react-redux';
import'../player.css'
import Navigation from '../Components/Navigation.jsx'
import Progress from '../Components/Progress.jsx'
import {withRouter} from "react-router-dom";
import { compose } from 'redux';

class Playerinfo extends Component{
    constructor(props){
        super(props)
        this.state={
            data:false
        }
    }

    componentDidMount(){
        if (this.props.information === false){
            this.props.history.push('search')
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if(nextProps !== undefined && nextProps.information.username) {  
            (this.setState({
                data:true
            }));
        } else {
            this.props.history.push('search')
        }
    }
      


    render(){
        console.log(this.state)
        const information = (this.state.data ? (
            <div  >
                       <div className="container">
           <div className="row">
               <div className="col-7">
               <div className="card-cool">
            <div className="player" >
            <div className="card-title"><strong>Player Information</strong></div>
            <div><strong>Username:</strong>{this.props.information.username}</div>
            <div><strong>Level:</strong>{this.props.information.level}</div>
            <img src={this.props.information.portrait} />
            <div><strong>Competitive Rank:</strong>{this.props.information.competitive.rank}</div>
            <div><strong>Competitive Time:</strong>{this.props.information.playtime.competitive} </div>
            </div>
            <div>
            <img  src={this.props.information.competitive.rank_img} />
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
          ) : (
            <div className='Progress' >
           <Progress/>
           </div>
          ));
        return(
        <div className="SearchBackground">
        <div> {information} </div>
            </div>
                      
                        
        )
    }
}


const mapStateToProps = (state) => { 
    return { 
      information: state.search.playerinfo,
      };
  };
  

  export default compose(
  connect(mapStateToProps,null),
  withRouter
  )
  (Playerinfo);

