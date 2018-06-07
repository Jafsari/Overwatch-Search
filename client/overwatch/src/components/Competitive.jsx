import React from "react";
import '../App.css'
import comp from '../logos/grandmaster.png'
import grand from '../logos/grandmaster.png'
import Chat from '../Containers/Chat.jsx'

const CompetitiveChat = () => {
      return<div className="CChat">
          <Chat 
          name='Competitive Chat' 
          image={comp} 
          logo={grand} 
          imageStyle={"competitiveLogo"} 
          logoStyle={'complogo'}
          server='localhost:5000/competitive'
          />
          </div>
}
export default CompetitiveChat