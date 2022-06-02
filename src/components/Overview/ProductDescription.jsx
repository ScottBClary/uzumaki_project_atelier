
import React from 'react';
import store from '../../redux.js';
import StarRating from './StarRating.jsx';
import SocialMedia from './SocialMedia.jsx';
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: props.desc,
    };
  }

  render() {
    var theStore = store.getState();
    return <div className = 'productDescription'>
      <div className = 'productTitle'> {theStore.productInfo.name}</div>
      <div className = 'productCategory'> {theStore.productInfo.category}</div>
      <div>{this.state.desc}</div>
      <StarRating rating = {theStore.rating}></StarRating>
      <SocialMedia currentProduct = {theStore.productInfo.id}></SocialMedia>


    </div>;
  }
}

export default ProductDescription;