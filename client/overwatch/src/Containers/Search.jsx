import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import '../App.css'
import axios from 'axios'

class Search extends Component{
constructor(props){
    super(props)
    this.state = {
        platform:'',
        region:'',
        tag:''
    }
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
      });
    
}

handleSearch =(e) => {
    /* const platform = 'pc';
    const region = 'us';
    const tag = 'Calvin-1337';*/
    let obj ={
        platform:this.state.platform,
        region:this.state.region,
        tag:this.state.tag
    }
    axios.post('http://localhost:3000/api/auth/search',obj)
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

 <Button className="SearchButton"  onClick ={this.handleSearch} color="danger">Login</Button>
<FormFeedback className="formLay" valid>Search Players for their Info!</FormFeedback>
<FormText className="formLay"> Remember to keep stalking at a minimum :)</FormText>
</FormGroup>
        )
    }

}

export default Search;