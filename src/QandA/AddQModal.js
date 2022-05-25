import React from 'react';
// import axios from 'axios';

class AddQModal extends React.Component {
  constructor(props) {
    super(props);

    // this.addQuestion = this.addQuestion.bind(this);
  }

  // addQuestion() {
  //   axios.post('/qa/questions', {})
  //     .then((response) => {
  //       console.log(response, 'response');
  //     })
  //     .catch((error) => {
  //       console.log(error, 'error');
  //     });
  // }
  render() {
    return (
      <div className="question-modal">
        <div className='question-modal-close' onClick={this.props.closeQuestionModal}>x</div>
        <h3 className='add-question-titles'>ASK YOUR QUESTION</h3>
        <h3 className='add-question-titles'>ABOUT THE -PRODUCT NAME-</h3>
        <h3 className='add-question-titles'>Your Question* 1000 chars</h3>
        <textarea className='add-question-text'></textarea>
        <h3 className='add-question-titles'>Nickname* 60 chars</h3>
        <input className='add-question-username' placeholder={'Example:jackson11!'}></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3 className='add-question-titles'>Email* 60 chars</h3>
        <input className='add-question-email' placeholder={'Example: jack@email.com'}></input>
        <span>For authentication reasons, you will be not be emailed</span>
        <button className='submit-question-button' onClick={this.props.closeQuestionModal}>SUBMIT</button>
      </div>
    );
  }
}

export default AddQModal;