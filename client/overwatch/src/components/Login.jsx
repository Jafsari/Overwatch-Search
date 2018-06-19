import { connect } from 'react-redux';
import React, { Component } from 'react';
import '../App.css';
import BasicForm from '../Containers/Form.jsx';


class Login extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    if (this.props.isAuthenticated){
        this.props.history.push('dashboard')
    }
}

render(){
        return (
            <div className="login">
            <form className="login2">
              <div>
         <BasicForm current='Login'/>
      </div>
            <div>
            </div>
            </form>
            </div>
        
        )
    }
}
const mapStateToProps = (state) => { 
    return { 
      user: state.auth.user ,
      isAuthenticated: state.auth.isAuthenticated
      };
  };
  
  export default connect(mapStateToProps,null)(Login);
