import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <div>
            <div><strong>Username:</strong>{this.props.information.username}</div>
            <div><strong>Level:</strong>{this.props.information.level}</div>
            <img src={this.props.information.portrait} />
            <div><strong>Competitive Rank:</strong>{this.props.information.competitive.rank}</div>
            </div>
          ) : (
            <div></div> 
          ));
        return(
        <div className="chat">
       <div className="container">
           <div className="row">
               <div className="col-8">
                   <div className="card">
                       <div className="card-body">
                           <div className="card-title"><strong>Player Information</strong></div>
                                <div> {information} </div>
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
      information: state.search.playerinfo,
      };
  };
  
  export default connect(mapStateToProps,null)(Playerinfo);