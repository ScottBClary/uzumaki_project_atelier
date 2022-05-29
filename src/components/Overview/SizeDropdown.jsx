
import React from 'react';
import QuantityDropdown from './QuantityDropdown.jsx';
import store from '../../redux.js';
class SizeDropdown extends React.Component {

  constructor(props) {
    super(props);
    this.getOptions = this.getOptions.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.skusAsArray = this.skusAsArray.bind(this);
    this.state = {
      selectedIndex: 0,
      skus: props.skus,
      skusAsArray: this.skusAsArray(props.skus),
    };
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
      return <option sku={JSON.stringify(sku)} key={JSON.stringify(sku.id)}>{sku.info.size}</option>;
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
    this.setState((oldState) => {
      return {selectedIndex: e.target.selectedIndex,
        skus: oldState.skus,
        skusAsArray: oldState.skusAsArray};
    });

  }



  render() {
    console.log('size dropdown rendered');
    return <div className = 'sizeDropdown'>
      <div><div>Size</div>
        <select onChange={this.handleClick}>
          {this.getOptions(this.state.skus)}
        </select></div>
      <QuantityDropdown sku = {this.state.skusAsArray[this.state.selectedIndex]}/>
    </div>;
  }


}

export default SizeDropdown;