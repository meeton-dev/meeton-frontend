import React, { Component } from 'react';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.streamCamVideo = this.streamCamVideo.bind(this);
  }

  componentDidMount() {
    this.streamCamVideo();
  }

  streamCamVideo() {
    const constraints = { audio: true, video: { width: 640, height: 480 } };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((mediaStream) => {
        const video = document.querySelector('video');

        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
          video.play();
        };
      })
      .catch((err) => {
        console.log(`${err.name}: ${err.message}`);
      });
  }

  render() {
    return (
      <div className="userBox">
        <video autoPlay muted id="videoElement" controls={false} />
      </div>
    );
  }
}
