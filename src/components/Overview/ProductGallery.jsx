
import React from 'react';
import store from '../../redux.js';
import GalleryArrow from './GalleryArrow.jsx';
class ProductGallery extends React.Component {
  constructor(props) {
    super(props);
    var theStore = store.getState();

    this.state = {
      currentIndex: theStore.styleThumbnailIndex,
      currentPicture: theStore.productInfo.styles[theStore.styleIndex].photos[theStore.styleThumbnailIndex].url,
      max: theStore.productInfo.styles[theStore.styleIndex].photos.length,

    };
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

  render() {
    var hideRight = false;
    var hideLeft = false;
    if (this.state.currentIndex === 0) {
      hideLeft = true;
    }
    if (this.state.currentIndex === (this.state.max - 1)) {
      hideRight = true;
    }
    return <div className = 'productGallery'>
      <div className = 'galleryDiv'>
        {!hideLeft && <GalleryArrow direction = 'left' onClick = {this.onClick}></GalleryArrow>}
      </div>
      <img src = {this.state.currentPicture} className = 'resizableImage'></img>
      <div className = 'galleryDiv'>
        {!hideRight && <GalleryArrow direction = 'right' onClick = {this.onClick}></GalleryArrow>}
      </div>
    </div>;
  }
}

export default ProductGallery;