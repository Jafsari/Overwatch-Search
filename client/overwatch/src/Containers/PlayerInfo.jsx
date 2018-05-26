import React, { Component } from 'react';
import { connect } from 'react-redux';
import'./player.css'
import Navigation from './Navigation.jsx'

class Playerinfo extends Component{
    constructor(props){
        super(props)
        this.state={
            data:false
        }
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if(nextProps !== undefined) {  
            (this.setState({
                data:true
            }));
        } 
      }
      


    render(){
        console.log(this.state)
        const information = (this.state.data ? (
            <div >
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
          ) : (
            <div></div> 
          ));
        return(
        <div >
       <div className="container">
           <div className="row">
               <div className="col-7">
                  
                       <div className="card-cool">
                                <div> {information} </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           <div className="playerLayout">
            <Navigation />
            </div>
                           </div>
                        
        )
    }
}


const mapStateToProps = (state) => { 
    return { 
      information: state.search.playerinfo,
      };
  };
  
  export default connect(mapStateToProps,null)(Playerinfo);