import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup, Label, Input, FormFeedback, FormText, Button, } from 'reactstrap';
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import jwtDecode from 'jwt-decode';
import {withRouter} from "react-router-dom";
import { compose } from 'redux';
import Progress from '../Components/Progress.jsx';

class Invite extends Component{
constructor(props){
    super(props)
    this.state = {
        to:'',
        subject:'',
        text:'',
    }

}

handleChange = (e) => {
   this.setState({
        [e.target.name]: e.target.value
      });
}


information = () => {
    this.props.setUserInviteLoading('loading')
    this.props.invite(this.state).then(res => {
        let info = res.data
       })
    .catch(err => {
        console.log(err.message)
     
    })
}

handleSearch =(e) => {
e.preventDefault();
if (this.state.tolength === 0 || this.state.subject.length === 0 || this.state.text.length === 0){
    alert('Please fill out the forms')
} else {
this.information();

}

}

check = () => {
    console.log(this.props.inviteInfo)
    if (this.props.inviteInfo === false || this.props.inviteInfo === 'success') {
        return (<div className="inviteBackground">
        <FormGroup className="Searchlayout">
    <Label for="exampleEmail">Invite a Friend</Label>
    
    <Input className="SearchSpace"
              onChange={this.handleChange}
              placeholder="Who do you want to invite?"
              name="to"
              type="text"
              id="to"
              value={this.state.Search} 
     valid />
    
     <Input className="SearchSpace"
              onChange={this.handleChange}
              placeholder="Subject"
              name="subject"
              type="text"
              id="subject"
              value={this.state.Search} 
     valid />
             <FormGroup>
              <Label for="exampleText">Send a message</Label>
              <Input  onChange={this.handleChange} 
              className="EmailSpace" 
              type="textarea" 
              name="text" 
              id="exampleText" 
              placeholder= "Send a message"
               value={this.state.Search} />
            </FormGroup>
    
     <Button className="SearchMutton" onClick ={this.handleSearch} color="danger">Send</Button>
    <FormFeedback className="formLay" valid>Invite your friends to join!</FormFeedback>
                <FormText className="formLay2" > The more the merrier!</FormText>
    <div >
                <Navigation />
                </div>
    </FormGroup>
    <div>
    </div>
    </div>)
    } else {
        return (
            <div className="inviteBackground">
            <div className="inviteLoading">
           <Progress />
            </div>
            </div>
        )
    }
}

render(){
return (
    <div>
    {this.check()}
    </div>
)

    }

}
const mapStateToProps = (state) => { 
    return { 
      inviteInfo: state.invite.inviteInfo,
      };
  };

export default compose(
connect(mapStateToProps,actions),
withRouter
)
(Invite);
