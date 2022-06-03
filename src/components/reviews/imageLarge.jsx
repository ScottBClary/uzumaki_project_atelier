import React from 'react';

export default function ImageLarge(props) {
  if (props.bigImgOpen !== true) {
    return (
      null
    );
  }

  return (
    <>
      <div onClick={props.closeImg} className='overlay'/>
      <div onClick={props.closeImg} id='bigRevImage' className='bigRevImage'>
        <img src={props.bigImage}></img>
      </div>
    </>
  );
}