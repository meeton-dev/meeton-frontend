import React, { Component } from 'react';
import Moment from 'react-moment';
import { Avatar } from '../../Common/avatar';
import { User } from './parts/user';
import AudioAnalyser from './AudioAnalyser';


class MeetingCallUserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: [],
      audio: null
    }
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

   
  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    console.log(audio);
    this.setState({ audio });
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }
  

  updateClients = (clients) => {
    console.log(clients);
    this.setState({clients})
  }
  componentDidMount(){
    // socket.on('clients', this.updateClients);
    this.getMicrophone();
  }

  render() {

    const {clients} = this.state;
    let date = new Date()
    return (
      <div className="meetingBar">
        {/* schedule part, infos etc. */}
        <div className="timer">
          00:13
        </div>
        <div className="in-call">
          {[...Array(15)].map((e,i) => {
            return <div key={i} className="user">
                <User />
            </div>
          })}
        </div>
        <div className="controls">
          <button onClick={this.toggleMicrophone}>
            {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
          </button>
        </div>
        {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
      </div>
  )}
}


export default MeetingCallUserList;
