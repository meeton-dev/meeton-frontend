import React, { Component, Fragment } from 'react';
import MeetingCallBoard from '../../Components/meetingCall/meetingCallBoard/meetingCallBoard';
import MeetingCallUserList from '../../Components/meetingCall/meetingCallUserList/meetingCallUserList';
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
            {/* <DashboardTop /> */}
            <div className="content">
              <MeetingCallBoard />
            </div>
            <div className="content-left">
              <MeetingCallUserList />
            </div>

          {/* <ChatComponent /> */}
        </section>
    )}
}


export default MeetingCall;
