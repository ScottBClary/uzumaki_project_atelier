import React from 'react';
import {BsTwitter, BsPinterest} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
var SocialMedia = function() {




  return <div className = 'productInfoSocialMediaBar'><BsTwitter onClick ={() => {window.open('https://twitter.com/share');}} data-size="large" data-show-count="false">Tweet</BsTwitter>

    <FaFacebookSquare onClick = {() => {window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse');}}></FaFacebookSquare>
    <BsPinterest onClick = {() => { window.open('https://www.pinterest.com'); }}></BsPinterest>

  </div>;
};



export default SocialMedia;
