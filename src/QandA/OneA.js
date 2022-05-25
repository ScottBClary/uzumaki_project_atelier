import React from 'react';

class OneA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='answer'>
        <p className='answer-text'>A:</p>
        <div className='answer-links'>
          <span className='answer-help-link'>Helpful? Yes#</span>
          <span className='answer-report-link'>Report or Reported</span>
        </div>
        <span className='answer-identifier'>by user, Month DD, YYYY</span>
        <button>See More Answers or Collapse Answers</button>
      </div>
    );
  }
}

export default OneA;