import React from 'react';
import Search from './Search.js';
import OneQ from './OneQ.js';
import OneA from './OneA.js';
import QAList from './QAList.js';
import AddQModal from './AddQModal.js';
import axios from 'axios';
import '../QandAstyle.css';
// require('dotenv').config();
// import API_TOKEN from '../../.env';
import dotenv from 'dotenv';
dotenv.config();

class MainQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionModalOpened: false,
      results: [{
        question: "something",
        answers: ['hey','hey', 'hey']
      },
      {
        question: "something",
        answers: ['hey','hey', 'hey']
      },
      {
        question: "something",
        answers: ['hey','hey', 'hey']
      }],
      productId: 66642

    };
    this.openQuestionModal = this.openQuestionModal.bind(this);

  }

  componentDidMount() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${this.state.productId}`, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    })
    // axios.get('/qa/questions', {'product_id': this.state.productId, 'results': this.state.questions})
      .then((body) => {
        this.setState({
          results: body.data.results
        });
      })
      .catch((error) => {
        console.log('error:', error);
      })
      .then();
    //for prevent default event explanation hitting the api around 15 min in
  }

  openQuestionModal() {
    this.setState({
      questionModalOpened: !this.state.questionModalOpened
    });
  }
  render() {
    return (
      <div>
        <h2 className='header'>QUESTIONS AND ANSWERS</h2>
        <Search/>
        <QAList questions={this.state.results} className='qa-container'/>
        {/* <button>More Answered Questions</button> */}
        {this.state.questionModalOpened ? <AddQModal closeQuestionModal={this.openQuestionModal}/> : null}
        <button className='add-question-button' onClick={this.openQuestionModal}>ADD QUESTION</button>
      </div>
    );
  }
}

export default MainQA;