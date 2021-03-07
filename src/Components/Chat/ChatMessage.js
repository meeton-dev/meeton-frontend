/* eslint-disable */
import React from 'react';
import Moment from 'react-moment';
// import { Avatar } from '../../Common/avatar'

export default ({ name, message }) => (
  <div className="chat-message">
    <div className="name">
      {name}
      {' '}
      -
      {' '}
      {<Moment format="HH:mm">{new Date()}</Moment>}
    </div>
    <div className="bubble">
      {message}
    </div>
  </div>
);
