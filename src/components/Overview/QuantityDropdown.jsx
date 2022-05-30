
import React from 'react';
import store from '../../redux.js';
var QuantityDropdown = function(props) {

  var getOptions = function() {
    if (props.sku === undefined) {
      return;
    }
    var result = [];

    for (var i = 1; i <= 15 && i <= props.sku.info.quantity; i++) {
      result.push(<option value={i} key={props.sku.id + props.sku.info.size + i}>{i}</option>);
    }
    return result;
  };
  var end = getOptions();
  return <div className = 'quantityDropdown'>
    <div>Quantity</div>
    <select onChange={(e) => {
      store.dispatch({type: 'changeQuantity', value: e.target.value});
    }}>
      {end}

    </select>
  </div>;

};

export default QuantityDropdown;





