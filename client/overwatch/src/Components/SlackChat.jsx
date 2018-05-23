import React, { Component } from 'react'
import Chatkit from '@pusher/chatkit'
import { connect } from 'react-redux';
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import TypingIndicator from './TypingIndicator'
import WhosOnlineList from './WhosOnlineList'

class ChatScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {},
      currentRoom: {},
      messages: [],
      usersWhoAreTyping: []
    }
     this.sendMessage = this.sendMessage.bind(this)
     this.sendTypingEvent = this.sendTypingEvent.bind(this)
  }

    sendTypingEvent() {
        this.state.currentUser
          .isTypingIn({ roomId: this.state.currentRoom.id })
          .catch(error => console.error('error', error))
      }

   sendMessage(text) {
       this.state.currentUser.sendMessage({
         text,
         roomId: this.state.currentRoom.id,
       })
     }

  componentDidMount () {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:aa51485c-a0ad-47c4-9ffa-c31f5b4b0672',
      userId: this.props.user,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3000/authenticate',
      }),
    })

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        return currentUser.subscribeToRoom({
          roomId: 8153667,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              })
            },
                    onUserStartedTyping: user => {
                          this.setState({
                            usersWhoAreTyping: [...this.state.usersWhoAreTyping, user.name],
                         })
                        },
                        onUserStoppedTyping: user => {
                          this.setState({
                            usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                              username => username !== user.name
                            ),
                          })
                        },
                    
                        onUserCameOnline: () => this.forceUpdate(),
                        onUserWentOffline: () => this.forceUpdate(),
                        onUserJoined: () => this.forceUpdate(),
          },
        })
      })
      .then(currentRoom => {
        this.setState({ currentRoom })
       })
      .catch(error => console.error('error', error))
  }


  render() {
        const styles = {
              container: {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
              },
              chatContainer: {
                display: 'flex',
                flex: 1,
              },
              whosOnlineListContainer: {
                width: '300px',
                flex: 'none',
                padding: 20,
                backgroundColor: '#2c303b',
                color: 'white',
              },
              chatListContainer: {
                padding: 20,
                width: '85%',
                display: 'flex',
                flexDirection: 'column',
              },
           }
              return (
                 <div style={styles.container}>
                   <div style={styles.chatContainer}>
                     <aside style={styles.whosOnlineListContainer}>
                       
                     </aside>
                     <section style={styles.chatListContainer}>
                                 <MessageList
              messages={this.state.messages}
              style={styles.chatList}
            />     
            <TypingIndicator usersWhoAreTyping={this.state.usersWhoAreTyping} />
              <SendMessageForm 
               onChange={this.sendTypingEvent}
              onSubmit={this.sendMessage} />

                     </section>
                   </div>
                 </div>
              )
  }
}

const mapStateToProps = (state) => { 
    return { 
      user: state.auth.user ,
      isAuthenticated: state.auth.isAuthenticated
      };
  };
  
  export default connect(mapStateToProps,null)(ChatScreen);