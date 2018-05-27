import React from "react";
import io from "socket.io-client";
import '../App.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import InfiniteScroll from 'react-infinite-scroller';
import comp from '../grandmaster.png'
import Navigation from './Navigation.jsx'
import Rein from '../Reinhardt_cute.png'
import grand from '../grandmaster.png'
import Chat from '../Components/Chat.jsx'

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