import React from 'react';
import ImageCreate from './reviewImageUp.jsx';
export default class ReviewCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRating: 0,
      imageWindow: false,
      revImages: []
    };
    this.starSelector = this.starSelector.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.imageSubmit = this.imageSubmit.bind(this);
  }

  imageHandler(e) {
    e.preventDefault();
    this.setState({
      imageWindow: !this.state.imageWindow
    });
  }

  imageSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    // this.setState({
    //   revImages: [...this.state.revImages, e.target.value]
    // });
  }

  starSelector(e) {
    var starSelect = e.target.getAttribute('name')[0];

    this.setState({
      starRating: starSelect
    });
  }

  resetForm(e) {
    e.preventDefault();
    this.setState({
      starRating: 0
    });
    this.props.cancel(e);
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    const starNums = ['1star', '2star', '3star', '4star', '5star'];
    const starDesc = {
      1: 'Poor',
      2: 'Fair',
      3: 'Average',
      4: 'Good',
      5: 'Great'
    };
    const emptyStars = starNums.map((num, index) => {
      return <div style={{ float: 'left'}} name={num} key={num + 'Empty'} >{'\u2606'}</div>;
    });
    const fullStars = starNums.map((num, index) => {
      if (index + 1 <= this.state.starRating) {
        return <div style={{ float: 'left'}} name={num} key={num + 'Full'} >{'\u2605'}</div>;
      }
    });
    const radNums = ['1rad', '2rad', '3rad', '4rad', '5rad'];
    const radDesc = {
      'Fit': {
        1: 'Runs Short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      },
      'Length': {
        1: 'Runs Short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      },
      'Quality': {
        1: 'Poor',
        2: 'Below Average',
        3: 'What I expected',
        4: 'Pretty great',
        5: 'Perfect'
      },
      'Comfort': {
        1: 'Uncomfortable',
        2: 'Slightly uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect'
      },
      'Width': {
        1: 'Too narrow',
        2: 'Slightly narrow',
        3: 'Perfect',
        4: 'Slightly wide',
        5: 'Too wide'
      },
      'Size': {
        1: 'A size too small',
        2: '\u00BD a size to small',
        3: 'Perfect',
        4: '\u00BD a size too big',
        5: 'A size too wide'
      }
    };
    const radChars = this.props.rMd.map((char, index) => {
      var currentChar = radNums.map((num, numDex) => {
        var radNum = numDex + 1;
        return <input id={char + radNum} type='radio' value={radNum} name={char} key={char + radNum}></input>;
      });
      return <div name={char} key={char + index}>{char} {currentChar}</div>;
    });

    return <>
      <div className='overlay' />
      <form className='reviewCreate' onSubmit={this.props.subRev}>
        <label className='centerRevItem'>Overall Rating
          <div className='ratings' onClick={this.starSelector}>
            <div className='empty-stars'>{emptyStars}</div>
            <div className='full-stars'>{fullStars}</div>
          </div>
          <div className='star-desc' value={starDesc[this.state.starRating]}>{starDesc[this.state.starRating]}</div>
        </label>
        <label className='centerRevItem'>Do you recommend this product?
          <label>yes<input id='revRadYes' value={true} type='radio' name='recRadio' /></label>
          <label>no<input id='revRadNo' value={false} type='radio' name='recRadio' /></label>
        </label>
        <div>
          {radChars}
        </div>
        <label className='centerRevItem'> Review summary
          <input type='text' name='summary' className='summary' placeholder='Example: Best purchase ever!'></input>
        </label>
        <label className='centerRevItem'> Review Body
          <input type='textarea' name='revBody' className='revBody' placeholder='Why did you like the product or not?'></input>
        </label>
        <div>images go here

          <div>
            <button id='addRevImageButton' value={this.state.revImages} onClick={this.imageHandler}>Add Image</button>
          </div>
        </div>
        <label className='centerRevItem'>What is your nickname
          <input type='text' name='revNickName' className='revNickname' placeholder='Example: jackson11!'></input>
        </label>
        <label className='centerRevItem'>Your email
          <input type='email' name='revEmail' className='revEmail' placeholder='Example: jackson11@email.com'></input>
        </label>
        <input type='hidden' id='starRatingData' value={this.state.starRating}></input>
        <input style={{ display: 'hidden' }}type='submit' value='Submit'></input>
        <button onClick={this.resetForm}>cancel</button>
      </form>
      <ImageCreate imgOpen={this.state.imageWindow} imgSub={this.imageSubmit} imgWindow={this.imageHandler}/>
    </>;
  }
}