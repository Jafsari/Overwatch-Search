import React from "react";
import io from "socket.io-client";
import '../App.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import InfiniteScroll from 'react-infinite-scroller';
import master from '../master.png'
import Navigation from './Navigation.jsx'
import Chat from '../Components/Chat.jsx'

class ChatMaster extends React.Component{

    render(){
        return<div>
            <Chat 
            name='Master Chat'
            image={master} 
            logo={master} 
            imageStyle={'master'} 
            logoStyle={'masterlogo'}
            server='localhost:5000/master'
            />
            </div>
    }
}
export default ChatMaster;