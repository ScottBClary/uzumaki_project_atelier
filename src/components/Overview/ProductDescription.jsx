
import React from 'react';
import Store from '../../redux.js';
class ProductDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: props.desc,
    };
  }

  render() {
    return <div className = 'productDescription'> <div>{this.state.desc}</div> </div>;
  }
}

export default ProductDescription;