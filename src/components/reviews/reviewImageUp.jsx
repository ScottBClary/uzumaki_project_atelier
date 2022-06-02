import React from 'react';

export default function ImageCreate(props) {
  if (props.imgOpen !== true) {
    return (
      null
    );
  }
  return (
    <>
      <div className='overlay' />
      <div id='addRevImage' className='addRevImage' onClick={props.imgSub}>
        <input type='url' placeholder='IMG URL'></input>
        <button>Add Image</button>
        <button onClick={props.imgWindow}>Cancel</button>
      </div>
    </>
  );
}