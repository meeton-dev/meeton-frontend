import React from 'react';

const CallBar = ({
  clickChat,
  goToBack,
  toggleCameraAudio,
  userVideoAudio,
  clickScreenSharing,
  screenShare,
}) => {
  return (
    <div className="bar">
      <div className="left">
        <div  className={`cameraBtn ${userVideoAudio.video ? '' : 'off'}`} onClick={toggleCameraAudio} data-switch="video">
          Camera
        </div>
        <div  className={`cameraBtn ${userVideoAudio.audio ? '' : 'off'}`}onClick={toggleCameraAudio} data-switch="audio">
          Audio
        </div>
      </div>
      <div className="center">
        <div className="chatBtn" onClick={clickChat}>
          Chat
        </div>
        <div className={`${screenShare ? 'sharing' : ''} shareScreenBtn`} onClick={clickScreenSharing}>
          Share Screen
        </div>
      </div>
      <div className="right">
        <div  className="stopBtn" onClick={goToBack}>Stop</div>
      </div>
    </div>
  );
};

export default CallBar;
