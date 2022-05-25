
import React from 'react';

class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'productGallery'> This is the product gallery component
      <img src = 'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483960103?b=1&k=20&m=483960103&s=170667a&w=0&h=hNKNseCmaThTsh4i7Q3kHETlWo5Zi7Ogw-luVozfP_M='></img>
    </div>;
  }
}

export default ProductGallery;