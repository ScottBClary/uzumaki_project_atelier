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
      endOfQuestions: false,
      answers: [],
      answersToShow: [],
      answersShown: [],
      endOfAnswers: false,
      productId: 66642

    };
    this.openQuestionModal = this.openQuestionModal.bind(this);
    this.moreQuestions = this.moreQuestions.bind(this);
    // this.extractAnswers = this.extractAnswers.bind(this);
    this.getData = this.getData.bind(this);

  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${this.state.productId}`, {
      headers: {
        'Authorization': process.env.API_TOKEN
      }
    })
      .then((body) => {

        var resultsShown = body.data.results.slice(0, 2);
        var resultsToShow = body.data.results.slice(3);
        this.setState({
          results: body.data.results,
          resultsShown: resultsShown,
          resultsToShow: resultsToShow,
        });
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
    if (this.state.results.length <= 2) {
      this.setState({
        resultsShown: this.state.results,
        endOfQuestions: true
      });
      console.log('end of questions');
    } else {
      var revealedQuestions = this.state.resultsToShow.slice(0, 2);
      var shown = this.state.resultsShown.concat(revealedQuestions);
      this.setState({
        resultsShown: shown,
        resultsToShow: this.state.resultsToShow.slice(3)
      });
    }
  }

  render() {
    console.log('resultsshown', this.state.resultsShown)
    return (
      <div>
        <h2 className='header'>QUESTIONS AND ANSWERS</h2>
        <Search/>
        <QAList entries={this.state.resultsShown} className='qa-container'/>
        {this.state.endOfQuestions ? null : <button onClick={this.moreQuestions}>More Answered Questions</button>}
        {this.state.questionModalOpened ? <AddQModal closeQuestionModal={this.openQuestionModal} getData={this.getData}/> : null}
        <button className='add-question-button' onClick={this.openQuestionModal}>ADD QUESTION</button>
      </div>
    );
  }
}

export default MainQA;