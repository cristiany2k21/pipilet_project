import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import EarthSnow from '../../images/earth-snow.jpg';

import french from '../../../../images/flag/french.png';
import english from '../../../../images/flag/english.jpg';
import italy from '../../../../images/flag/italy.png';
import serbia from '../../../../images/flag/serbia.png';
import spanish from '../../../../images/flag/spanish.png';
import brasil from '../../../../images/flag/brasil.png';
import india from '../../../../images/flag/india.jpg';
import russia from '../../../../images/flag/russia.jpg';
import german from '../../../../images/flag/german.jpg';
import china from '../../../../images/flag/china.jpg';
import ghana from '../../../../images/flag/ghana.jpg';
import lebanon from '../../../../images/flag/lebanon.jpg';

class ChooseFlag extends Component {

  constructor() {
    super();
    this.shiftColorEnter = this.shiftColorEnter.bind(this);
    this.images = [
      { "0": "lebanon", lebanon },
      { "1": "ghana", ghana },
      { "2": "china", china },
      { "3": "german", german },
      { "4": "india", india },
      { "5": "brasil", brasil },
      { "6": "italy", italy },
      { "7": "french", french },
      { "8": "english", english },
      { "9": "serbia", serbia },
      { "10": "russia", russia },
      { "11": "spanish", spanish }
    ]
  }

  shiftColorEnter(country) {
    this.props.dispatch({
      type: "COUNTRY_SELECTED_SONG",
      country
    })
  }

  render() {
    return (
      <div id="wrapper-flag">
        <div className="wrapper-circle">
          <ul className="circle-container">
            {
              this.images.map((item, index) => {
                return (
                  <Link to={`/song/${index}`} key={index} onClick={() => this.shiftColorEnter(item[index])}>
                    <li>
                      <img src={item[item[index]]} />
                    </li>
                  </Link>
                )
              })
            }
          </ul>
          <img
            src={EarthSnow}
            className="children-earth"/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state.ChooseLanguage.language,
    shift: state.SelectFlagSong.language.songPageContent.flag.shift,
    selected: state.SelectFlagSong.language.songPageContent.flag.selected
  }
}

export default connect(mapStateToProps)(ChooseFlag);