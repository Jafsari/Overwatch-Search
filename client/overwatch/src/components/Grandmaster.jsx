import React from "react";
import '../App.css'
import grand from '../logos/grand.png'
import Chat from '../containers/Chat.jsx'

const ChatGrand = () =>{
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
export default ChatGrand