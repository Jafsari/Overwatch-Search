import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import {withRouter} from "react-router-dom";
import { compose } from 'redux';
import Progress from '../Components/Progress.jsx'



class Ranking extends Component{
    constructor(props){
        super(props)
        this.state={
            data:false
        }
    
    }
    componentDidMount(){
        this.props.OWL();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if(nextProps.owl) {  
            (this.setState({
                data:true
            }));

        } 
    }
    
    render(){
        console.log(this.state)
        const information = (this.state.data ? (
            <div className="RankingBackground">
        <div className="StatusLayout">
            <span className="rankTitle"><strong>OWL Ranking</strong></span>
                <div className="StatusContainer">
                <table id="rankTable">
                <th>Owl Team</th>
                <th>Rank</th>
                <th>Logo</th>
                <th>Home Location </th>
            
                {this.props.owl.map((team,index) => {
                    return(
                    <tr key={index} className="statusInfo">               
                        <td className="streamTitle">{team.competitor.name}</td>
                        <td>{team.placement}</td>
                        <td><img className="owlLogo" src={team.competitor.logo} alt=''/> </td>
                        <td>{team.competitor.homeLocation}</td>
                    </tr>


                    )
                })}
                    </table>
                </div>
                <Navigation />
            </div>
            
        </div>
        ) : (
            <div className="RankingBackground">
            <div className="InviteLoading">
            <Progress />
            </div>
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
          owl: state.owl.current.content
          };
      };
      
    
    export default compose(
    connect(mapStateToProps,actions),
    withRouter
    )
    (Ranking);