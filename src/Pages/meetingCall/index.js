import React, { Component, Fragment } from 'react';

import MeetingCallBoard from '../../Components/meetingCall/meetingCallBoard';
import MeetingCallUserList from '../../Components/meetingCall/meetingCallUserList';
import ChatComponent from '../../Components/Chat/ChatComponent';

class MeetingCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
      return (
        <section className="meetingCall">
            <div className="content">
              <MeetingCallBoard />
            </div>
            <div className="content-left">
              <MeetingCallUserList />
            </div>

          <ChatComponent />
        </section>
    )}
}

export default MeetingCall;