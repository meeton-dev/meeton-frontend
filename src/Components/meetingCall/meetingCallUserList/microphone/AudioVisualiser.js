import React, { Component } from 'react';

class AudioVisualiser extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidUpdate() {
    this.draw();
  }

  draw() {
    const { audioData } = this.props;
    const canvas = this.canvas.current;
    const height = canvas.height;
    const width = canvas.width;
    
    const center_x = canvas.height / 2;
    const center_y = canvas.width / 2;
    const radius = 30;

    const context = canvas.getContext('2d');
    let x = 0;
    const sliceWidth = (width * 2.0) / audioData.length;

    context.lineWidth = 2;
    context.strokeStyle = '#0084ff';
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(0, height / 2);
    for (const item of audioData) {
      const y = (item / 255.0) * height;
      context.lineTo(x, y);
      x += sliceWidth;
    }
    context.lineTo(x, height / 2);
    context.stroke();

    // const bars = 200;
    // const bar_width = 1;

    // context.beginPath();
    // // context.arc(x, y, r, sAngle, eAngle,counterclockwise);

    // context.arc(center_x, center_y, radius, 0, 0, 2 * Math.PI);
    // context.stroke();

    // for(var i = 0; i < bars; i++){
        
    //   //divide a circle into equal parts
    //   const rads = Math.PI * 2 / bars;
      
    //   const bar_height = audioData[i] * 1;
      
    //   // set coordinates
    //   const x = center_x + Math.cos(rads * i) * (radius);
    //   const y = center_y + Math.sin(rads * i) * (radius);
    //   const x_end = center_x + Math.cos(rads * i) * (radius + bar_height * .5);
    //   const y_end = center_y + Math.sin(rads * i) * (radius + bar_height * .5);
      
    //   //draw a bar
    //   drawBar(x, y, x_end, y_end, bar_width,audioData[i]);
  
    // }

  //   function drawBar(x1, y1, x2, y2, width,frequency){
    
  //     var lineColor = "rgb(" + frequency * 2 + ", " + frequency / 2 + ", " + frequency + ")";
      
  //     context.strokeStyle = lineColor;
  //     context.lineWidth = width;
  //     context.beginPath();
  //     context.moveTo(x1,y1);
  //     context.lineTo(x2,y2);
  //     context.stroke();
  // }

  }

  render() {
    return <canvas width="200" height="200" ref={this.canvas} />;
  }
}

export default AudioVisualiser;