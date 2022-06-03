import React from 'react';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

var StarRating = function(props) {

  var emptyStars = [];
  emptyStars.push(<AiOutlineStar></AiOutlineStar>);
  emptyStars.push(<AiOutlineStar></AiOutlineStar>);
  emptyStars.push(<AiOutlineStar></AiOutlineStar>);
  emptyStars.push(<AiOutlineStar></AiOutlineStar>);
  emptyStars.push(<AiOutlineStar></AiOutlineStar>);
  var fullStars = [];
  fullStars.push(<AiFillStar></AiFillStar>);
  fullStars.push(<AiFillStar></AiFillStar>);
  fullStars.push(<AiFillStar></AiFillStar>);
  fullStars.push(<AiFillStar></AiFillStar>);
  fullStars.push(<AiFillStar></AiFillStar>);
  console.log('rating is ' + props.rating);
  var theWidth = props.rating * 100;
  var widthInStars = Math.round(theWidth / 20);

  var remainder = Math.floor((Math.floor(widthInStars * 100) % 100) / 25);
  console.log('width in stars is' + widthInStars);
  var result = [];
  for (var i = 0; i < widthInStars; i++) {
    result.push(<AiFillStar></AiFillStar>);
  }
  var widths = [0, .25, .75, 1.00];
  // result.push(<AiFillStar style = {{width: {width}}}></AiFillStar>);
  console.log((20 * widthInStars) + (widths[remainder] * 20) + '%');
  console.log('remainder is ' + remainder);
  return <div className = 'starDiv' color = 'gold' display = 'flex'>
    <div style = {{'width': 'max-content', 'position': 'relative'}}>{emptyStars}<div className = 'fullStars' style = {{'width': (20 * widthInStars) + (widths[remainder] * 20) + '%'}}>{fullStars}</div><a href="#reviews">Reviews</a></div>

  </div>;
};



export default StarRating;
