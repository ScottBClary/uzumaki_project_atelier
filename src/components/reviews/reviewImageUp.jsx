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
      <form id='addRevImage' className='addRevImage' onSubmit={props.imgSub}>
        <input required type='url' placeholder='IMG URL'></input>
        <button type='submit'>Add Image</button>
        <button onClick={props.imgWindow}>Cancel</button>
      </form>
    </>
  );
}