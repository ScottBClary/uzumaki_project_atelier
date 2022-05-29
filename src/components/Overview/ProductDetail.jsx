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
    this.state = {
      product: props.product,
      currentStyleIndex: 0,
      currentStyle: {},
      currentSkus: [],
    };
    this.onChange = this.onChange.bind(this);
    store.subscribe(this.onChange);
  }

  onChange() {
    var theStore = store.getState();
    this.setState((oldState) => {
      return {
        product: theStore.productInfo,
        currentStyleIndex: theStore.styleIndex,
        currentStyle: theStore.productInfo.styles[theStore.styleIndex],
        currentSkus: theStore.productInfo.styles[theStore.styleIndex].skus,
      };
    });

  }

  changeView() {

  }

  render() {
    return <div className = 'productDetail'>
      <div className = 'groupDivLeft'>
        <StyleGallery></StyleGallery>


        <ProductGallery/>


      </div>
      <div className = 'groupDivRight'>
        <ProductDescription desc = {this.state.product.description || ''}></ProductDescription>
        <StyleSelector styles = {[]}>

        </StyleSelector>
        <DropdownContainer skus = {this.state.currentSkus}/>

      </div>

    </div>;
  }
}

export default ProductDetail;