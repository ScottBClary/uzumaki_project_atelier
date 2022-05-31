
import React from 'react';
import AddToCart from './AddToCart.jsx';
import SizeDropdown from './SizeDropdown.jsx';
var DropdownContainer = function (props) {

  console.log('ran with ' + props.skus);
  var skusAsArray = function(skus) {
    return Object.keys(skus);
  };

  return (
    <div className = 'dropdownContainer'>
      <SizeDropdown skus = {props.skus} key = {Object.keys(props.skus)} gSku = {props.gSku}/>
      <AddToCart key = 'addToCartKey'/>
    </div>
  );
};

export default DropdownContainer;