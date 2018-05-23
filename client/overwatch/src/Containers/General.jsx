import React from "react";
import io from "socket.io-client";
import '../App.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import InfiniteScroll from 'react-infinite-scroller';

class ChatGeneral extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: this.props.user.toString(),
            message: '',
            messages: []
        };

          this.socket = io('localhost:5000/general');
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
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }
    render(){
        return (
          <div className="chat">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title"><strong>General Chat</strong></div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                    
                                            <div className="message"><strong>{message.author}</strong>: {message.message}</div>
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

export default connect(mapStateToProps,null)(ChatGeneral);