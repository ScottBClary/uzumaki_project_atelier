
import React from 'react';
import store from '../../redux.js';
import GalleryArrow from './GalleryArrow.jsx';
import {AiOutlineFullscreenExit} from 'react-icons/ai';
import ZoomedImage from './ZoomedImage.jsx';
import ProductGalleryImageDiv from './ProductGalleryImageDiv.jsx';
class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    var theStore = store.getState();

    this.state = {
      currentIndex: theStore.styleThumbnailIndex,
      currentPicture: theStore.productInfo.styles[theStore.styleIndex].photos[theStore.styleThumbnailIndex].url,
      max: theStore.productInfo.styles[theStore.styleIndex].photos.length,

    };
    this.renderExitFullscreenButton = this.renderExitFullscreenButton.bind(this);
    this.onClick = this.onClick.bind(this);
    this.hasChanged = this.hasChanged.bind(this);
    store.subscribe(this.hasChanged);
  }

  hasChanged() {

    var theStore = store.getState();
    this.setState({
      currentIndex: theStore.styleThumbnailIndex,
      currentPicture: theStore.productInfo.styles[theStore.styleIndex].photos[theStore.styleThumbnailIndex].url,
      max: theStore.productInfo.styles[theStore.styleIndex].photos.length,
    });
  }

  onClick(direction) {

    if (direction === 'right') {
      if (this.state.currentIndex < (this.state.max - 1)) {
        store.dispatch({type: 'changeStyleThumbnailIndex', value: (this.state.currentIndex + 1)});
      }
    } else {

      if (this.state.currentIndex > 0) {
        store.dispatch({type: 'changeStyleThumbnailIndex', value: (this.state.currentIndex - 1)});
      }

    }
  }

  renderExitFullscreenButton() {
    return <div className = 'exitFullscreenButton'><AiOutlineFullscreenExit onClick = {() => { this.props.changeView('default'); }}/></div>;
  }

  render() {
    var hideRight = false;
    var hideLeft = false;
    if (this.state.currentIndex === 0) {
      hideLeft = true;
    }
    if (this.state.currentIndex === (this.state.max - 1)) {
      hideRight = true;
    }
    var theClassName;
    if (this.props.view === 'expanded') {
      theClassName = 'expandedProductGallery';
    } else {
      theClassName = 'productGallery';
    }
    return <div className = {theClassName}>
      <div className = 'galleryDiv'>
        {!hideLeft && <GalleryArrow direction = 'left' onClick = {this.onClick}></GalleryArrow>}
      </div>
      {theClassName === 'expandedProductGallery' && <ProductGalleryImageDiv src = {this.state.currentPicture} onClick = {() => { this.props.changeView('expanded'); }}></ProductGalleryImageDiv>}
      {theClassName === 'productGallery' && <img src = {this.state.currentPicture} className = 'resizableImage' onClick = {() => { this.props.changeView('expanded'); }}></img>}
      <div className = 'galleryDiv'>
        {!hideRight && <GalleryArrow direction = 'right' onClick = {this.onClick}></GalleryArrow>}
      </div>
      {theClassName === 'expandedProductGallery' && this.renderExitFullscreenButton()}
    </div>;
  }
}

export default ProductGallery;