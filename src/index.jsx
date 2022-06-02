import React from 'react';
//Bring reactDom in to mount component to the dom
import reactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import MainQA from './QandA/MainQA.js';
import axios from 'axios';

const root = createRoot(document.getElementById('root'));
import ReviewParent from './components/reviews/reviewParent.jsx';

//change to jsx once babel is set up
const App = () => {
  return ( <React.Fragment>
    <h1>
      Hello World!
    </h1>
    <div>
      <ReviewParent />
      <MainQA/>
    </div>
  </React.Fragment>
  );
};

//render our app to the dom mounted to the element with id of root inside
//our public/index.html file
root.render(<App/>);
// reactDOM.render(App, document.getElementById("root"));
//hr-rfc