import React from 'react';
import Search from './Search.js';
import OneQ from './OneQ.js';
import OneA from './OneA.js';
import QAList from './QAList.js';
import AddQModal from './AddQModal.js';
import axios from 'axios';
import '../QandAstyle.css';

class MainQA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionModalOpened: false,
      results: [],
      resultsToShow: [],
      resultsShown: [],
      question: '',
      answers: {},
      productId: 66642

    };
    this.openQuestionModal = this.openQuestionModal.bind(this);

  }

  componentDidMount() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${this.state.productId}`, {
      headers: {
        'Authorization': process.env.API_TOKEN
      }
    })
      .then((body) => {
        this.setState({
          results: body.data.results,
          // resultsToShow: body.data.results.splice(3),
          // resultsShown: body.data.results.splice(0, 2),
          answers: body.data.results.answers
        });
      })
      .then(() => {

      })
      .catch((error) => {
        console.log('error:', error);
      })
      .then();
  }

  openQuestionModal() {
    this.setState({
      questionModalOpened: !this.state.questionModalOpened
    });
  }

  moreQuestions() {
    var revealedQuestions = this.state.resultsToShow.splice(0, 2);
    var shown = this.state.resultsShown.concat(revealedQuestions);
    this.setState({
      resultsShown: shown,
      resultsToShow: this.state.resultsToShow.splice(3)
    });
  }

  render() {
    return (
      <div>
        <h2 className='header'>QUESTIONS AND ANSWERS</h2>
        <Search/>
        <QAList entries={this.state.resultsShown} moreQuestions={this.moreQuestions} className='qa-container'/>
        <button onClick={this.moreQuestions}>More Answered Questions</button>
        {this.state.questionModalOpened ? <AddQModal closeQuestionModal={this.openQuestionModal}/> : null}
        <button className='add-question-button' onClick={this.openQuestionModal}>ADD QUESTION</button>
      </div>
    );
  }
}

export default MainQA;