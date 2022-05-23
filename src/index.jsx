import React from 'react';
//Bring reactDom in to mount component to the dom
import reactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import ProductDetail from './components/ProductDetail.jsx';
import styles from './components/app.css';
const root = createRoot(document.getElementById('root'));

//change to jsx once babel is set up
//Give html elements ID's so we can change with CSS?
const App = () => {
  return <div id='AppDiv'>
    <ProductDetail/>
  </div>;
};

//render our app to the dom mounted to the element with id of root inside
//our public/index.html file
root.render(<App/>);
// reactDOM.render(App, document.getElementById("root"));
//hr-rfc