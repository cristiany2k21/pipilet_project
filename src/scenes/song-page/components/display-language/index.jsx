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
    return (
        <div id="wrapper-language">
            <div className="wrapper-image">
              <img src={pipiletSong} />
            </div>
            <div className="wrapper-display-language">
              <img src={note1} className="absolute-language note1" />
              <img src={note2} className="absolute-language note2" />
              <img src={note3} className="absolute-language note3" />
              <img src={note4} className="absolute-language note4" />
              <img src={note1} className="absolute-language note5" />
              <img src={note4} className="absolute-language note6" />
              <img src={note3} className="absolute-language note7" />
              <img src={note1} className="absolute-language note8" />
              <Link to="/song/english">
              <div className="absolute-language english">{language.english}</div>
              </Link>
              <Link to="/song/india">
              <div className="absolute-language indian">{language.india}</div>
              </Link>
              <Link to="/song/french">
              <div className="absolute-language french">{language.french}</div>
              </Link>
              <Link to="/song/lebanon">
              <div className="absolute-language arab">{language.arab}</div>
              </Link>
              <Link to="/song/ghana">
              <div className="absolute-language african">{language.africa}</div>
              </Link>
              <Link to="/song/serbia">
              <div className="absolute-language serbia">{language.serbia}</div>
              </Link>
              <Link to="/song/italy">
              <div className="absolute-language italian">{language.italy}</div>
              </Link>
              <Link to="/song/spanish">
              <div className="absolute-language spanish">{language.spanish}</div>
              </Link>
              <Link to="/song/china">
              <div className="absolute-language china">{language.china}</div>
              </Link>
              <Link to="/song/german">
              <div className="absolute-language germany">{language.german}</div>
              </Link>
              <Link to="/song/russia">
              <div className="absolute-language russian">{language.russia}</div>
              </Link>
              <Link to="/song/brasil">
              <div className="absolute-language portuguese">{language.portugal}</div>
              </Link>
            </div>
        </div>
    )
};

export default DisplayLanguageSong;