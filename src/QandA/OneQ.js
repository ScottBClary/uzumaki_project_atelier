import React from 'react';
import OneA from './OneA.js';

class OneQ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='question'>
        <div className='question-text'>Q:</div>
        <div className='question-links'>
          <button className='question-help-link'>Helpful? Yes#</button>
          <button className='question-add-answer-link'>|  Add Answer</button>
        </div>
      </div>
    );
  }
}

export default OneQ;