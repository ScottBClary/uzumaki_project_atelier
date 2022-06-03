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

  var theWidth = props.rating * 100;
  var widthInStars = (theWidth * 100) / 20;
  var remainder = Math.floor((Math.floor(widthInStars * 100) % 100) / 25);

  var result = [];
  for (var i = 0; i < widthInStars; i++) {
    result.push(<AiFillStar></AiFillStar>);
  }
  var widths = [0, 44, 66, 100];
  // result.push(<AiFillStar style = {{width: {width}}}></AiFillStar>);
  return <div className = 'starDiv' color = 'gold' display = 'flex'>
    <div style = {{'width': 'max-content', 'position': 'relative'}}>{emptyStars}<div className = 'fullStars' style = {{'width': theWidth + '%'}}>{fullStars}</div></div>

  </div>;
};



export default StarRating;
