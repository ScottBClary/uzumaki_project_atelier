import React from 'react';
import Search from './Search.js';
import OneQ from './OneQ.js';
import OneA from './OneA.js';
import QList from './QList';
import AddQModal from './AddQModal.js';
import '../QandAstyle.css';

class MainQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionModalOpened: false
    };
    this.openQuestionModal = this.openQuestionModal.bind(this);
  }
  openQuestionModal() {
    this.setState({
      questionModalOpened: !this.state.questionModalOpened
    });
    console.log('clicked');
  }
  render() {
    return (
      <div>
        <h2 className='header'>QUESTIONS AND ANSWERS</h2>
        <Search/>
        <QList className='qa-container'/>
        {/* <OneA/> */}
        {/* <button>More Answered Questions</button> */}
        {this.state.questionModalOpened ? <AddQModal closeQuestionModal={this.openQuestionModal}/> : null}
        <button className='add-question-button' onClick={this.openQuestionModal}>ADD QUESTION</button>
      </div>
    );
  }
}

export default MainQA;