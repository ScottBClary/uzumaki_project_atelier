import React from 'react';
import OneA from './OneA.js';

class OneQ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='question'>
        <p className='question-text'>Q:</p>
        <div className='question-links'>
          <span className='question-help-link'>Helpful? Yes#</span>
          <span className='question-add-answer-link'>Add Answer</span>
        </div>
      </div>
    );
  }
}

export default OneQ;