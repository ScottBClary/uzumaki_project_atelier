
import React from 'react';
import QuantityDropdown from './QuantityDropdown.jsx';
import SizeDropdown from './SizeDropdown.jsx';
class DropdownContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'dropdownContainer'>
      <SizeDropdown/>
      <QuantityDropdown/>
    </div>;
  }
}

export default DropdownContainer;