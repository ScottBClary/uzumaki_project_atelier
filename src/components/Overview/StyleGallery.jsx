
import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import StyleGalleryThumbnail from './StyleGalleryThumbnail.jsx';
class StyleGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'styleGallery'>
      <AiOutlineArrowLeft className = 'galleryArrowRow'/>
      <StyleGalleryThumbnail thumbnailIndex = {0} selected = {true}></StyleGalleryThumbnail>
      <StyleGalleryThumbnail thumbnailIndex = {1} selected = {false}></StyleGalleryThumbnail>
      <StyleGalleryThumbnail thumbnailIndex = {2} selected = {false}></StyleGalleryThumbnail>
      <StyleGalleryThumbnail thumbnailIndex = {3} selected = {false}></StyleGalleryThumbnail>
      <AiOutlineArrowRight className = 'galleryArrowRow'/>

    </div>;
  }
}

export default StyleGallery;