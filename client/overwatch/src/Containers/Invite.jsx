import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup, Label, Input, FormFeedback, FormText, Button, } from 'reactstrap';
import '../App.css'
import Navigation from '../Components/Navigation.jsx'
import jwtDecode from 'jwt-decode';
import {withRouter} from "react-router-dom";
import { compose } from 'redux';

class Search extends Component{
constructor(props){
    super(props)
    this.state = {
        Who:'',
        Subject:'',
        message:'',
    }

}

clear = () => {
    this.setState({
        Who:"",
        Subject:"",
        message:""
    });
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
    
}
route = () => {
    this.props.history.push('player')
}


information = () => {
 var that = false
 var self = this
 var check = true
 let success;
    this.props.search(this.state).then(res => {
        let info = res.data
        this.props.setSearchUser(info.username)
       })
    .catch(err => {
        console.log(err.message)
        check = false
    })
    if (check === undefined){
        return;
    } else {
    self.props.history.push('player')
    console.log(check)
    }
}

handleSearch =(e) => {
e.preventDefault();
if (this.state.platform.length === 0 || this.state.region.length === 0 || this.state.tag.length === 0){
    alert('Please fill out the forms')
} else {
this.information(setTimeout(0))
}

}

render(){
return(
    <div className="inviteBackground">
    <FormGroup className="Searchlayout">
<Label for="exampleEmail">Search for Player</Label>

<Input className="SearchSpace"
          onChange={this.handleChange}
          placeholder="Who do you want to invite?"
          name="Who"
          type="text"
          id="who"
          value={this.state.Search} 
 valid />

 <Input className="SearchSpace"
          onChange={this.handleChange}
          placeholder="Subject"
          name="Subject"
          type="text"
          id="Subject"
          value={this.state.Search} 
 valid />

{/* <Input className="EmailSpace"
          onChange={this.handleChange}
          placeholder="Enter message"
          name="message"
          type="text"
          id="message"
          value={this.state.Search} 
 valid /> */}

         <FormGroup>
          <Label for="exampleText">Send a message</Label>
          <Input className="EmailSpace" type="textarea" name="text" id="exampleText" placeholder= "Send a message" />
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
(Search);