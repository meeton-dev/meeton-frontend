import React, { useRef, useState, useEffect } from 'react';
import socket from '../../../Services/socket';
import { useParams } from 'react-router-dom';

const Lobby = (props) => {
  const roomRef = useRef();
  const userRef = useRef();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    socket.on('FE-error-user-exist', ({ error }) => {
      if (!error) {
        const userName = userRef.current.value;

        sessionStorage.setItem('user', userName);
        props.history.push(`/room/${id}`);
      } else {
        setErr(error);
        setErrMsg('User name already exist');
      }
    });
  }, [props.history, id]);

  const clickJoin = () => {
    const userName = userRef.current.value;
    console.log(id)
    if (!id || !userName) {
      setErr(true);
      setErrMsg('Enter User Name');
    } else {
      socket.emit('BE-check-user', { roomId: id, userName });
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" ref={userRef} />
      </div>
      <button onClick={clickJoin}> Join </button>
      {err ? <div>{errMsg}</div> : null}
    </div>
  );
};

export default Lobby;
