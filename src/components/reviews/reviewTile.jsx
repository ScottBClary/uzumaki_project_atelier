import React from 'react';
import axios from 'axios';
const API_TOKEN = process.env.API_TOKEN;

export default class ReviewTile extends React.Component {
  constructor(props) {
    super(props);

    this.emptyStars = String.fromCodePoint(0x2606, 0x2606, 0x2606, 0x2606, 0x2606);
    this.fullStars = String.fromCodePoint(0x2605, 0x2605, 0x2605, 0x2605, 0x2605);
    this.revReportHandler = this.revReportHandler.bind(this);
    this.revHelpfulHandler = this.revHelpfulHandler.bind(this);
  }

  revReportHandler (e, id) {
    e.preventDefault();
    const revRepUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/' + this.props.revData.review_id + '/report';
    axios.put(revRepUrl, null, {
      headers: {
        'Authorization': API_TOKEN
      }
    })
      .then( () => {
        console.log('Successfully Reported!');
      })
      .catch( err => console.log(err))
      .then(() => this.props.upHand(e));
  }

  revHelpfulHandler(e) {
    e.preventDefault();
    const revHelpUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/' + this.props.revData.review_id + '/helpful';

    axios.put(revHelpUrl, null, {
      headers: {
        'Authorization': API_TOKEN
      }
    })
      .then( () => {
        console.log('Successfully Updated!');
      })
      .catch( err => console.log(err))
      .then(() => {
        this.props.revHelpHand(e);
      });
  }


  render() {
    const rD = this.props.revData;
    const revId = this.props.revData.review_id;
    const rec = rD.recommend ? 'Yes!' : 'No.';
    const starRating = this.props.revData.rating * 20;
    const images = rD.photos.map((photo) => {
      return <img src={photo.url} alt='user provided img' key={photo.id} width="100" height="100"></img>;
    });

    if (rD.response === null) {
      var revResponse = null;
    } else {
      var revResponse = <div>Response from seller: {rD.response}</div>;
    }

    if (this.props.revHelp.indexOf(revId) === -1) {
      var markHelpful = <button id={revId} onClick={this.revHelpfulHandler} value='yes'>Yes</button>;
    } else {
      var markHelpful = <div>Marked Helpful!</div>;
    }

    return <div className='listItem'>
      <div>
        <div className='ratings'>
          <div className='empty-stars'>{this.emptyStars}</div>
          <div className='full-stars' style={{width: starRating}}>{this.fullStars}</div>
        </div>
      </div>
      <div>{rD.date}</div>
      <div>{rD.summary}</div>
      <div>{rD.body}</div>
      {images}
      <div>Recommend: {rec}</div>
      <div>{rD.reviewer_name}</div>
      {revResponse}
      <div>Helpful? {markHelpful} {rD.helpfulness}
        <button className='revReport' onClick={e => this.revReportHandler(e, this.props.id)}>
          Report
        </button>
      </div>
    </div>;
  }
}