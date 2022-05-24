import React from 'react';
import OneA from './OneA.js';

class OneQ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input placeholder={'Q:'}></input>
        <span>Helpful? Yes#</span>
        <span>Add Answer</span>
        <OneA/>
      </div>
    );
  }
}

export default OneQ;