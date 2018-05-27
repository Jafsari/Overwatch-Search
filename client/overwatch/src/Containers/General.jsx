import React from "react";
import io from "socket.io-client";
import '../App.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import InfiniteScroll from 'react-infinite-scroller';
import Rein from '../Reinhardt_cute.png'
import comp from '../grandmaster.png'
import Navigation from './Navigation.jsx'
import reaper from '../reaper.png'
import grand from '../grandmaster.png'
import Chat from '../Components/Chat.jsx'

class ChatGeneral extends React.Component{

    render(){
        return<div>
            <Chat 
            name='General Chat' 
            image={Rein} 
            logo={grand} 
            imageStyle={'Reinhardt'} 
            logoStyle={'complogo'}
            server= 'localhost:5000/general'
            />
            </div>
    }
}
export default ChatGeneral;