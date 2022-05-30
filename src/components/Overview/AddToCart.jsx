import React from 'react';
import store from '../../redux.js';
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'addToCart'>
      <button onClick = {() => {store.dispatch({type: 'addToCart', value: 1});}}>Add to Cart</button>
    </div>;
  }
}

export default AddToCart;