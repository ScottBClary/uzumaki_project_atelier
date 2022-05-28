import React from 'react';
import AddAModal from './AddAModal.js';

class OneQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerModalOpened: false,
    };
    this.openAnswerModal = this.openAnswerModal.bind(this);
  }

  openAnswerModal() {
    this.setState({
      answerModalOpened: !this.state.answerModalOpened
    });
  }

  render() {
    return (
      <div className='question'>
        <div className='question-text'>Q: {this.props.question} </div>
        <div className='question-links'>
          <button className='question-help-link'>Helpful? Yes#</button>
          {this.state.answerModalOpened ? <AddAModal closeAnswerModal={this.openAnswerModal}/> : null}
          <button className='question-add-answer-link' onClick={this.openAnswerModal}>|  Add Answer</button>
          {/* {this.state.answerModalOpened ? <AddAModal/> : null} */}
        </div>
      </div>
    );
  }
}

export default OneQ;