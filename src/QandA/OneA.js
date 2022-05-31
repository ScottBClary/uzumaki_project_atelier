import React from 'react';

class OneA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notReported: true
    };
    this.reportClick = this.reportClick.bind(this);
  }

  reportClick() {
    this.setState({
      notReported: !this.state.notReported
    });
  }
  render() {
    return (
      <div className='answer'>
        <div className='answer-text'>A: {this.props.answer.body}</div>
        <div className='answer-links'>
          <button className='answer-help-link'>Helpful? Yes {this.props.answer.helpfulness} |</button>
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