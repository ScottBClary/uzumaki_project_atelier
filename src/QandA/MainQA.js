import React from 'react';
import Search from './Search.js';
import OneQ from './OneQ.js';
import OneA from './OneA.js';
import '../QandAstyle.css';

class MainQA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2 className='header'>QUESTIONS AND ANSWERS</h2>
        <Search/>
        <div className='qa-container'>
          <OneQ/>
          {/* <OneA/> */}
        </div>
        {/* <button>More Answered Questions</button> */}
        {/* <button>Add Question</button> */}
      </div>
    );
  }
}

export default MainQA;