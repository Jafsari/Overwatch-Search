import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import '../App.css'
import axios from 'axios'

class Search extends Component{
constructor(props){
    super(props)
    this.state = {
        Search:''
    }
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
    
}

handleSearch =(e) => {
    axios.get('http://localhost:3000/api/auth/search')
    .then(function (response) {
      console.log(response.data);
      alert(response.data.username)
    })
    .catch(function (error) {
      console.log(error);
    });
}

render(){
return(
    <FormGroup className="login2">
<Label for="exampleEmail">Search for Player</Label>
<Input
          onChange={this.handleChange}
          placeholder="Enter battle.net"
          name="Search"
          type="text"
          id="Search"
          value={this.state.Search} 
 valid />
 <Button onClick ={this.handleSearch} color="danger">Login</Button>
<FormFeedback valid>Sweet! that name is available</FormFeedback>
<FormText>Example help text that remains unchanged.</FormText>
</FormGroup>
        )
    }

}

export default Search;