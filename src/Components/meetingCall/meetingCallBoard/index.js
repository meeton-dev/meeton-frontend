import React, { Component, Fragment } from 'react';
import Sketch from 'react-p5';

import Draggable, { DraggableCore } from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import { PDFtoIMG } from 'react-pdf-to-image';

import file from './sample.pdf';
import file2 from './101991730010-1323142094-ticket.pdf';

class MeetingCallBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      penWidth: 10,
      penColor: 'red',
      sizeOption: false,
      colorOption: false,
      drawingEnabled: false,
    };
    this.layers = [];
    this.boardRef = React.createRef();
  }

  componentDidMount() {
    const height = document.getElementsByClassName('callBoard-table')[0].offsetHeight;
    const width = document.getElementsByClassName('callBoard-table')[0].clientWidth;
    this.setState({ height, width });
    // console.log(height);
    // console.log(width);
  }

  setup = (p5, parent) => {
    // console.log(this.state);

    // p5.createCanvas(this.state.width, this.state.height).parent(parent);
    p5.createCanvas(450, 580).parent(parent);
    // socket.on('mouse', function(data){
    //   // console.log(data);
    //   // console.log(p5);

    //   p5.stroke(data.penColor);
    //   p5.strokeWeight(data.penWidth);
    //   p5.line(data.x, data.y, data.x2, data.y2);
    // });
  }

  startDraw = (p5) => {
    // console.log(p5.mouseX + ', ' + p5.mouseY);
    const dataSend = {
      x: p5.mouseX,
      y: p5.mouseY,
      x2: p5.pmouseX,
      y2: p5.pmouseY,
      penWidth: this.state.penWidth,
      penColor: this.state.penColor,
    };

    // send mouse position
    // socket.emit('mouse', dataSend);

    p5.stroke(this.state.penColor);
    p5.strokeWeight(this.state.penWidth);
    if (p5.mouseIsPressed === true && this.state.drawingEnabled) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
  }

  endDraw = (p5) => {
    // console.log('END: ', p5);
    // img.loadPixels();

    // this.layers.push(p5.canvas.toDataURL());
    // console.log( this.layers );
  }

  resizeCanvas = () => {
    console.log('a');
  }

  render() {
    // console.log(this.boardRef);
    const { sizeOption, colorOption, drawingEnabled } = this.state;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className="callBoard" ref={this.boardRef}>
        <div className="callBoard-header">
          <span onClick={() => this.setState({ drawingEnabled: drawingEnabled === false })}>
            Drawing:
            {' '}
            {drawingEnabled ? 'On' : 'Off'}
          </span>
        </div>
        <div className="callBoard-table">
          <div className="toolbar">
            <div className="toolbar-tools">
              <div className="size">
                <div className="label">
                  Size
                </div>
                <div className="option">
                  <div onClick={() => this.setState({ penWidth: 25 })} style={{ width: '25px', height: '25px' }}>width 25</div>
                  <div onClick={() => this.setState({ penWidth: 20 })} style={{ width: '20px', height: '20px' }}>width 20</div>
                  <div onClick={() => this.setState({ penWidth: 15 })} style={{ width: '15px', height: '15px' }}>width 15</div>
                  <div onClick={() => this.setState({ penWidth: 10 })} style={{ width: '10px', height: '10px' }}>width 10</div>
                  <div onClick={() => this.setState({ penWidth: 1 })} style={{ width: '1px', height: '1px' }}>width 1</div>
                </div>
              </div>
              <div className="color">
                <div className="label" onClick={() => this.setState({ colorOption: colorOption !== true })}>
                  Color
                </div>
                <div className="option">
                  <div onClick={() => this.setState({ penColor: '#dd0433' })} style={{ backgroundColor: '#dd0433' }}>red</div>
                  <div onClick={() => this.setState({ penColor: '#38d845' })} style={{ backgroundColor: '#38d845' }}>green</div>
                  <div onClick={() => this.setState({ penColor: '#ffae00' })} style={{ backgroundColor: '#ffae00' }}>yellow</div>
                  <div onClick={() => this.setState({ penColor: '#0084ff' })} style={{ backgroundColor: '#0084ff' }}>blue</div>
                  <div onClick={() => this.setState({ penColor: '#8f44e6' })} style={{ backgroundColor: '#8f44e6' }}>purple</div>
                </div>
              </div>
            </div>
          </div>

          <Draggable
            axis="both"
            bounds="parent"
            handle=".file-handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          >
            <div className="file">
              <div className="file-handle">sample.pdf</div>
              <div className="file-wrapper">
                <ResizableBox width={450} height={580} maxConstraints={[900, 1160]} lockAspectRatio resizeHandles={['se']}>
                  <Sketch
                    className="annotation-drawing"
                    setup={this.setup}
                    mouseDragged={this.startDraw}
                    mouseReleased={this.endDraw}
                  />
                  <PDFtoIMG file={file2}>
                    {({ pages }) => {
                      if (!pages.length) return 'Loading...';
                      return pages.map((page, index) => (index == 1 ? (
                        <div key={index} className="file-img">
                          <img src={page} />
                        </div>
                      ) : null));
                    }}
                  </PDFtoIMG>

                </ResizableBox>
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default MeetingCallBoard;
