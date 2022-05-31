import React from 'react';
import ZoomFoo from './ZoomFoo.jsx';
class ZoomedImage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.setXY = this.setXY.bind(this);
    this.state = {
      src: props.src,
      className: 'resizableImage',
      isZoomed: false,
      ref: React.createRef(),
      refToStaticImage: React.createRef(),
      x: 0,
      y: 0,
    };


  }

  setXY() {

    var cursorXOffsetFromStaticImageCenter;
    var staticImageX = this.state.refToStaticImage.current.offsetLeft;
    var staticImageY = this.state.refToStaticImage.current.offsetTop;
    var staticImageHeight = this.state.refToStaticImage.current.offsetHeight;
    var staticImageWidth = this.state.refToStaticImage.current.offsetWidth;
    var movingImageHeight = this.state.ref.current.offsetHeight;
    var movingImageWidth = this.state.ref.current.offsetWidth;

    var centerOfStaticImageX = staticImageX + (staticImageWidth / 2);
    cursorXOffsetFromStaticImageCenter = this.state.x - centerOfStaticImageX;
    var movingImageCenterX = staticImageX - cursorXOffsetFromStaticImageCenter - (movingImageWidth / 2);
    // this.state.ref.current.style.left = cursorXOffsetFromStaticImageCenter + 'px';
    var ratioOfWidths = (movingImageWidth) / (staticImageWidth);
    // this.state.ref.current.style.left = (staticImageX - this.state.x) * (ratioOfWidths / staticImageWidth) + staticImageX + 'px';
    var percentMoved = (staticImageX - this.state.x) / staticImageWidth;
    var howMuchToMove = percentMoved * (movingImageWidth - staticImageWidth);
    this.state.ref.current.style.left = howMuchToMove + 'px';
    percentMoved = (staticImageY - this.state.y) / staticImageHeight;
    howMuchToMove = percentMoved * (movingImageHeight - staticImageHeight);
    this.state.ref.current.style.top = howMuchToMove + 'px';
  }

  handleClick(e) {

    this.setState((oldState) => {
      return {
        src: oldState.src,
        className: oldState.className,
        isZoomed: !oldState.isZoomed,
        ref: oldState.ref,
        refToStaticImage: oldState.refToStaticImage,
        x: e.clientX,
        y: e.clientY,
      };
    });
  }

  handleMouseMove(e) {

    var cursorXOffsetFromStaticImageCenter;
    var staticImageX = this.state.refToStaticImage.current.offsetLeft;
    var staticImageY = this.state.refToStaticImage.current.offsetTop;
    var staticImageHeight = this.state.refToStaticImage.current.offsetHeight;
    var staticImageWidth = this.state.refToStaticImage.current.offsetWidth;
    var movingImageHeight = this.state.ref.current.offsetHeight;
    var movingImageWidth = this.state.ref.current.offsetWidth;

    var yThing = this.state.refToStaticImage.current.offsetParent.offsetTop;

    var centerOfStaticImageX = staticImageX + (staticImageWidth / 2);
    cursorXOffsetFromStaticImageCenter = e.clientX - centerOfStaticImageX;
    var movingImageCenterX = staticImageX - cursorXOffsetFromStaticImageCenter - (movingImageWidth / 2);
    var ratioOfWidths = (movingImageWidth) / (staticImageWidth);
    var percentMoved = (staticImageX - e.clientX) / staticImageWidth;
    var howMuchToMove = percentMoved * (movingImageWidth - staticImageWidth);
    this.state.ref.current.style.left = howMuchToMove + 'px';
    percentMoved = (staticImageY - e.clientY) / staticImageHeight;
    howMuchToMove = percentMoved * (movingImageHeight - staticImageHeight);
    this.state.ref.current.style.top = howMuchToMove + yThing + 'px';
  }

  render() {

    if (this.state.isZoomed) {
      return <ZoomFoo src = {this.state.src} className = 'zoomedPicture' clicker = {this.handleClick} theRef = {this.state.ref} setXY = {this.setXY} staticRef = {this.state.refToStaticImage} handleMouseMove = {this.handleMouseMove}></ZoomFoo>;
    }
    return <img src = {this.state.src} className = {this.state.className} ref = {this.state.refToStaticImage} onClick = {this.handleClick}></img>;
  }

}


export default ZoomedImage;