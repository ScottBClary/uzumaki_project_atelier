import React from 'react';
import OneQ from './OneQ';
import axios from 'axios';
import AddImageModal from './AddImageModal';
import Thumbnails from './Thumbnails';

class AddAModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: [
        {
          id: 0,
          url: '',
        }
      ],
      questionId: '',
      addingImage: false,
      photoNumber: 1,
      thumbnails: '',
      photoLoaded: true,
      inputsValid: true
    };
    this.answerInput = this.answerInput.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.addImage = this.addImage.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.invalidPhoto = this.invalidPhoto.bind(this);
  }

  invalidPhoto () {
    this.setState({
      photoLoaded: !this.state.photoLoaded
    });
  }

  answerInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
      questionId: this.props.questionId
    });
  }

  validateInputs() {
    var invalid = [];
    var alert = 'You must enter the following: ';

    if (this.state.answer === '') {
      invalid.push('answer');
    }
    if (this.state.nickname === '') {
      invalid.push('nickname');
    }
    if (this.state.email === '') {
      invalid.push('email');
    }
    if (this.state.email.length) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.state.email)) {
        invalid.push('correct email format');
      }
    }
    if (this.state.photoLoaded === false) {
      invalid.push('valid image upload');
    }
    if (invalid.length > 0) {
      this.setState({
        inputsValid: !this.state.inputsValid
      });
      for (var i = 0; i < invalid.length; i++) {
        alert += invalid[i] + ' / ';
      }
    }
    window.alert(alert);
    return;
  }

  addAnswer() {

    this.validateInputs();

    if (!this.state.inputsValid) {
      return;
    } else {
      axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${this.state.questionId}/answers`,
        {
          'body': this.state.answer,
          'name': this.state.nickname,
          'email': this.state.email,
          'photos': this.state.photos
        },
        {
          params: {'question_id': this.state.questionId},
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
    this.props.closeAnswerModal();
  }

  addImage() {
    this.setState({
      addingImage: !this.state.addingImage
    });
  }

  render() {
    return (
      <div className='answer-modal'>
        <div className='answer-modal-close' onClick={this.props.closeAnswerModal}>x</div>
        <h3 className='add-answer-titles'>Submit your Answer</h3>
        <h3 className='add-answer-titles'>Product Name: {this.props.question}</h3>
        <h3 className='add-answer-titles'>Your Answer*</h3>
        <textarea className='add-answer-text' maxLength={1000} name='answer' onChange={(event, name) => this.answerInput(event, name)}></textarea>
        <h3 className='add-answer-titles'>Nickname*</h3>
        <input className='add-answer-username' placeholder={'Example:jackson11!'} maxLength={60} name='nickname' onChange={(event, name) => this.answerInput(event, name)}></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3 className='add-answer-titles'>Email*</h3>
        <input type='email' placeholder={'Example: jack@email.com'} maxLength={60} name='email' onChange={(event, name) => this.answerInput(event, name)}></input>
        <span>For authentication reasons. You will be not be emailed</span>
        <Thumbnails currentPhotos={this.state.photos.slice(1)} />
        <button className='image-button' onClick={this.addImage}>upload images</button>
        {this.state.addingImage ? <AddImageModal photos={this.state.photos} closeModal={this.addImage} photoInvalid={this.invalidPhoto}/> : null}
        <button className='add-answer-submit' onClick={this.addAnswer}>Submit</button>
      </div>
    );
  }
}

export default AddAModal;