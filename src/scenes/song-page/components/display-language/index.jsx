import React from 'react';
import { Link } from 'react-router';
import pipiletSong from '../../../../images/pipilet-song.jpg';
import note1 from '../../../../images/music-image/note-1.png';
import note2 from '../../../../images/music-image/note-2.png';
import note3 from '../../../../images/music-image/note-3.png';
import note4 from '../../../../images/music-image/note-4.png';

const DisplayLanguageSong = ({
  language
}) => {

  const activateItem = country => {

  };

  const desactivateItem = country => {

  };

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
        <Link to="/song/english" className="scale absolute-language english"
              onMouseEnter={() => activateItem(language.english)}
              onMouseLeave={() => desactivateItem(language.english)}>
          <div >{language.english}</div>
        </Link>
        <Link to="/song/india" className="scale absolute-language indian"
              onMouseEnter={() => activateItem(language.india)}
              onMouseLeave={() => desactivateItem(language.india)}>
          <div >{language.india}</div>
        </Link>
        <Link to="/song/french" className="scale absolute-language french"
              onMouseEnter={() => activateItem(language.french)}
              onMouseLeave={() => desactivateItem(language.french)}>
          <div >{language.french}</div>
        </Link>
        <Link to="/song/lebanon" className="scale absolute-language arab"
              onMouseEnter={() => activateItem(language.arab)}
              onMouseLeave={() => desactivateItem(language.arab)}>
          <div >{language.arab}</div>
        </Link>
        <Link to="/song/ghana" className="scale absolute-language african"
              onMouseEnter={() => activateItem(language.africa)}
              onMouseLeave={() => desactivateItem(language.africa)}>
          <div >{language.africa}</div>
        </Link>
        <Link to="/song/serbia" className="scale absolute-language serbia"
              onMouseEnter={() => activateItem(language.serbia)}
              onMouseLeave={() => desactivateItem(language.serbia)}>
          <div >{language.serbia}</div>
        </Link>
        <Link to="/song/italy" className="scale absolute-language italian"
              onMouseEnter={() => activateItem(language.italy)}
              onMouseLeave={() => desactivateItem(language.italy)}>
          <div >{language.italy}</div>
        </Link>
        <Link to="/song/spanish" className="scale absolute-language spanish"
              onMouseEnter={() => activateItem(language.spanish)}
              onMouseLeave={() => desactivateItem(language.spanish)}>
          <div >{language.spanish}</div>
        </Link>
        <Link to="/song/china" className="scale absolute-language china"
              onMouseEnter={() => activateItem(language.china)}
              onMouseLeave={() => desactivateItem(language.china)}>
          <div >{language.china}</div>
        </Link>
        <Link to="/song/german" className="scale absolute-language germany"
              onMouseEnter={() => activateItem(language.german)}
              onMouseLeave={() => desactivateItem(language.german)}>
          <div >{language.german}</div>
        </Link>
        <Link to="/song/russia" className="scale absolute-language russian"
              onMouseEnter={() => activateItem(language.russia)}
              onMouseLeave={() => desactivateItem(language.russia)}>
          <div >{language.russia}</div>
        </Link>
        <Link to="/song/brasil" className="scale absolute-language portuguese"
              onMouseEnter={() => activateItem(language.portugal)}
              onMouseLeave={() => desactivateItem(language.portugal)}>
          <div >{language.portugal}</div>
        </Link>
      </div>
    </div>
  )
};

export default DisplayLanguageSong;