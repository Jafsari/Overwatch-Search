import React from 'react';
import Navigation from './Navigation.jsx'
import Chatroom from './chatroom.jsx'
import '../App.css';
import Modal from '../Components/Modal.jsx'
const Dashboard = (props) => {

    let cool = console.log('woo')
        return(
            <div className="format">
                <Navigation />
                <Modal />
                {cool}
                </div>
        )
    
}

export default Dashboard;