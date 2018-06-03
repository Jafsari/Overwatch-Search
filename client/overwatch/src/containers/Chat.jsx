import React from "react";
import io from "socket.io-client";
import '../App.css'
import { connect } from 'react-redux';
import Navigation from '../components/Navigation.jsx';
import Infinite from 'react-infinite';
import { Alert } from 'reactstrap';


class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: this.props.user.toString(),
            message: '',
            messages: []
        };

          this.socket = io(this.props.server);
          console.log(this.state.messages)
        this.socket.on('RECEIVE_MESSAGE', function(data){
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            console.log(this.state.message.length)
            if (this.state.message.length === 0){
                return;
            } else {
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }

    }

    render(){
        
        return (
          <div className="chat">
          <form onSubmit={this.sendMessage} >
             <img src={this.props.image} className={this.props.imageStyle} alt="logo" />
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title"><strong>{this.props.name}</strong></div>
                                <hr/>
                                <div className="messages">
                                {this.state.messages.map(message => {
                                        return (
                                            
                                            <div className="message"> <div><img src={this.props.logo} className={this.props.logoStyle}/></div> <strong>{message.author}</strong>: {message.message}</div>
                                     
                                        )
                                    })}
                                    
                                </div>

                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </form>
            <div className="compNavigation">
            <Navigation />
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return { 
      user: state.auth.user ,
      isAuthenticated: state.auth.isAuthenticated
      };
  };
  
  export default connect(mapStateToProps,null)(Chat);