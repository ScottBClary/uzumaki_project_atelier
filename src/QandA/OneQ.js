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
        <div className='question-text'>Q: {this.props.question.question_body}</div>
        <div className='question-links'>
          <button className='question-help-link'>Helpful? Yes {this.props.question.question_helpfulness}</button>
          {this.state.answerModalOpened ? <AddAModal closeAnswerModal={this.openAnswerModal} questionId={this.props.question.question_id}/> : null}
          <button className='question-add-answer-link' onClick={this.openAnswerModal}>|  Add Answer</button>
        </div>
      </div>
    );
  }
}

export default OneQ;