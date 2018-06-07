import React from "react";
import '../App.css'
import diamond from '../logos/diamond.png'
import Chat from '../Containers/Chat.jsx'

const ChatDiamond = () => {
        return<div className="DiaChat">
            <Chat 
            name='Diamond Chat' 
            image={diamond} 
            logo={diamond} 
            imageStyle={'diamond'} 
            logoStyle={'diamondlogo'}
            server='localhost:5000/diamond'
            />
            </div>
    
}
export default ChatDiamond;