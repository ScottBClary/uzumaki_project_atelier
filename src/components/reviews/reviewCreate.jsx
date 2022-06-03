import React from 'react';
import ImageCreate from './reviewImageUp.jsx';
export default class ReviewCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starRating: '',
      imageWindow: false,
      revImages: [],
      'Fit': 0,
      'Length': 0,
      'Quality': 0,
      'Comfort': 0,
      'Width': 0,
      'Size': 0,
      bodyCount: 0
    };
    this.starSelector = this.starSelector.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.imageSubmit = this.imageSubmit.bind(this);
    this.charHandler = this.charHandler.bind(this);
    this.bodyCounter = this.bodyCounter.bind(this);

  }

  imageHandler(e) {
    e.preventDefault();
    this.setState({
      imageWindow: !this.state.imageWindow
    });
  }

  imageSubmit(e) {
    e.preventDefault();
    console.log(e.target.children[0].value);
    this.setState({
      revImages: [...this.state.revImages, e.target.children[0].value],
      imageWindow: false
    });
  }

  starSelector(e) {
    var starSelect = e.target.id[0];

    this.setState({
      starRating: starSelect
    });
  }

  resetForm(e) {
    e.preventDefault();
    this.setState({
      starRating: 0,
      revImages: []
    });
    this.props.cancel(e);
  }

  charHandler(e) {
    var endex = e.target.id.length - 1;
    var charKey = e.target.id.slice(0, endex);
    var charVal = e.target.id[endex];

    this.setState({
      [charKey]: charVal
    });
  }

  bodyCounter(e) {
    e.preventDefault();
    this.setState({
      bodyCount: e.target.value.length
    });
  }

  render() {
    if (!this.props.open) {
      return null;
    }
    const radNums = ['1rad', '2rad', '3rad', '4rad', '5rad'];
    const radDesc = {
      'Fit': {
        0: 'none selected',
        1: 'Runs Short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      },
      'Length': {
        0: 'none selected',
        1: 'Runs Short',
        2: 'Runs slightly short',
        3: 'Perfect',
        4: 'Runs slightly long',
        5: 'Runs long'
      },
      'Quality': {
        0: 'none selected',
        1: 'Poor',
        2: 'Below Average',
        3: 'What I expected',
        4: 'Pretty great',
        5: 'Perfect'
      },
      'Comfort': {
        0: 'none selected',
        1: 'Uncomfortable',
        2: 'Slightly uncomfortable',
        3: 'Ok',
        4: 'Comfortable',
        5: 'Perfect'
      },
      'Width': {
        0: 'none selected',
        1: 'Too narrow',
        2: 'Slightly narrow',
        3: 'Perfect',
        4: 'Slightly wide',
        5: 'Too wide'
      },
      'Size': {
        0: 'none selected',
        1: 'A size too small',
        2: '\u00BD a size to small',
        3: 'Perfect',
        4: '\u00BD a size too big',
        5: 'A size too wide'
      }
    };
    const starNums = ['1star', '2star', '3star', '4star', '5star'];
    const starDesc = {
      1: 'Poor',
      2: 'Fair',
      3: 'Average',
      4: 'Good',
      5: 'Great'
    };
    const starButtons = starNums.map((num, index) => {
      return <input id={num + 'Radio'} style={{ float: 'left'}} className='starRadio' type='radio' name='starRadio' key={num + 'Radio'} required onClick={this.starSelector}></input>;
    });
    if (this.state.bodyCount < 50) {
      var charCountElement = <div className='needChars'>Minimum required characters left: {50 - this.state.bodyCount}</div>;
    } else {
      var charCountElement = <div className='gotChars'>Minimum reached</div>;
    }
    const starLabels = starNums.map((num, index) => {
      if (index + 1 <= this.state.starRating) {
        return <React.Fragment key={'rf' + index}>
          <label htmlFor={num + 'Radio'} className='indStarRadLab' key={num + 'labelEmpty'}>{'\u2605'}</label>
        </React.Fragment>;
      } else {
        return <React.Fragment key={'rf' + index}>
          <label htmlFor={num + 'Radio'} className='indStarRadLab' key={num + 'labelFull'}>{'\u2606'}</label>
        </React.Fragment>;
      }
    });

    const radChars = this.props.rMd.map((char, index) => {
      var currentChar = radNums.map((num, numDex) => {
        var radNum = numDex + 1;
        return <input id={char + radNum} type='radio' name={char} key={char + radNum} required></input>;
      });
      return <div key={char + index + 'div'}>
        <label className='charCSS' key={char + index + 'label'} htmlFor={char + index}>{radDesc[char][this.state[char]]}</label>
        <div name={char} id={char + index} key={char + index} onChange={this.charHandler}>{char} {currentChar}</div>
      </div>;
    });

    const revUpImages = this.state.revImages.map((imageUrl) => {
      return <img src={imageUrl} alt='user provided img' key={(this.state.revImages.length + 1) + 'revImgKey'} width='42' height='42'></img>;
    });

    return <>
      <div className='overlay' />
      <form name='subRev' className='reviewCreate' onSubmit={this.props.subRev}>
        <label className='centerRevItem'>Overall Rating
          <div className='ratings'>
            <div className='centerRevItem'>
              {starButtons}
              <div className='starRadLab'>
                {starLabels}
              </div>
            </div>
          </div>
          <div className='star-desc'>{starDesc[this.state.starRating]}</div>
        </label>
        <label className='centerRevItem'>Do you recommend this product?
          <label htmlFor='revRadYes'>yes<input id='revRadYes' value={true} type='radio' name='recRadio' required/></label>
          <label htmlFor='revRadNo'>no<input id='revRadNo' value={false} type='radio' name='recRadio' required/></label>
        </label>
        <div>
          {radChars}
        </div >
        <label className='centerRevItem, summary'> Review summary
          <input type='text' name='summary' className='summary' placeholder='Example: Best purchase ever!' size='42' required></input>
        </label>
        <label className='centerRevItem, imgBtn'> Review Body
          <textarea onChange={this.bodyCounter} name='revBody' rows='5' cols='40' className='revBody' placeholder='Why did you like the product or not?' required></textarea>
          {charCountElement}
        </label>
        <div>
          {revUpImages}
          <div className='centerRevItem'>
            {this.state.revImages.length < 5 && <button id='addRevImageButton' value={this.state.revImages} onClick={this.imageHandler}>Add Image</button>}
          </div>
        </div>
        <label className='centerRevItem, summary'>What is your nickname
          <input required type='text' name='revNickName' className='revNickname' placeholder='Example: jackson11!'></input>
        </label>
        <label className='centerRevItem, summary'>Your email
          <input required type='email' name='revEmail' className='revEmail' placeholder='Example: jackson11@email.com'></input>
        </label>
        <input type='hidden' id='starRatingData' value={this.state.starRating}></input>
        <input style={{ display: 'hidden' }}type='submit' value='Submit'></input>
        <button onClick={this.resetForm}>cancel</button>
      </form>
      <ImageCreate imgOpen={this.state.imageWindow} imgSub={this.imageSubmit} imgWindow={this.imageHandler}/>
    </>;
  }
}