import React from 'react';
import AddAModal from './AddAModal.js';
import axios from 'axios';

class OneQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answerModalOpened: false,
      help: this.props.question.question_helpfulness,
      addedHelp: false

    };
    this.openAnswerModal = this.openAnswerModal.bind(this);
    this.addHelp = this.addHelp.bind(this);
  }

  openAnswerModal() {
    this.setState({
      answerModalOpened: !this.state.answerModalOpened
    });
  }

  addHelp() {
    if (!this.state.addedHelp) {
      this.setState((prevState) => ({
        help: prevState.help + 1,
        addedHelp: !this.state.addedHelp
      }));
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${this.props.question.question_id}/helpful`,
        {helpfulness: this.state.help},
        {
          params: {'answer_id': this.props.question.question_id},
          headers: {'Authorization': process.env.API_TOKEN}
        }
      )
        .then((response) => {
          console.log(response, 'response');
        })
        .catch((error) => {
          console.log(error, 'error');
        });
    }
  }

  render() {

    return (
      <div className='question'>
        <div className='question-text'>Q: {this.props.question.question_body}</div>
        <div className='question-links'>
          <button className='question-help-link' onClick={this.addHelp}>Helpful? Yes {this.state.help}</button>
          {this.state.answerModalOpened ? <AddAModal closeAnswerModal={this.openAnswerModal} questionId={this.props.question.question_id}/> : null}
          <button className='question-add-answer-link' onClick={this.openAnswerModal}>|  Add Answer</button>
        </div>
      </div>
    );
  }
}

export default OneQ;