import React from 'react';
import OneQ from './OneQ';
import axios from 'axios';
import AddImage from './AddImage';

class AddAModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      photos: [
        {
          id: 0,
          url: '',
        }
      ],
      questionId: '',
      addingImage: false,
      photoNumber: 1
    };
    this.answerInput = this.answerInput.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.addImage = this.addImage.bind(this);
    this.liftPhotoState = this.liftPhotoState.bind(this);
    // this.uploadImage = this.uploadImage.bind(this)
  }

  answerInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
      questionId: this.props.questionId
    });
  }

  addAnswer() {
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

  addImage() {
    this.setState({
      addingImage: !this.addingImage
    });
  }

  liftPhotoState(state) {
    //once all pictures are added, make state of photos equal to another array of photos
    // this.props.photos = this.state.currentPhotos;
    console.log('state', state);
    this.setState({
      photos: state
    });

  }
  // uploadImage() {
  //   this.setState((prevState) => {
  //     return {
  //       photos: [...prevState.photos, {
  //         id: prevState.photos[prevState.photos.length - 1].id + 1,
  //         url: event.target.value
  //       }]
  //     };
  //   });
  // }

  render() {
    return (
      <div className='answer-modal'>
        <div className='answer-modal-close' onClick={this.props.closeAnswerModal}>x</div>
        <h3 className='add-answer-titles'>Submit your Answer</h3>
        <h3 className='add-answer-titles'>Product Name: {this.props.question}</h3>
        <h3 className='add-answer-titles'>Your Answer*</h3>
        <textarea className='add-answer-text' maxLength={1000} name='answer' onChange={(event, name) => this.answerInput(event, name)}></textarea>
        <h3 className='add-answer-titles'>Nickname*</h3>
        <input className='add-answer-username' placeholder={'Example:jackson11!'} maxLength={60} name='email' onChange={(event, name) => this.answerInput(event, name)}></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3 className='add-answer-titles'>Email*</h3>
        <input placeholder={'Example: jack@email.com'} maxLength={60} name='email' onChange={(event, question) => this.answerInput(event, name)}></input>
        <span>For authentication reasons, you will be not be emailed</span>
        <button className='image-button' onClick={this.addImage}>upload images</button>
        {this.state.addingImage ? <AddImage photos={this.state.photos} liftPhotoState={this.liftPhotoState}/> : null}
        <button className='add-answer-submit' onClick={this.addAnswer}>Submit</button>
      </div>
    );
  }
}

export default AddAModal;