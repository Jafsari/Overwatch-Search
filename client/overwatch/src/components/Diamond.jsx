import React from "react";
import '../App.css'
import diamond from '../logos/diamond.png'
import Chat from '../containers/Chat.jsx'

const ChatDiamond = () => {
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
export default ChatDiamond;