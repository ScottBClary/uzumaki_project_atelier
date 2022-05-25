
import React from 'react';
import Style from './Style.jsx';
class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className = 'styleSelector'> This is the style selector component
      <Style/>
    </div>;
  }
}

export default StyleSelector;