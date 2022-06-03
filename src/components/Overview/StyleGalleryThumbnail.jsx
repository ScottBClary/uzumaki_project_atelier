
import React from 'react';
import {BsCircle, BsCheckCircle} from 'react-icons/bs';
var StyleGalleryThumbnail = function (props) {
  if (props.isIcon) {
    if (!props.isSelected) {
      return <div className = 'styleGalleryIcon' onClick = {() => { props.handleClick(props.index); }}>
        <BsCircle></BsCircle>
      </div>;
    } else {
      return <div className = 'styleGalleryIcon' onClick = {() => { props.handleClick(props.index); }}>
        <BsCheckCircle></BsCheckCircle>
      </div>;
    }
  } else {
    if (!props.isSelected) {
      return <div className = 'styleGalleryThumbnail'>
        <img className = 'resizableImage' src = {props.image} onClick = {() => { props.handleClick(props.index); }}></img>
      </div>;
    } else {
      return <div className = 'styleGalleryThumbnailSelected'>
        <img className = 'resizableImage' src = {props.image} onClick = {() => { props.handleClick(props.index); }}></img>
      </div>;
    }
  }
};
// this.state = {
//   thumbnailIndex: this.props.thumbnailIndex,
//   selected: false,
// };

// this.handleChange = this.handleChange.bind(this);
// this.handleClick = this.handleClick.bind(this);
// this.checkIfSelected = this.checkIfSelected.bind(this);
// store.subscribe(this.handleChange);


// checkIfSelected() {
//   if (store.getState().styleThumbnailIndex === this.state.thumbnailIndex) {
//     return true;
//   } else {
//     return false;
//   }
// }

// handleChange() {

//   if (this.checkIfSelected()) {
//     this.setState((oldState) => {
//       var newState = Object.assign(oldState);
//       newState.selected = true;
//       return newState;
//     });
//   } else {
//     this.setState((oldState) => {
//       var newState = Object.assign(oldState);
//       newState.selected = false;
//       return newState;
//     });
//   }
// }

// handleClick() {
//   store.dispatch({type: 'changeStyleThumbnailIndex', value: this.state.thumbnailIndex});
// }



// var currentStore = store.getState();
// var style = currentStore.productInfo.styles[currentStore.styleIndex];
// if (!this.state.selected) {
//   return <div className = 'styleGalleryThumbnail' onClick = {this.handleClick}>

//     <img className = 'resizableImage' src = {style.photos[this.state.thumbnailIndex].thumbnail_url} onClick = {this.handleClick}></img>
//   </div>;
// } else {
//   return <div className = 'styleGalleryThumbnailSelected' onClick = {this.handleClick}>
//     <p className = 'thumbnailFloatingCheck'>✅</p>
//     <img className = 'resizableImage' src = {style.photos[this.state.thumbnailIndex].thumbnail_url} onClick = {this.handleClick}></img>
//   </div>;
// }



export default StyleGalleryThumbnail;