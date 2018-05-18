import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation.jsx'
import * as actions from '../actions'
import Chatroom from './chatroom.jsx'
import '../App.css';
import { Button } from 'reactstrap';
import Modal from '../Components/Modal.jsx'

class Dashboard extends Component {
    constructor(props){
        super(props)
    }

    handleLogout = (e) => {
        e.preventDefault();
        this.props.logout()
        this.props.history.push('welcome')
        console.log('Goodbye!')
    }

    render(){
    let cool = console.log('woo')
        return(
            <div className="Dash">
            <div className="dashboard">
                <Navigation />
                <div className="inline">
                <Modal />
                </div>
                <div className="second">
                <Button onClick ={this.handleLogout} color="success">Logout</Button>
                </div>
                </div>
            </div>
        )
    }
    
}

export default connect(null,actions)(Dashboard);