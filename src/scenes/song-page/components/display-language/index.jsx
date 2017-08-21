import React from 'react';
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
              <div className="absolute-language english">{language.english}</div>
              <div className="absolute-language indian">{language.arab}</div>
              <div className="absolute-language french">{language.italy}</div>
              <div className="absolute-language arab">{language.french}</div>
              <div className="absolute-language african">{language.german}</div>
              <div className="absolute-language serbia">{language.russia}</div>
              <div className="absolute-language italian">{language.china}</div>
              <div className="absolute-language spanish">{language.spanish}</div>
              <div className="absolute-language china">{language.india}</div>
              <div className="absolute-language germany">{language.africa}</div>
              <div className="absolute-language russian">{language.portugal}</div>
              <div className="absolute-language portuguese">{language.serbia}</div>
            </div>
        </div>
    )
};

export default DisplayLanguageSong;