
import React from 'react';
import {Fragment} from 'react';
import QuantityDropdown from './QuantityDropdown.jsx';
import store from '../../redux.js';
import PriceLabel from './PriceLabel.jsx';
class SizeDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.skusAsArray = this.skusAsArray.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getErrorMessage = this.getErrorMessage.bind(this);
    this.state = {
      selectedIndex: 0,
      skus: props.skus,
      skusAsArray: this.skusAsArray(props.skus),
      sizeSelected: false,
      displayError: false,
    };
    store.subscribe(this.handleChange);
  }

  skusAsArray(skus = {}) {
    var keys = Object.keys(skus);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
      result.push({id: undefined, info: undefined});
      result[i].id = keys[i];
      result[i].info = skus[keys[i]];
      // Should make an array of skus [{id: 123 info: { x: y, z: w}}]
    }
    return result;
  }

  getOptions(skus = {}) {
    var keys = Object.keys(skus);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
      result.push({id: undefined, info: undefined});
      result[i].id = keys[i];
      result[i].info = skus[keys[i]];
      // Should make an array of skus [{id: 123 info: { x: y, z: w}}]
    }

    result = result.map((sku) => {
      if (sku.info.quantity === 0) {
        return;
      }
      var temp = <option sku={JSON.stringify(sku)} id={sku.id} key={sku.id}>{sku.info.size}</option>;
      return temp;
    });

    return result;
  }




  handleClick(e) {

    // var newSku = this.state.currentSkus[e.target.id];

    // this.setState((oldState) => {
    //   return {
    //     currentStyleIndex: oldState.currentStyleIndex,
    //     currentSkus: oldState.currentSkus,
    //     selectedSku: newSku,
    //   };
    // });
    store.dispatch({type: 'changeSku', value: this.state.skusAsArray[e.target.selectedIndex]});
    this.setState((oldState) => {

      return {selectedIndex: e.target.selectedIndex,
        skus: oldState.skus,
        skusAsArray: oldState.skusAsArray,
        sizeSelected: true,
        displayError: false,
      };
    });
  }

  handleChange() {
    var theStore = store.getState();
    if (theStore.tryingToBuy && !this.state.sizeSelected) {
      this.setState((oldState) => {

        return {
          selectedIndex: oldState.selectedIndex,
          skus: oldState.skus,
          skusAsArray: oldState.skusAsArray,
          sizeSelected: false,
          displayError: true,
        };
      });
    }

  }
  getErrorMessage() {
    var result = [];
    if (this.state.displayError) {
      result.push(<div className = 'errorMessageDiv' key = 'errorMessageKey'>Size<div className = 'pickSizeErrorMessage' style = {{color: 'red'}}>Please pick a size.</div></div>);
    } else {
      result.push(<div className = 'errorMessageDiv' key = 'errorMessageKey' >Size<div className = 'pickSizeErrorMessage' style = {{visibility: 'hidden'}}>Please pick a size.</div></div>);
    }

    return result;
  }
  render() {
    console.log('size dropdown rendered');
    return <div className = 'sizeDropdown'>
      <div className = 'sizeDropdownDiv'>
        {this.getErrorMessage()}
        <select onChange={this.handleClick} defaultValue = {'Select Size'}>
          <option value='Select Size' id ='default' key = {'someKey'}>Select Size</option>
          {this.getOptions(this.state.skus)}
        </select></div>
      <div className = 'priceDiv'>
        <PriceLabel price = {store.getState().productInfo.styles[store.getState().styleIndex].sale_price}/>
      </div>
      <QuantityDropdown sku = {this.state.skusAsArray[this.state.selectedIndex]} key='quantityDropdownKey'/>
    </div>;
  }


}

export default SizeDropdown;