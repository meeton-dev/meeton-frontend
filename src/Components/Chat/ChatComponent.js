import React, { Component } from 'react';

import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

const SOCKET_SERVER = 'ws://localhost:8888'

class ChatComponent extends Component {
    ws = new WebSocket(SOCKET_SERVER)
    state = {
        name: 'Balu',
        messages: [],
      }
    componentDidMount() {
        this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected to socket server - localhost:8888');
        }

        this.ws.onmessage = evt => {
            // on receiving a message, add it to the list of messages
            const message = JSON.parse(evt.data);
            this.addMessage(message);
        }

        this.ws.onclose = () => {
            console.log('disconnected');
            // automatically try to reconnect on connection loss
            this.setState({
                ws: new WebSocket(SOCKET_SERVER),
            })
        }
    }

    addMessage = message => this.setState(state => ({ messages: [message, ...state.messages] }))

    submitMessage = messageString => {
        // on submitting the ChatInput form, send the message, add it to the list and reset the input
        const message = { name: this.state.name, message: messageString };
        console.log(message);
        this.ws.send(JSON.stringify(message));

        this.addMessage(message)
    }

    render() {
        return (
            <div className="chat">
                <label htmlFor="name">
                Name:&nbsp;
                <input
                    type="text"
                    id={'name'}
                    placeholder={'Enter your name...'}
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                />
                </label>
                <div className="message-wrapper">
                    {this.state.messages.reverse().map((message, index) =>
                        <ChatMessage
                            key={index}
                            message={message.message}
                            name={message.name}
                        />
                    )}
                </div>
                <ChatInput
                    ws={this.ws}
                    onSubmitMessage={messageString => this.submitMessage(messageString)}
                />
            </div>
    )}
}


export default ChatComponent
