import React from "react";
import '../App.css'
import comp from '../logos/grandmaster.png'
import grand from '../logos/grandmaster.png'
import Chat from '../containers/Chat.jsx'

class CompetitiveChat extends React.Component{

  render(){
      return<div>
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
}
export default CompetitiveChat