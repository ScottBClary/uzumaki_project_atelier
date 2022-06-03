import React from 'react';

var PriceLabel = function(props) {
  var result = [];


  if (props.sale_price !== null) {

    result.push(<div style={{ textDecorationLine: 'line-through', color: 'red' }}>{props.original_price}</div>);
    result.push(<div >{props.sale_price}</div>);
  } else {
    result.push(<div style={{ visibility: 'hidden' }}> Unseen text </div>);
    result.push(<div>{props.original_price}</div>);
  }

  return result;
};

export default PriceLabel;