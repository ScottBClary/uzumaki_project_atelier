import React from 'react';
import axios from 'axios';
import ReviewList from './reviewList.jsx';
import ReviewBreakdown from './reviewBreakdown.jsx';

const API_TOKEN = process.env.API_TOKEN;

export default class ReviewParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTrigger: false,
      productId: 66642,
      reviews: [],
      revMetaData: [],
      revMetaDataCypher: {},
      helpfulReviews: [],
      sort: 'newest',
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    };

    this.updateHandler = this.updateHandler.bind(this);
    this.helpfulHandler = this.helpfulHandler.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);

  }

  componentDidMount() {
    this.getRevData();
  }

  componentDidUpdate() {
    if (this.state.stateTrigger !== false) {
      this.getRevData();
    }
  }

  getRevData () {

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews', {
      headers: {
        'Authorization': API_TOKEN
      },
      params: {
        'product_id': this.state.productId,
        'sort': this.state.sort,
        'count': 100
      }
    })
      .then((body) => {
        this.setState({
          stateTrigger: false,
          reviews: body.data.results
        });
      })
      .catch(err => console.log(err))
      .then();

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta',
      {
        headers: {
          'Authorization': API_TOKEN
        },
        params: {
          'product_id': this.state.productId
        }
      })
      .then((body) => {
        const revMetaDataArray = Object.keys(body.data.characteristics);
        const revMetaDataObj = {};

        revMetaDataArray.forEach((element) => {
          revMetaDataObj[element] = body.data.characteristics[element]['id'];
        });


        this.setState({
          revMetaData: revMetaDataArray,
          revMetaDataCypher: revMetaDataObj
        });
      })
      .catch(err => console.log(err))
      .then();
  }

  updateHandler (e) {
    e.preventDefault();
    this.setState({
      stateTrigger: true,
      reviews: [],
      revMetaData: []
    });
  }

  helpfulHandler (e) {
    e.preventDefault();
    var helpNum = Number(e.target.id);
    this.setState({
      helpfulReviews: [...this.state.helpfulReviews, helpNum]
    });
  }

  handleSort (e) {
    this.setState({
      sort: e.target.value,
      stateTrigger: true
    });
  }

  handleFilter (e) {
    e.preventDefault();
    var filter = e.target.id[0];
    this.setState({
      [filter]: !this.state[filter]
    });
  }

  resetFilter (e) {
    e.preventDefault();
    this.setState({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false
    });
  }

  render() {
    const rawFilters = [this.state[1], this.state[2], this.state[3], this.state[4], this.state[5]];
    if (rawFilters.indexOf(true) !== -1) {
      var filteredRevs = this.state.reviews.filter(rev => this.state[rev.rating] === true);
    } else {
      var filteredRevs = this.state.reviews;
    }
    return <div className='reviewParent'>
      <ReviewBreakdown class='revBreakDown' productId={this.state.productId} handleFilter={this.handleFilter} rawFilt={rawFilters} resFilt={this.resetFilter}/>
      <div>
        <div className='newest'>
          <label> Sort on
            <select name='sort' value={this.state.sort} onChange={this.handleSort}>
              <option value='relevant'>Relevent</option>
              <option value='helpful'>Helpful</option>
              <option value='newest'>Newest</option>
            </select>
          </label>
        </div>
        <ReviewList revHelpHand={this.helpfulHandler} upHand={this.updateHandler} revMetaData={this.state.revMetaData} revMetaDataCypher={this.state.revMetaDataCypher} reviews={filteredRevs} revHelp={this.state.helpfulReviews}/>
      </div>
    </div>;
  }
}