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
        const comp = (this.state.data ? (
            <div>{this.props.information.competitive.rank}</div> 
          ) : (
            <div>hi</div> 
          ));
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
                           <img src={this.props.information.portrait} />
                           <div>{comp}</div>
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