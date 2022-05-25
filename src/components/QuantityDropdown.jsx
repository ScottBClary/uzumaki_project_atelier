
import React from 'react';

class QuantityDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'quantityDropdown'>
      <select>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
      </select>
    </div>;
  }
}

export default QuantityDropdown;





