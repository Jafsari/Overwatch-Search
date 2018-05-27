import React from "react";
import io from "socket.io-client";
import '../App.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import InfiniteScroll from 'react-infinite-scroller';
import diamond from '../diamond.png'
import Navigation from './Navigation.jsx'
import Chat from '../Components/Chat.jsx'

class ChatDiamond extends React.Component{

    render(){
        return<div>
            <Chat 
            name='Diamond' 
            image={diamond} 
            logo={diamond} 
            imageStyle={'diamond'} 
            logoStyle={'diamondlogo'}
            server='localhost:5000/diamond'
            />
            </div>
    }
}
export default ChatDiamond;