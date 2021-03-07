/* eslint-disable */
import React from 'react';

const Avatar = (props) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div className={`avatar ${props.mini ? 'mini' : ''} ${props.micro ? 'micro' : ''}`} style={{ backgroundColor: `#${props.color ? props.color : randomColor}` }}>
      N/A
    </div>
  );
};

export default Avatar;
