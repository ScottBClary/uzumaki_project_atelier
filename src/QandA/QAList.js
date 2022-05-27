import React from 'react';
import OneQ from './OneQ.js';
import OneA from './OneA.js';

const QAList = function ({ questions }) {
  const entryList = questions.map((entry, index) =>
    <ul key={index}>
      <OneQ question={entry.question}/>
      {entry.answers.map((answer, index) =>
        <ul key={index}>
          <OneA answer={answer}/>
        </ul>
      )}
    </ul>
  );
  return (
    <div>
      {entryList}
      {/* {answerList} */}
    </div>
  );
};

export default QAList;

