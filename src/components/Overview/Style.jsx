import store from '../../redux.js';
import React from 'react';
class Style extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    store.subscribe(this.handleChange);
    this.state = {
      isSelected: false
    };
  }

  handleChange() {
    var sel = this.props.index === store.getState().styleIndex;
    this.setState({
      isSelected: sel
    });
  }

  handleClick() {

    store.dispatch({type: 'changeStyleIndex', value: this.props.index});
  }


  render() {
    var isSelected = this.props.index === store.getState().styleIndex;
    if (isSelected) {
      return <div className = 'style'><img className = 'resizableImage' src = {this.props.style.photos[0].thumbnail_url} onClick = {this.handleClick}></img><p className = 'floatingCheck'>✅</p></div>;
    } else {
      return <div className = 'style'><img className = 'resizableImage' src = {this.props.style.photos[0].thumbnail_url} onClick = {this.handleClick}></img></div>;
    }

  }
}

export default Style;