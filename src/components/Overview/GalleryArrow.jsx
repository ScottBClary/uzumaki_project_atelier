
import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
class GalleryArrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: this.props.direction,
    };
  }

  render() {
    if (this.props.direction === 'left') {
      return <AiOutlineArrowLeft className = 'galleryArrow'/>;
    } else {
      return <AiOutlineArrowRight className = 'galleryArrow'/>;
    }
  }
}

export default GalleryArrow;