import React from 'react';

const BottomBar = ({
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
          <div>
            {/* {userVideoAudio.video ? (
              <FaIcon className="fas fa-video"></FaIcon>
            ) : (
              <FaIcon className="fas fa-video-slash"></FaIcon>
            )} */}
          </div>
          Camera
        </div>
        <div  className={`cameraBtn ${userVideoAudio.audio ? '' : 'off'}`}onClick={toggleCameraAudio} data-switch="audio">
          <div>
            {/* {userVideoAudio.audio ? (
              <FaIcon className="fas fa-microphone"></FaIcon>
            ) : (
              <FaIcon className="fas fa-microphone-slash"></FaIcon>
            )} */}
          </div>
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

export default BottomBar;
