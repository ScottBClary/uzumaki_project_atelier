import { configureStore } from '@reduxjs/toolkit';
var initialState = {
  productInfo: undefined,
  styleIndex: 0,
  styleThumbnailIndex: 0,
};
var reducer = function(state = initialState, action) {

  var newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
  case 'changeCurrentProduct' :
    newState.productInfo = action.value;
    newState.styleIndex = 0;
    newState.styleThumbnailIndex = 0;
    break;
  case 'changeStyleIndex' :
    newState.styleIndex = action.value;
    newState.styleThumbnailIndex = 0;
    break;
  case 'changeStyleThumbnailIndex' :
    newState.styleThumbnailIndex = action.value;
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
        'thumbnail_url'
        'url'
        ]
      skus: [{'2390387': {
          'quantity': 8,
          'size': 'XS'
        }]
    }]
*/