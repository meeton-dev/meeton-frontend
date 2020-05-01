import React, { Component } from 'react';

export default class Camera extends React.Component {
    constructor(props) {
      super(props);
      this.streamCamVideo= this.streamCamVideo.bind(this);
    }

    componentDidMount(){
        this.streamCamVideo();
    }
    streamCamVideo() {
      var constraints = { audio: true, video: { width: 640, height: 480 } };
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(mediaStream) {
          var video = document.querySelector("video");
  
          video.srcObject = mediaStream;
          video.onloadedmetadata = function(e) {
            video.play();
          };
        })
        .catch(function(err) {
          console.log(err.name + ": " + err.message);
        }); 
    }
    render() {
      return (
          <div className="userBox">
            <video autoPlay={true} muted id="videoElement" controls={false}></video>
          </div>
      );
    }
  }