import React from 'react';

class ZoomFoo extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return <div className = 'zoomedPictureDiv' ref = {this.props.staticRef}>
      <img id = 'zoomId' src = {this.props.src} className = 'expandedImage' onClick = {(e) => { this.props.clicker(e); this.props.handleMouseMove(e); }} onMouseMove = {this.props.handleMouseMove} ></img>
      <img src = {this.props.src} className = 'zoomedPicture' onClick = {this.props.clicker} ref = {this.props.theRef}></img>
    </div>;






    // <img src = {this.props.src} className = 'zoomedPicture' onClick = {this.props.handleClick} ref = {this.props.theRef}></img>;
  }

  componentDidMount() {
    this.props.setXY();
  }

}


export default ZoomFoo;