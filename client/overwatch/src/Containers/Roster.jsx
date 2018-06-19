import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup,  Input,  Button, Form } from 'reactstrap';
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import {withRouter} from "react-router-dom";
import { compose } from 'redux';
import Progress from '../Components/Progress.jsx'



class Roster extends Component{
    constructor(props){
        super(props)
        this.state={
            data:false,
            done:false,
            team:''
        }
    
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
          });
          console.log(this.state.search)
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            data:'loading'
        })
        this.props.OWLTeam(this.state).then(() => {
            this.setState({data:'done'})
        }).catch(e => {
            console.log(e.message)
        })

    }
    
    render(){
        console.log(this.state)
        let information;
        if (!this.state.data){
            information =  <div className="RosterBackground">
            <div className="rosterLayout">
            <Form onSubmit={this.handleSubmit}>
            <FormGroup>
            < Input 
          onChange={this.handleChange}
          placeholder="Enter Team"
          name="team"
          type="text"
          id="team"
          value={this.state.team} 
         valid />
        </FormGroup>
        </Form>
        <Button onClick={this.handleClick}> Submit </Button>
        <Navigation />
            </div>
            </div>
        }  
        if (this.state.data === 'loading'){
            information =             <div className="RosterBackground">
            <div className="InviteLoading">
            <Progress />
            </div>
            </div>
        }

        if (this.state.data === 'done'){
            information =  <div className="RosterBackground">
            <div className="StatusLayout">
                <span className="rankTitle"><strong>{this.state.team}</strong></span>
                    <div className="StatusContainer">
                    <table id="rankTable">
                    <th>Name</th>
                    <th>Home Location</th>
                    <th>Role</th>
                    <th>Nationality</th>
                    <th>Family Name</th>
                    <th>Main</th>
                    <th>Picture</th>
                
                    {this.props.owl.map((team,index) => {
                        return(
                        <tr key={index} className="statusInfo">               
                            <td className="streamTitle">{team.name}</td>
                            <td>{team.homeLocation}</td>
                            <td>{team.attributes.role} </td>
                            <td>{team.nationality} </td>
                            <td> {team.familyName} </td>
                            <td> <img className= "owlLogo" src ={team.attributes.heroes[0].icons.android} /></td>
                            <td> <img className="owlLogo" src={team.headshot}/></td>
                        </tr>
    
    
                        )
                    })}
                        </table>
                    </div>
                    <Navigation />
                </div>
                
            </div>
        }
    return(
        <div>
            {information}
        </div>
            )
        }
    
    }
    const mapStateToProps = (state) => { 
        return { 
          owl: state.owl.current
          };
      };
      
    
    export default compose(
    connect(mapStateToProps,actions),
    withRouter
    )
    (Roster);