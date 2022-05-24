import React from 'react';

class OneA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='answer'>
        <p>A:</p>
        <span>by user, Month DD, YYYY</span>
        <span className='answer-link'>Helpful? Yes#</span>
        <span className='answer-link'>Report or Reported</span>
        <button>See More Answers or Collapse Answers</button>
      </div>
    );
  }
}

export default OneA;