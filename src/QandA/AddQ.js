import React from 'react';

class AddQ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Ask Your Question</h1>
        <h2>About the Product Name</h2>
        <input>Your Question* 100 chars</input>
        <input placeholder={'Example:jackson11!'}>Nickname* 60 chars</input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <input placeholder={'Why did you like the product or not?'}>Email* 60 chars</input>
        <span>For authentication reasons, you will be not be emailed</span>
        <button>Submit</button>
      </div>
    );
  }
}

export default AddQ;