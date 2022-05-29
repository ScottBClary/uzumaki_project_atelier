
import React from 'react';
import Style from './Style.jsx';
import store from '../../redux.js';
import { useSelector, useDispatch } from '@reduxjs/toolkit';
class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.getStylesWithIndex = this.getStylesWithIndex.bind(this);
  }

  getStylesWithIndex() {
    var result = [];
    var styles = store.getState().productInfo.styles;
    for (var i = 0; i < styles.length; i++) {
      result.push(<Style style = {styles[i]} index = {i} key = {i}></Style>);
    }
    return result;
  }

  render() {
    return <div className = 'styleSelector'>
      {this.getStylesWithIndex()}
    </div>;
  }
}

export default StyleSelector;