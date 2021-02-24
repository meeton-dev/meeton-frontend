import React, { useEffect, useState, useRef } from 'react';
import socket from '../../../Services/socket';

const Chat = ({ display, roomId }) => {
  const currentUser = sessionStorage.getItem('user');
  const [msg, setMsg] = useState([]);
  const divsEndRef = useRef(null);
  const inputRef = useRef();
  
  useEffect(() => {
    socket.on('FE-receive-div', ({ msg, sender }) => {
      setMsg((msgs) => [...msgs, { sender, msg }]);
    });
  }, []);

  // Scroll to Bottom of div List
  useEffect(() => {scrollToBottom()}, [msg])

  const scrollToBottom = () => {
    divsEndRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  const senddiv = (e) => {
    if (e.key === 'Enter') {
      const msg = e.target.value;

      if (msg) {
        socket.emit('BE-send-div', { roomId, msg, sender: currentUser });
        inputRef.current.value = '';
      }
    }
  };

  return (
    <div className={`chatContainer ${display ? '' : 'width0'}`}>
      <div className="chatArea">
        <div className="msgList">
          {msg &&
            msg.map(({ sender, msg }, idx) => {
              if (sender !== currentUser) {
                return (
                  <div className="msg" key={idx}>
                    <strong>{sender}</strong>
                    <p>{msg}</p>
                  </div>
                );
              } else {
                return (
                  <div className="usrMsg" key={idx}>
                    <strong>{sender}</strong>
                    <p>{msg}</p>
                  </div>
                );
              }
            })}
            <div style={{float:'left', clear: 'both'}} ref={divsEndRef} />
        </div>
      </div>
      <input
        ref={inputRef}
        onKeyUp={senddiv}
        placeholder="Enter your msg"
      />
    </div>
  );
};

export default Chat;
