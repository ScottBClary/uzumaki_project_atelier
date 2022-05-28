
import React from 'react';

class SizeDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'sizeDropdown'>
      <div>Size</div>
      <select>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
      </select>
    </div>;
  }
}

export default SizeDropdown;