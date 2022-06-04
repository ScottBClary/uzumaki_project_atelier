import { configureStore } from '@reduxjs/toolkit';
var initialState = {
  productInfo: undefined,
  styleIndex: 0,
  styleThumbnailIndex: 0,
  cart: [],
  sku: undefined,
  quantity: 1,
  tryingToBuy: false,
  rating: 0.46,
};
var reducer = function(state = initialState, action) {

  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
  case 'changeCurrentProduct' :
    newState.productInfo = action.value;
    newState.styleIndex = 0;
    newState.styleThumbnailIndex = 0;
    newState.quantity = 1;
    break;
  case 'changeStyleIndex' :
    newState.styleIndex = action.value;
    newState.styleThumbnailIndex = 0;
    newState.quantity = 1;
    break;
  case 'changeStyleThumbnailIndex' :
    newState.styleThumbnailIndex = action.value;
    break;
  case 'changeSku' :
    newState.sku = action.value;
    break;
  case 'changeQuantity' :
    newState.quantity = action.value;
    break;
  case 'addToCart' :
    newState.tryingToBuy = true;
    if (state.sku !== undefined && state.quantity !== 0) {
      newState.cart = JSON.parse(JSON.stringify(state.cart));
      newState.cart.push({id: state.sku.id, quantity: state.quantity});
    }
    break;
  }
  return newState;
};


var store = configureStore({
  reducer: reducer,
});

export default store;

//productInfo;
/*
  id
  campus
  name:
  slogan
  description
  category
  default_price
  created_at
  updated_at
  styles :[
    {
      style_id: number;
      'name': 'Dark Grey & Black',
      'original_price': '170.00',
      'sale_price': null,
      'default?': false,
      'photos': [
          {
            'thumbnail_url'
            'url'
          }
        ]
      skus: [
        { '2390387': {
          'quantity': 8,
          'size': 'XS'
        }
      ]
    }]
*/