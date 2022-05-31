import React from 'react';
import axios from 'axios';

class OneA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notReported: true,
      isSeller: false,
      help: this.props.answer.helpfulness
    };
    this.reportClick = this.reportClick.bind(this);
    this.date = this.date.bind(this);
  }

  reportClick() {
    this.setState({
      notReported: !this.state.notReported
    });
  }

  date() {
    var months = {'01': 'January', '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December'}
    var month = months[this.props.answer.date.slice(5, 7)];
    var day = this.props.answer.date.slice(8, 10);
    var year = this.props.answer.date.slice(0, 4);
    return month + ' ' + day + ' ' + year;
  }

  addHelp() {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${this.props.answer.id}/helful`,
      null,
      {
        params: {'answer_id': this.props.answer.id},
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

  render() {
    if (this.props.answer.answerer_name.toLowerCase() === 'seller') {
      this.setState({
        isSeller: !this.isSeller
      });
    }
    return (
      <div className='answer'>
        <div className='answer-text'>A: {this.props.answer.body}</div>
        <div>
          <span style={{fontWeight: 'normal'}}>by </span>
          <span style={this.state.isSeller ? {fontWeight: 'bold'} : {fontWeight: 'normal'}}>{this.state.isSeller ? 'Seller' : this.props.answer.answerer_name}</span>
          <span style={{fontWeight: 'normal'}}> on {this.date()}</span>
        </div>
        <div className='answer-links'>
          <button className='answer-help-link' onClick={this.addHelp}>Helpful? Yes {this.props.answer.helpfulness} |</button>
          <button className='answer-report-link' onClick={this.reportClick}>{this.state.notReported ? 'Report' : 'Reported'}</button>
        </div>
        {this.props.answer.photos.map((photo, index) => <img src={photo.url} key ={index} alt='photo of product'/>)}
        {/* <span className='answer-identifier'>by user, Month DD, YYYY</span> */}
        {/* <button>See More Answers or Collapse Answers</button> */}
      </div>
    );
  }
}



export default OneA;