import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { FormGroup, Label, Input, FormFeedback, FormText, Button, } from 'reactstrap';
import '../App.css'
import Navigation from '../components/Navigation.jsx'
import jwtDecode from 'jwt-decode';

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

information = (cb) => {
    this.props.search(this.state).then(res => {
        let info = res.data
        this.props.setSearchUser(info.username)
    })
    .catch(err => {
        console.log(err.message)
    })
    cb
}

handleSearch =(e) => {
e.preventDefault();
this.information(setTimeout(this.route,0))

}

render(){
return(
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
<FormText className="formLay"> Remember to keep stalking at a minimum :)</FormText>
<div >
            <Navigation />
            </div>
</FormGroup>
        )
    }

}

export default connect(null,actions)(Search);