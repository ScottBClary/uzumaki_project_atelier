
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
      numberOfThumbnails: 7,
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
          max: oldState.max,
          numberOfThumbnails: oldState.numberOfThumbnails,
        };
      });
    } else {
      if (direction === 'right' && (this.state.first + this.state.numberOfThumbnails) < (this.state.max)) {
        this.setState((oldState) => {
          return {
            selectedStyle: oldState.selectedStyle,
            first: (oldState.first + 1),
            selectedIndex: oldState.selectedIndex,
            max: oldState.max,
            numberOfThumbnails: oldState.numberOfThumbnails,
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
      this.setState((oldState) => {
        return {
          selectedStyle: sIndex,
          first: 0,
          selectedIndex: 0,
          max: oldState.max,
          numberOfThumbnails: oldState.numberOfThumbnails,
        };
      });
    } else {
      if (theStore.styleThumbnailIndex !== this.state.selectedIndex) {
        this.setState((oldState) => {
          return {
            selectedStyle: oldState.selectedStyle,
            first: oldState.first,
            selectedIndex: theStore.styleThumbnailIndex,
            max: oldState.max,
            numberOfThumbnails: oldState.numberOfThumbnails,
          };
        });
      }
    }
  }

  renderThumbnails() {
    var ps = store.getState().productInfo.styles;
    var result = [];
    for (var i = this.state.first; i < (this.state.first + this.state.numberOfThumbnails) && i < (this.state.max); i++) {
      result.push( <StyleGalleryThumbnail key = {i} index = {i} isSelected = {i === this.state.selectedIndex} image = {ps[this.state.selectedStyle].photos[i].thumbnail_url} handleClick = {this.onClick} ></StyleGalleryThumbnail>);
    }
    return result;
  }

  renderIcons() {
    var ps = store.getState().productInfo.styles;
    var result = [];
    for (var i = 0; i < (this.state.max); i++) {
      result.push( <StyleGalleryThumbnail key = {i} index = {i} isSelected = {i === this.state.selectedIndex} image = {ps[this.state.selectedStyle].photos[i].thumbnail_url} handleClick = {this.onClick} isIcon = {true}></StyleGalleryThumbnail>);
    }
    return result;
  }


  render() {
    var theClassName;
    if (this.props.view === 'expanded') {
      theClassName = 'expandedStyleGallery';
    } else {
      theClassName = 'styleGallery';
    }
    var hideRight = 'visible';
    var hideLeft = 'visible';
    if (this.state.first === 0) {
      hideLeft = 'hidden';
    }
    if (this.state.first >= (this.state.max - this.state.numberOfThumbnails)) {
      hideRight = 'hidden';
    }

    if (theClassName === 'expandedStyleGallery') {
      return <div className = {theClassName}>
        {this.renderIcons()}
      </div>;
    }

    return <div className = {theClassName}>
      {<GalleryArrow className = 'galleryArrowRow' onClick = {this.onMove} direction = 'left' visibility = {hideLeft}/>}
      {this.renderThumbnails()}
      {<GalleryArrow className = 'galleryArrowRow' onClick = {this.onMove} direction = 'right' visibility = {hideRight}/>}

    </div>;
  }
}

export default StyleGallery;