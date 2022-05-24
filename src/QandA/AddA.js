import React from 'react';

class AddA extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Submit your Answer</h1>
        <h2>Product Name: Question Body</h2>
        <input>Your Answer* 1000 chars</input>
        <input placeholder={'Example:jackson11!'}>Nickname* 60 chars</input>
        <span>For privacy reasons, do not use your full name or email address</span>
        <input placeholder={'Why did you like the product or not?'}>Email* 60 chars</input>
        <span>For authentication reasons, you will be not be emailed</span>
        <button>upload images</button>
        <button>Submit</button>
      </div>
    );
  }
}

export default AddA;