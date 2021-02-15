import React, { Component } from 'react';
import Moment from 'react-moment';
import { Avatar } from '../../Common/avatar';
import { User } from './parts/user';
import AudioAnalyser from './microphone/AudioAnalyser';
import Camera from './camera/camera';
import ThemeSwap from '../../AppTop/ThemeSwap';


class MeetingCallUserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clients: [],
      audio: null,
      fullscreen: true
    }
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

   
  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
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

    const {clients, fullscreen} = this.state;
    let date = new Date()
    return (
      <div className="meetingBar">
        <ThemeSwap />
        
        <div className={`in-call ${fullscreen ? 'fullscreen' : 'compact'}`}>
          <button className="fullscreenBtn" onClick={() => this.setState({fullscreen: fullscreen === false ? true : false})}>{fullscreen ? 'small' : 'fullscreen'}</button>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          <div className="user">
            <Camera />
          </div>
          {/* {[...Array(15)].map((e,i) => {
            return <div key={i} className="user">
                <User />
            </div>
          })} */}
        </div>
        {/* <div className="controls">
          <button onClick={this.toggleMicrophone}>
            {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
          </button>
        </div> */}

        {/* {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''} */}
      </div>
  )}
}


export default MeetingCallUserList;
