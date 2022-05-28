import React from 'react';
import axios from 'axios';

class AddQModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      nickname: '',
      email: '',
      productId: 66642
    };

    this.addQuestion = this.addQuestion.bind(this);
    this.questionInput = this.questionInput.bind(this);
  }
  //if length of input is 0 then return message
  questionInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addQuestion() {
    console.log(this.state.question, this.state.nickname, this.state.email, this.state.productId);
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions',
      { body: {
        'body': this.state.question,
        'name': this.state.nickname,
        'email': this.state.email,
        'product_id': this.state.productId
      },
      headers: {
        'Authorization': process.env.API_TOKEN
      }
      }
    )
      .then((response) => {
        console.log(response, 'response');
      })
      .catch((error) => {
        console.log(error, 'error');
      });
  }
  render() {
    return (
      <div className="question-modal">
        <div className='question-modal-close' onClick={this.props.closeQuestionModal}>x</div>
        <h3 className='add-question-titles'>ASK YOUR QUESTION</h3>
        <h3 className='add-question-titles'>ABOUT THE -PRODUCT NAME-</h3>
        <h3 className='add-question-titles'>Your Question*</h3>
        <textarea className='add-question-text' maxLength={1000} name="question" onChange={(event, question) => this.questionInput(event, name)} ></textarea>
        <h3 className='add-question-titles'>Nickname*</h3>
        <input className='add-question-username' maxLength={60} placeholder={'Example:jackson11!'} name="nickname" onChange={(event, name) => this.questionInput(event, name)}></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3 className='add-question-titles'>Email*</h3>
        <input className='add-question-email' maxLength={60} placeholder={'Example: jack@email.com'} name="email" onChange={(event, name) => this.questionInput(event, name)}></input>
        <span>For authentication reasons, you will be not be emailed</span>
        <button className='submit-question-button' onClick={this.addQuestion}>SUBMIT</button>
      </div>
    );
  }
}

export default AddQModal;