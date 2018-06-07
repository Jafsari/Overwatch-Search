import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../Components/Navigation.jsx'
import * as actions from '../actions'
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
        this.props.history.push('')
        console.log('Goodbye!')
    }

    render(){
        return(
            <div className="Dashboard2">
            <div className="dashboard">
                <Navigation />
                <div className="inline">
                <Modal />
                <Button onClick ={this.handleLogout} color="warning">Logout</Button>
                </div>
                </div>
            </div>
        )
    }
}


export default connect(null,actions)(Dashboard);