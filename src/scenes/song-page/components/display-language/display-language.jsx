import React from 'react';
import Link from 'react-router/lib/Link';
import note1 from '../../../../images/music-image/note-1.png';
import note2 from '../../../../images/music-image/note-2.png';
import note3 from '../../../../images/music-image/note-3.png';
import note4 from '../../../../images/music-image/note-4.png';

import './style/display-language.sass';

const DisplayLanguageSong = ({
  language
}) => {
  return (
    <div id="wrapper-language">
      <div className="wrapper-display-language">
        <img src={note1} className="absolute-language note1"/>
        <img src={note2} className="absolute-language note2"/>
        <img src={note3} className="absolute-language note3"/>
        <img src={note4} className="absolute-language note4"/>
        <img src={note1} className="absolute-language note5"/>
        <img src={note4} className="absolute-language note6"/>
        <img src={note3} className="absolute-language note7"/>
        <img src={note1} className="absolute-language note8"/>
        <Link to="/song/english" className="scale absolute-language english">
          <div >{language.english}</div>
        </Link>
        <Link to="/song/india" className="scale absolute-language indian">
          <div >{language.india}</div>
        </Link>
        <Link to="/song/french" className="scale absolute-language french">
          <div >{language.french}</div>
        </Link>
        <Link to="/song/lebanon" className="scale absolute-language arab">
          <div >{language.arab}</div>
        </Link>
        <Link to="/song/ghana" className="scale absolute-language african">
          <div >{language.africa}</div>
        </Link>
        <Link to="/song/serbia" className="scale absolute-language serbia">
          <div >{language.serbia}</div>
        </Link>
        <Link to="/song/italy" className="scale absolute-language italian">
          <div >{language.italy}</div>
        </Link>
        <Link to="/song/spanish" className="scale absolute-language spanish">
          <div >{language.spanish}</div>
        </Link>
        <Link to="/song/china" className="scale absolute-language china">
          <div >{language.china}</div>
        </Link>
        <Link to="/song/german" className="scale absolute-language germany">
          <div >{language.german}</div>
        </Link>
        <Link to="/song/russia" className="scale absolute-language russian">
          <div >{language.russia}</div>
        </Link>
        <Link to="/song/brasil" className="scale absolute-language portuguese">
          <div >{language.portugal}</div>
        </Link>
      </div>
    </div>
  )
};

export default DisplayLanguageSong;