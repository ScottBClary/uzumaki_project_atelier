import React from 'react';
import axios from 'axios';

const API_TOKEN = process.env.API_TOKEN;
console.log(API_TOKEN);
export default class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charKeys: [],
      charVals: [],
      starCounts: {},
    };
  }

  componentDidMount () {

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/reviews/meta',
      {
        headers: {
          'Authorization': API_TOKEN
        },
        params: {
          'product_id': this.props.productId
        }
      })
      .then((body) => {
        const charKeys = Object.keys(body.data.characteristics);
        const charVals = [];
        const revAvgKeys = Object.keys(body.data.ratings);
        var revAgg = 0;
        var revTot = 0;


        revAvgKeys.forEach((element) => {
          revAgg += (element * body.data.ratings[element]);
          revTot += Number(body.data.ratings[element]);
        });
        const revAvg = (revAgg / revTot).toFixed(1);
        const recommendAvg = Math.round(100 * (Number(body.data.recommended.true) / (Number(body.data.recommended.true) + Number(body.data.recommended.false))));

        charKeys.forEach((element) => {
          charVals.push(body.data.characteristics[element]['value']);
        });

        this.setState({
          starCounts: body.data.ratings,
          ratings: revAvg,
          recommended: recommendAvg,
          charVals: charVals,
          charKeys: charKeys,
          revTotal: revTot
        });
      })
      .catch(err => console.log(err))
      .then();
  }

  render() {
    const charDesc = {
      'Fit': {
        1: 'Runs Short',
        5: 'Runs long'
      },
      'Length': {
        1: 'Runs Short',
        5: 'Runs long'
      },
      'Quality': {
        1: 'Poor',
        5: 'Perfect'
      },
      'Comfort': {
        1: 'Uncomfortable',
        5: 'Perfect'
      },
      'Width': {
        1: 'Too narrow',
        5: 'Too wide'
      },
      'Size': {
        1: 'A size too small',
        5: 'A size too wide'
      }
    };

    const charDivs = this.state.charKeys.map((element, index) => {
      var val = this.state.charVals[index];
      return <div key={element + index} className='divPadding'>{element}
        <div className='charDivs' id={val[0] + element}><div className='charFlag' style={{'left': (Number(val).toFixed(3) * 20) + '%'}}>{'\u25BC'}</div></div>
        <div className='charBars'>
          <div>
            {charDesc[element][1]}
          </div>
          <div>
            {charDesc[element][5]}
          </div>
        </div>
      </div>;
    });
    const percRec = Number(this.state.ratings) || 20;
    const selFilts = this.props.rawFilt.map((raw, index) => {
      if (raw === true) {
        return <div className='starSelected' key={index + 'starSelected'}>{(index + 1) + ' Star'}</div>;
      }
    });
    const SelButton = () => {
      if (this.props.rawFilt.includes(true)) {
        return <button onClick={this.props.resFilt} id='activeFilters' className='activeFilters'>{selFilts}</button>;
      } else {
        return <div className='placeholding'>1 Star 2 star 3 star 4 star 5 star </div>;
      }
    };
    return <React.Fragment>
      <div className='revBreakdown'>
        <div>
          <h1 className='revAverage, centerRevItem'>{Number(this.state.ratings)}</h1>
          <div className='centerRevItem'>
            <div className='ratings'>
              <div className='empty-stars'>{'\u2606'}{'\u2606'}{'\u2606'}{'\u2606'}{'\u2606'}</div>
              <div className='full-stars' style={{width: (percRec * 20)}}>{'\u2605\u2605\u2605\u2605\u2605'}</div>
            </div>
          </div>
        </div>
        <div className='centerRevItem'>
          <div className='revRecommended'>{this.state.recommended}% of reviews recommend this product</div>
        </div>
        <div className='centerRevItem'>

          <div className='starFilter' onClick={this.props.handleFilter}>
            <div className='starPadding'><label id='5starButton' className='labelPadding'>5 Star</label>
              <div className='starRatings'>
                <div className='empty-starBars'>|</div>
                <div className='full-starBars' style={{width: Number(this.state.starCounts['5']) / this.state.revTotal * 100 + '%' || 0}}></div>
              </div>
            </div>
            <div className='starPadding'><label id='4starButton' className='labelPadding'>4 Star</label>
              <div className='starRatings'>
                <div className='empty-starBars'>|</div>
                <div className='full-starBars' style={{width: Number(this.state.starCounts['4']) / this.state.revTotal * 100 + '%' || 0}}></div>
              </div>
            </div>
            <div className='starPadding'><label id='3starButton' className='labelPadding'>3 Star</label>
              <div className='starRatings'>
                <div className='empty-starBars'>|</div>
                <div className='full-starBars' style={{width: Number(this.state.starCounts['3']) / this.state.revTotal * 100 + '%' || 0}}></div>
              </div>
            </div>
            <div className='starPadding'><label id='2starButton' className='labelPadding'>2 Star</label>
              <div className='starRatings'>
                <div className='empty-starBars'>|</div>
                <div className='full-starBars' style={{width: Number(this.state.starCounts['2']) / this.state.revTotal * 100 + '%' || 0}}></div>
              </div>
            </div>
            <div className='starPadding'><label id='1starButton' className='labelPadding'>1 Star</label>
              <div className='starRatings'>
                <div className='empty-starBars'>|</div>
                <div className='full-starBars' style={{width: Number(this.state.starCounts['1']) / this.state.revTotal * 100 + '%' || 0}}></div>
              </div>
            </div>
          </div>
        </div>
        <SelButton />
        {charDivs}
      </div>
    </React.Fragment>;
  }
}