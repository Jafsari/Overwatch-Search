import React from "react";
import '../App.css'
import master from '../logos/master.png'
import Chat from '../containers/Chat.jsx'

const ChatMaster = () => {
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
export default ChatMaster;