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
    this.state.theRef.current.style.width = '100%';
    this.state.theRef.current.style.height = '100%';
    // this.state.theRef.current.style.left = '0px';
    // this.state.theRef.current.style.top = '0px';
    this.state.theRef.current.style.position = 'relative';
  }

  clicker() {
    // this.state.theRef.current.
    var parent = this.state.theRef.current.parentElement;
    if (this.state.theRef.current.iszoomed === 'false') {
      this.state.theRef.current.iszoomed = 'true';
      this.state.theRef.current.style.position = 'relative';
      //this.state.theRef.current.style.left = '200px';
    } else {
      this.state.theRef.current.iszoomed = 'false';
      this.setDefault();
    }
    console.log(this.state.theRef.current.iszoomed);

  }

  mouseEnter() {

  }

  mouseMove(e) {
    if (this.state.theRef.current.iszoomed === 'true') {
      this.state.theRef.current.style.width = '200%';
      this.state.theRef.current.style.height = '200%';
    }
    var parent = this.state.theRef.current.parentElement;
    console.log('clientX is ' + e.clientX);
    if (this.state.theRef.current.iszoomed === 'true') {
      this.state.theRef.current.style.left = (e.clientX - this.state.theRef.current.x) + 'px';
    }
    console.log(parent.offsetLeft);
  }
  mouseLeaveFunc() {
    // if (this.state.theRef.current.iszoomed === 'false') {
    //   this.state.theRef.current.style.width = '100%';
    //   this.state.theRef.current.style.height = '100%';
    // }
    //console.log('left');
  }
  // onMouseMove = {this.mouseMove}


  render() {
    return <div className = 'productGalleryImageDiv' ref = {this.state.parentRef}><img src = {this.props.src} ref = {this.state.theRef} onClick = {this.clicker} onMouseMove = {(e) => { this.mouseMove(e);} } onMouseOut = {this.mouseLeaveFunc}></img></div>;
  }

}





export default GetZoom;