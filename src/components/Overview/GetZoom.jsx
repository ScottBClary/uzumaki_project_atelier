/*

  This function takes in a displayed image source, and binds some functions to an image element.

*/
import React from 'react';

class GetZoom extends React.Component {

  constructor(props) {
    super(props);
    this.mouseMove = this.mouseMove.bind(this);
    this.mouseLeaveFunc = this.mouseLeaveFunc.bind(this);
    this.clicker = this.clicker.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.setDefault = this.setDefault.bind(this);
    this.state = {
      theRef: React.createRef(),
      parentRef: React.createRef(),
    };
  }

  setDefault() {
    console.log('setting default');
    this.state.theRef.current.style.position = 'relative';
    this.state.theRef.current.style.width = 'auto';
    this.state.theRef.current.style.height = 'auto';
    this.state.theRef.current.style.left = '0px';
    this.state.theRef.current.style.top = '0px';
    this.state.theRef.current.iszoomed = 'false';
    this.state.parentRef.current.style.height = '100%';
    this.state.parentRef.current.style.width = '100%';
    this.state.parentRef.current.style.overflow = 'hidden';
    this.state.parentRef.current.style.position = 'relative';
    this.state.parentRef.current.style['justify-content'] = 'center';
    this.state.parentRef.current.style.display = 'flex';
    this.state.theRef.current.style.cursor = 'url(https://www.shareicon.net/data/16x16/2015/10/01/649490_add_512x512.png), auto';

    // width: 100%;
    // overflow: hidden;
    // position: relative;
    // justify-content: center;
    // display: flex;

  }

  clicker(e) {
    // this.state.theRef.current.


    if (this.state.theRef.current.iszoomed === 'false') {
      this.state.theRef.current.iszoomed = 'true';
      this.state.theRef.current.style.height = '250%';
      this.state.theRef.current.style.position = 'absolute';
      var parent = this.state.theRef.current.parentElement;
      var parentHeight = parent.offsetHeight;
      var parentLeft = parent.offsetLeft;
      var parentWidth = parent.offsetWidth;
      var parentTop = parent.parentElement.offsetTop;
      var percentX = ((e.clientX - parentLeft) / parentWidth);
      var percentY = ((e.clientY - parentTop) / parentHeight);
      var widthDiff = this.state.theRef.current.offsetWidth - parentWidth;
      var heightDiff = this.state.theRef.current.offsetHeight - parentHeight;
      var moveLeft = 0 - (percentX * widthDiff);
      var moveTop = 0 - (percentY * heightDiff);
      // this.state.theRef.current.style.left = 0 - (moveLeft - parentLeft) + 'px';
      // this.state.theRef.current.style.top = 0 - (moveTop - parentTop) + 'px';
      this.state.theRef.current.style.left = moveLeft + 'px';
      this.state.theRef.current.style.top = moveTop + 'px';
      this.state.theRef.current.style.cursor = 'url(https://www.shareicon.net/data/16x16/2015/08/25/90542_minus_512x512.png), auto';
      //this.state.theRef.current.style.left = '200px';
    } else {
      this.setDefault();
    }
    console.log(this.state.theRef.current.iszoomed);

  }

  mouseEnter() {

  }

  mouseMove(e) {
    // if (this.state.theRef.current.iszoomed === 'true') {
    //   this.state.theRef.current.style.width = 'auto';
    //   this.state.theRef.current.style.height = 'auto';
    // }

    var parent = this.state.theRef.current.parentElement;
    var parentHeight = parent.offsetHeight;
    var parentLeft = parent.offsetLeft;
    var parentWidth = parent.offsetWidth;
    var parentTop = parent.parentElement.offsetTop;
    var percentX = ((e.clientX - parentLeft) / parentWidth);
    var percentY = ((e.clientY - parentTop) / parentHeight);
    var widthDiff = this.state.theRef.current.offsetWidth - parentWidth;
    var heightDiff = this.state.theRef.current.offsetHeight - parentHeight;
    var moveLeft = 0 - (percentX * widthDiff);
    var moveTop = 0 - (percentY * heightDiff);
    console.log(percentX);
    console.log(percentY);
    console.log('clientX is ' + e.clientX);
    if (this.state.theRef.current.iszoomed === 'true') {
      this.state.theRef.current.style.left = moveLeft + 'px';
      this.state.theRef.current.style.top = moveTop + 'px';
    }
    console.log(parent.offsetLeft);
  }
  mouseLeaveFunc() {
    console.log('mouse out');
    this.setDefault();
    //console.log('left');
  }
  // onMouseMove = {this.mouseMove}


  render() {
    return <div className = 'productGalleryImageDiv' ref = {this.state.parentRef} onMouseMove = {(e) => { this.mouseMove(e);}} onMouseLeave = {this.mouseLeaveFunc}><img src = {this.props.src} ref = {this.state.theRef} onClick = {this.clicker} ></img></div>;
  }
  componentDidMount() {
    console.log('component mounted');
    this.setDefault();
  }

}





export default GetZoom;