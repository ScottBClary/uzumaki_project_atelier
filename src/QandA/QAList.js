import React from 'react';
import OneQ from './OneQ.js';
import OneA from './OneA.js';

const QAList = function ({ entries }) {
  const entryList = entries.map((entry, index) =>
    <ul key={index}>
      <OneQ question={entry.question_body}/>
      {console.log(entry)}
      {Object.values(entry.answers).map((answer, index) =>
        <ul key={index}>
          <OneA answer={answer.body}/>
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

