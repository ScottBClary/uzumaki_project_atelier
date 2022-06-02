import React from 'react';

const Thumbnails = function ({ currentPhotos, photoInvalid }) {
  const photoList = currentPhotos.map((photo, index) =>
    <div key={index}>
      <img className='thumbnail' src={photo.url} alt={'image not loaded'} onError={photoInvalid}/>
    </div>
  );

  return (
    <div className='thumbnails'>
      {photoList}
    </div>
  );
};

export default Thumbnails;