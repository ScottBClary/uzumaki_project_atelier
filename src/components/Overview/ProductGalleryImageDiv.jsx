
import React from 'react';
import GetZoom from './GetZoom.jsx';
//import Store from '../../redux.js';
class ProductGalleryImageDiv extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {


    return <GetZoom src = {this.props.src}></GetZoom>;
  }

  componentDidMount() {

  }


}


export default ProductGalleryImageDiv;