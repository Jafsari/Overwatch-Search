import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup, Label, Input, FormFeedback, FormText, Button, } from 'reactstrap';
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import jwtDecode from 'jwt-decode';
import {withRouter} from "react-router-dom";
import { compose } from 'redux';

class Invite extends Component{
constructor(props){
    super(props)
    this.state = {
        to:'',
        subject:'',
        text:'',
    }

}

clear = () => {
    this.setState({
        to:"",
        subject:"",
        text:""
    });
}

handleChange = (e) => {
   this.setState({
        [e.target.name]: e.target.value
      });
    console.log(this.state)
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

render(){
return(
    <div className="inviteBackground">
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
</div>
        )
    }

}

export default compose(
connect(null,actions),
withRouter
)
(Invite);



// const information = (this.state.data ? (
//     <div  >
//                <div className="container">
//    <div className="row">
//        <div className="col-7">
//        <div className="card-cool">
//     <div className="player" >
//     <div className="card-title"><strong>Player Information</strong></div>
//     <div><strong>Username:</strong>{this.props.information.username}</div>
//     <div><strong>Level:</strong>{this.props.information.level}</div>
//     <img src={this.props.information.portrait} />
//     <div><strong>Competitive Rank:</strong>{this.props.information.competitive.rank}</div>
//     <div><strong>Competitive Time:</strong>{this.props.information.playtime.competitive} </div>
//     </div>
//     <div>
//     <img  src={this.props.information.competitive.rank_img} />
//     </div>
//     </div>
//     </div>
//     </div>
//     </div>
//     <div className="playerLayout">
//     <Navigation />
//     </div>
//     </div>
//   ) : (
//     <div className='Progress' >
//    <Progress/>
//    </div>
//   ));