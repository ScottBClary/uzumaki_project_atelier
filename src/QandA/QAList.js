import React from 'react';
import OneQ from './OneQ.js';
import OneA from './OneA.js';


class QAList extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   answers: [],
    //   answerShown: [],
    //   answersToShow: [],
    //   endOfAnswers: false
    // };
    // this.extractAnswers = this.extractAnswers.bind(this);
    // this.displayAnswers = this.displayAnswers.bind(this);
  }
  // displayAnswers(question) {
  //   var answerList = [];
  //   var answers = Object.values(question.answers);
  //   for (var i = 0; i < answers.length; i++) {
  //     answerList.push(answers[i]);
    // }
    // var answersShown = answerList.slice(0, 2);
    // var answersToShow = answerList.slice(3);
    // this.setState({
    //   answers: answerList,
    //   answersShown: answersShown,
    //   answersToShow: answersToShow
    // });
  //   return answerList;
  // }
  // }
  // extractAnswers() {
  //     if (this.state.answersToShow.length <= 2) {
  //       this.setState({
  //         endOfAnswers: !this.state.endOfAnswers,
  //         answersToShow: this.state.answers
  //       });
  //     } else {
  //       var revealedAnswers = this.state.answersToShow.slice(0, 2);
  //       var shown = this.state.answersShown.concat(revealedAnswers);
  //       this.setState({
  //         answersShown: shown,
  //         answersToShow: this.state.answersToShow.slice(3)
  //       });
  //     }
  //   }

  render() {

    if (this.props.entries.length > 0 ) {
    const entryList = this.props.entries.map((entry, index) =>
        <div>
          <ul key={index}>
            <OneQ question={entry} />
            {Object.values(entry.answers).map((answer, index) =>
              <ul key={index}>
                <OneA answer={answer}/>
              </ul>
            )}
          </ul>
          {/* <button onClick={this.extractAnswers}>See More Answers</button> */}
        </div>
      );

      return (
        <div>
          {entryList}
        </div>
      );
    } else {
      console.log('no entries')
      return (
        <div>loading answers</div>
      );
    }
  }
}



//have a variable with all the entries

// const QAList = function ({ entries, answers, extractAnswers }) {

//   const entryList = entries.map((entry, index) =>
//     <ul key={index}>
//       <OneQ question={entry} />
//       {Object.values(entry.answers).map((answer, index) =>
//         <ul key={index}>
//           <OneA answer={answer}/>
//         </ul>
//       )}
//     </ul>
//   );
//   return (
//     <div>
//       {entryList}
//     </div>
//   );
// }
export default QAList
//just start with mapping two
//on button click add two more from the variable to the array being mapped

//when want to collapse answers at the end of the list
//change the array being mapped to the first two

