import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-bar">
        <input className="search-field" placeholder={'Have a question? Search for answers...'}></input>
        <button className="search-button">Search</button>
      </div>
    );
  }
}

export default Search;