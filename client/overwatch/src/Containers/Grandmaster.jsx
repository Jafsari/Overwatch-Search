import React from "react";
import io from "socket.io-client";
import '../App.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import InfiniteScroll from 'react-infinite-scroller';
import grand from '../grand.png'
import Navigation from './Navigation.jsx'
import Chat from '../Components/Chat.jsx'

class ChatGrand extends React.Component{

    render(){
        return<div>
            <Chat 
            name='Grandmaster Chat'
            image={grand} 
            logo={grand} 
            imageStyle={'grandmaster'} 
            logoStyle={'grandlogo'}
            server='localhost:5000/grandmaster'
            />
            </div>
    }
}
export default ChatGrand