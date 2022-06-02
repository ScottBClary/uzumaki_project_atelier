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

  var theWidth = Math.floor((props.rating * 100) * 20) / 20;
  return <div className = 'starDiv' color = 'gold' display = 'flex'>
    <div style = {{'width': 'max-content', 'position': 'relative'}}>{emptyStars}<div className = 'fullStars' style = {{'width': theWidth + '%'}}>{fullStars}</div></div>

  </div>;
};



export default StarRating;
