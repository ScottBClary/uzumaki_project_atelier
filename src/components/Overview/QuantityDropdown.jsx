
import React from 'react';

var QuantityDropdown = function(props) {

  var getOptions = function() {
    if (props.sku === undefined) {
      return;
    }
    var result = [];

    for (var i = 0; i <= 15 && i <= props.sku.info.quantity; i++) {
      result.push(<option value={i} key={props.sku.id + props.sku.info.size + i}>{i}</option>);
    }
    return result;
  };
  var end = getOptions();

  return <div className = 'quantityDropdown'>
    <div>Quantity</div>
    <select>
      {end}

    </select>
  </div>;

};

export default QuantityDropdown;





