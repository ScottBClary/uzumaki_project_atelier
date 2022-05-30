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
      currentStyle: props.product.styles[0],
      currentSkus: props.product.styles[0].skus,
      currentQuantity: 0,
      currentSku: undefined,
    };
    this.gSku = this.gSku.bind(this);
    this.onChange = this.onChange.bind(this);
    store.subscribe(this.onChange);
  }
  //This function will be called by cart,
  buy() {}
  gSku(quantity, theSku) {
    this.setState((oldState) => {
      return {
        product: oldState.product,
        currentStyleIndex: oldState.currentStyleIndex,
        currentStyle: oldState.currentStyle,
        currentSkus: oldState.currentSkus,
        currentQuantity: quantity,
        currentSku: theSku,
      };
    });

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
        <ProductDescription desc = {this.state.product.description || ''} ></ProductDescription>
        <StyleSelector styles = {[]}>

        </StyleSelector>
        <DropdownContainer skus = {this.state.currentSkus} key={this.state.currentSkus} gSku = {this.gSku}/>

      </div>

    </div>;
  }
}

export default ProductDetail;