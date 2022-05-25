
import React from 'react';
class Style extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.props.isSelected
    };
  }

  render() {
    return <div className = 'style'> This is the product gallery component </div>;
  }
}

export default Style;