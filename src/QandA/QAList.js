import React from 'react';
import OneQ from './OneQ.js';
import OneA from './OneA.js';

const QAList = function ({ entries }) {
  const entryList = entries.map((entry, index) =>
    <ul key={index}>
      <OneQ question={entry} />
      {console.log('entry', entry)}
      {Object.values(entry.answers).map((answer, index) =>
        <ul key={index}>
          {console.log('answer', answer)}
          <OneA answer={answer}/>
        </ul>
      )}
    </ul>
  );
  return (
    <div>
      {entryList}
    </div>
  );
};

export default QAList;

