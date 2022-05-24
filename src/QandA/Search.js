import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input placeholder={'Have a question? Search for answers...'}></input>
        <button>Search</button>
      </div>
    );
  }
}

export default Search;