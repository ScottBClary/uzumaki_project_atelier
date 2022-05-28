import React from 'react';
import OneQ from './OneQ';

class AddAModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='answer-modal'>
        <div className='answer-modal-close' onClick={this.props.closeAnswerModal}>x</div>
        <h3 className='add-answer-titles'>Submit your Answer</h3>
        <h3 className='add-answer-titles'>Product Name: Question Body</h3>
        <h3 className='add-answer-titles'>Your Answer*</h3>
        <textarea className='add-answer-text' maxLength={1000}></textarea>
        <h3 className='add-answer-titles'>Nickname*</h3>
        <input className='add-answer-username' placeholder={'Example:jackson11!'} maxLength={60}></input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <h3 className='add-answer-titles'>Email*</h3>
        <input placeholder={'Example: jack@email.com'} maxLength={60}></input>
        <span>For authentication reasons, you will be not be emailed</span>
        <button className='image-button'>upload images</button>
        <button className='add-answer-submit'>Submit</button>
      </div>
    );
  }
}

export default AddAModal;