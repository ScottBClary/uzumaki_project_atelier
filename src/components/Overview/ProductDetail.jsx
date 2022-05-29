//
//sdf
import React from 'react';
import ProductDescription from './ProductDescription.jsx';
import ProductGallery from './ProductGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import DropdownContainer from './DropdownContainer.jsx';
import GalleryArrow from './GalleryArrow.jsx';
import StyleGallery from './StyleGallery.jsx';
import store from '../../redux.js';
class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    store.dispatch({type: 'changeCurrentProduct', value: this.props.product});
  }

  render() {
    return <div className = 'productDetail'>
      <div className = 'groupDivLeft'>
        <StyleGallery></StyleGallery>


        <ProductGallery/>


      </div>
      <div className = 'groupDivRight'>
        <ProductDescription/>
        <StyleSelector styles = {[]}>

        </StyleSelector>
        <DropdownContainer/>
      </div>

    </div>;
  }
}

export default ProductDetail;