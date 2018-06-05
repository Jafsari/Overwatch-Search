import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup, Label, Input, FormFeedback, FormText, Button, } from 'reactstrap';
import '../App.css'
import Navigation from '../components/Navigation.jsx'
import jwtDecode from 'jwt-decode';
import {withRouter} from "react-router-dom";
import { compose } from 'redux';

class Search extends Component{
constructor(props){
    super(props)
    this.state = {
        platform:'',
        region:'',
        tag:'',
    }

}

clear = () => {
    this.setState({
        platform:"",
        region:"",
        tag:""
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
    <div className="SearchBackground">
    <FormGroup className="Searchlayout">
<Label for="exampleEmail">Search for Player</Label>

<Input className="SearchSpace"
          onChange={this.handleChange}
          placeholder="Enter platform"
          name="platform"
          type="text"
          id="platform"
          value={this.state.Search} 
 valid />

 <Input className="SearchSpace"
          onChange={this.handleChange}
          placeholder="Enter region"
          name="region"
          type="text"
          id="region"
          value={this.state.Search} 
 valid />

<Input className="SearchSpace"
          onChange={this.handleChange}
          placeholder="Enter tag"
          name="tag"
          type="text"
          id="tag"
          value={this.state.Search} 
 valid />

 <Button className="SearchMutton" onClick ={this.handleSearch} color="info">Search</Button>
<FormFeedback className="formLay" valid>Search Players for their Info!</FormFeedback>
<FormText className="charmander" > Remember to keep stalking at a minimum :)</FormText>
<div >
            <Navigation />
            </div>
</FormGroup>
</div>
        )
    }

}

export default compose(
connect(null,actions),
withRouter
)
(Search);


