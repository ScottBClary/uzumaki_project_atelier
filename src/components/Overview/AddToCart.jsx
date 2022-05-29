import React from 'react';
import Store from '../../redux.js';
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'addToCart'>
      <button>Add to Cart</button>
    </div>;
  }
}

export default AddToCart;