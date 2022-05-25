import React from 'react';
import OneQ from './OneQ.js';

class QList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <OneQ/>
      </div>
    );
  }
}

export default QList;