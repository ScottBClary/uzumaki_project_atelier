
import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import StyleGalleryThumbnail from './StyleGalleryThumbnail.jsx';
import store from '../../redux.js';
import GalleryArrow from './GalleryArrow.jsx';
class StyleGallery extends React.Component {
  constructor(props) {
    super(props);
    //subscribe to store? yes to findout which indexes to display
    //no just dispatch what was clicked
    var theStore = store.getState();
    this.state = {
      selectedStyle: theStore.styleIndex,
      first: 0,
      selectedIndex: 0,
      max: theStore.productInfo.styles.length,
    };
    this.onClick = this.onClick.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onChange = this.onChange.bind(this);
    store.subscribe(this.onChange);
  }

  onClick(index) {

    this.setState({
      selectedIndex: index,
    });
    store.dispatch({type: 'changeStyleThumbnailIndex', value: index});
    //storedispatch(new selected index)
  }

  onMove(direction) {
    if (direction === 'left' && this.state.first > 0) {
      this.setState((oldState) => {
        return {
          selectedStyle: oldState.selectedStyle,
          first: (oldState.first - 1),
          selectedIndex: oldState.selectedIndex,
        };
      });
    } else {
      if (direction === 'right' && this.state.first < this.state.max - 4) {
        this.setState((oldState) => {
          return {
            selectedStyle: oldState.selectedStyle,
            first: (oldState.first + 1),
            selectedIndex: oldState.selectedIndex,
          };
        });
      }
    }
  }


  onChange() {
    //see if what style is
    var theStore = store.getState();
    var sIndex = theStore.styleIndex;
    if (sIndex !== this.state.selectedStyle) {
      this.setState({
        selectedStyle: sIndex,
        first: 0,
        selectedIndex: 0,
      });
    } else {
      if (theStore.styleThumbnailIndex !== this.state.selectedIndex) {
        this.setState((oldState) => {
          return {
            selectedStyle: oldState.selectedStyle,
            first: oldState.first,
            selectedIndex: theStore.styleThumbnailIndex,
          };
        });
      }
    }
  }

  renderThumbnails() {
    var ps = store.getState().productInfo.styles;
    var result = [];
    for (var i = this.state.first; i < (this.state.first + 4) && i < (this.state.max); i++) {
      result.push( <StyleGalleryThumbnail key = {i} index = {i} isSelected = {i === this.state.selectedIndex} image = {ps[this.state.selectedStyle].photos[i].thumbnail_url} handleClick = {this.onClick} ></StyleGalleryThumbnail>);
    }

    return result;
  }



  render() {
    return <div className = 'styleGallery'>
      <GalleryArrow className = 'galleryArrowRow' onClick = {this.onMove} direction = 'left'/>
      {this.renderThumbnails()}
      <GalleryArrow className = 'galleryArrowRow' onClick = {this.onMove} direction = 'right'/>

    </div>;
  }
}

export default StyleGallery;