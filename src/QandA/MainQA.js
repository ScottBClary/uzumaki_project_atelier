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
        <h1 className='header'>Questions and Answers</h1>
        <Search/>
        <OneQ/>
        <button>More Answered Questions</button>
        <button>Add Question</button>
      </div>
    );
  }
}

export default MainQA;