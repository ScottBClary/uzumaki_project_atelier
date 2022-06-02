import React from 'react';
import OneQ from './OneQ.js';
import OneA from './OneA.js';

const QAList = function ({ entries }) {
  const entryList = entries.map((entry, index) =>
    <ul key={index}>
      <OneQ question={entry} />
      {Object.values(entry.answers).map((answer, index) =>
        <ul key={index}>
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

