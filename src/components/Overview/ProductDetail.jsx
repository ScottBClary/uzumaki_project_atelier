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
      view: 'default',
    };
    this.changeView = this.changeView.bind(this);
    this.onChange = this.onChange.bind(this);
    store.subscribe(this.onChange);
  }
  //This function will be called by cart,

  onChange() {
    var theStore = store.getState();
    this.setState((oldState) => {
      return {
        product: theStore.productInfo,
        currentStyleIndex: theStore.styleIndex,
        currentStyle: theStore.productInfo.styles[theStore.styleIndex],
        currentSkus: theStore.productInfo.styles[theStore.styleIndex].skus,
        view: oldState.view,
      };
    });

  }

  changeView(newView) {
    var theStore = store.getState();
    this.setState((oldState) => {
      return {
        product: theStore.productInfo,
        currentStyleIndex: theStore.styleIndex,
        currentStyle: theStore.productInfo.styles[theStore.styleIndex],
        currentSkus: theStore.productInfo.styles[theStore.styleIndex].skus,
        view: newView,
      };
    });
  }

  render() {

    if (this.state.view === 'default') {
      return <div className = 'productDetail'>

        <div className = 'groupDivLeft' style = {{width: '50%'}}>

          <StyleGallery view = {this.state.view} ></StyleGallery>
          <ProductGallery view = {this.state.view} changeView = {this.changeView}/>

        </div>


        <div className = 'groupDivRight'>
          <ProductDescription desc = {this.state.product.description || ''} ></ProductDescription>
          <StyleSelector styles = {[]}>
          </StyleSelector>
          <DropdownContainer skus = {this.state.currentSkus} key={Object.keys(this.state.currentSkus)}/>
        </div>


      </div>;
    }
    if (this.state.view === 'expanded') {
      return <div className = 'productDetail'>

        <div className = 'groupDivLeft' style = {{width: '100%'}}>

          <StyleGallery view = {this.state.view}></StyleGallery>
          <ProductGallery changeView = {this.changeView} view = {this.state.view}/>

        </div>

      </div>;
    }
  }
}

export default ProductDetail;