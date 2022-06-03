
import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

var GalleryArrow = function(props) {
  //props.direction
  //props.onclick


  if (props.direction === 'left') {
    return <AiOutlineArrowLeft className = 'galleryArrow' onClick = {() => { props.onClick('left'); }} visibility = {props.visibility}/>;
  } else {
    return <AiOutlineArrowRight className = 'galleryArrow' onClick = {() => { props.onClick('right'); }} visibility = {props.visibility}/>;
  }

};

export default GalleryArrow;