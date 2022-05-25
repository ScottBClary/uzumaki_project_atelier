import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="search-bar">
        <input className="search-field" placeholder={'HAVE A QUESTION? SEARCH FOR ANSWERS...'}></input>
        <button className="search-button">Search</button>
      </form>
    );
  }
}

export default Search;