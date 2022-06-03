import React from 'react';
import axios from 'axios';
import ReviewTile from './reviewTile.jsx';
import ReviewCreate from './reviewCreate.jsx';
//const path = require('path');
//require('dotenv').config({path: __dirname + '/.env'});
const API_TOKEN = process.env.API_TOKEN;

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openReview: false,
      moreReviews: false,
      'Fit': 0,
      'Length': 0,
      'Quality': 0,
      'Comfort': 0,
      'Width': 0,
      'Size': 0,
    };
    this.openReviewHandler = this.openReviewHandler.bind(this);
    this.submitReviewHandler = this.submitReviewHandler.bind(this);
    this.revShowHandler = this.revShowHandler.bind(this);
    this.redCharHand = this.redCharHand.bind(this);
  }

  openReviewHandler(e) {
    e.preventDefault();
    this.setState({
      openReview: !this.state.openReview,
      'Fit': 0,
      'Length': 0,
      'Quality': 0,
      'Comfort': 0,
      'Width': 0,
      'Size': 0,
    });
  }
  redCharHand(e) {
    var endex = e.target.id.length - 1;
    var charKey = e.target.id.slice(0, endex);
    var charVal = e.target.id[endex];

    this.setState({
      [charKey]: charVal
    });
  }

  submitReviewHandler(e) {
    e.preventDefault();
    const revRef = e.target.elements;
    console.log(e.target.elements);
    const charOps = {};
    const keyRef = this.props.revMetaData;
    const cyRef = this.props.revMetaDataCypher;
    const recBool = JSON.parse(revRef.recRadio.value);

    keyRef.forEach((cyKey) => {
      var strKey = cyRef[cyKey].toString();
      console.log('cyref', cyRef);
      console.log('cykey', cyKey);
      console.log('revcy', revRef[cyKey]['Comfort']);
      console.log(strKey);
      var charValue = this.props[cyKey];
      charOps[strKey] = charValue;
    });

    const reqBody = {
      'product_id': 66642,
      'rating': Number(revRef.starRatingData.value),
      'summary': revRef.summary.value,
      'body': revRef.revBody.value,
      'recommend': recBool,
      'name': revRef.revNickName.value,
      'email': revRef.revEmail.value,
      'photos': ['https://nerdist.com/wp-content/uploads/2020/07/maxresdefault.jpg'],
      'characteristics': charOps
    };
    console.log(reqBody);

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', reqBody
      ,
      {
        headers: {
          'Authorization': API_TOKEN,
        }
      })
      .then(() => {
        console.log('Succesfully Posted!');
      })
      .catch(err => console.log(err))
      .then();
  }

  revShowHandler (e) {
    e.preventDefault();
    this.setState({
      moreReviews: true
    });
  }

  render() {
    //rawTiles will be a list of literally all of the reviews, this can just be state
    //filtered tiles will filter the state, and return a filtered array, which will be used below
    if (this.state.moreReviews === false) {
      var reviews = this.props.reviews.slice(0, 2);
    } else {
      var reviews = this.props.reviews;
    }
    const tiles = reviews.map((rev, index) => {
      return <ReviewTile revHelp={this.props.revHelp} revHelpHand={this.props.revHelpHand} upHand={this.props.upHand} revData={rev} id={rev.review_id} key={rev.review_id}/>;
    });

    if (this.state.moreReviews === false) {
      var moreRevs = <button onClick={this.revShowHandler}>More Reviews</button>;
    } else {
      var moreRevs = null;
    }

    return <React.Fragment>
      <ul className='reviewList'>
        {tiles}
      </ul>
      <div className='bottomButton'>
        <button onClick={this.openReviewHandler}>Create Review</button>
        {moreRevs}
        <ReviewCreate redCharHand={this.redCharHand} subRev={this.submitReviewHandler} rMd={this.props.revMetaData} open={this.state.openReview} cancel={this.openReviewHandler}/>
      </div>
    </React.Fragment>;
  }
}