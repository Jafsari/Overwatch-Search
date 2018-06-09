import React from "react";
import '../App.css'
import Rein from '../logos/Reinhardt_cute.png'
import Ana from '../logos/ana-final.png'
import grand from '../logos/grandmaster.png'
import Chat from '../Containers/Chat.jsx'

const ChatGeneral = () => {
        return<div className="GChat">
            <Chat 
            name='General Chat' 
            image={Ana} 
            logo={grand} 
            imageStyle={'Ana'} 
            logoStyle={'complogo'}
            server= 'localhost:5000/general'
            />
            </div>
}
export default ChatGeneral;