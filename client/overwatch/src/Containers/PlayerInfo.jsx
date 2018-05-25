import React, { Component } from 'react';
import { connect } from 'react-redux';

class Playerinfo extends Component{





    render(){
        return(
        <div className="chat">
       <div className="container">
           <div className="row">
               <div className="col-8">
                   <div className="card">
                       <div className="card-body">
                           <div className="card-title"><strong>Player Information</strong></div>
                           <div>{this.props.information.username}</div>
                           <div>{this.props.information.level}</div>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
                           </div>
        )
    }
}


const mapStateToProps = (state) => { 
    return { 
      information: state.search.playerinfo
      };
  };
  
  export default connect(mapStateToProps,null)(Playerinfo);