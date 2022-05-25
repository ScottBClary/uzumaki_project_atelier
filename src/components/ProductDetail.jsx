//
//sdf
import React from 'react';
import ProductDescription from './ProductDescription.jsx';
import ProductGallery from './ProductGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropdownContainer from './DropdownContainer.jsx';
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'productDetail'>
      <ProductGallery/>
      <div className = 'groupDiv'>
        <ProductDescription/>
        <StyleSelector/>
        <DropdownContainer/>
      </div>

    </div>;
  }
}

export default ProductDetail;