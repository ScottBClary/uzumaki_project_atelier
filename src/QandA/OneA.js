import React from 'react';

class OneA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input placeholder={'A:'}></input>
        <span>by user, Month DD, YYYY</span>
        <span>Helpful? Yes#</span>
        <span>Report or Reported</span>
        <button>See More Answers or Collapse Answers</button>
      </div>
    );
  }
}

export default OneA;