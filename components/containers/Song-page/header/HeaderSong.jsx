import React from 'react';
import pipiletMandala from '../../../../images/pipilet-horizontal.jpg';
import NoteMusic from '../../../../images/note_music.jpg';

const HeaderSong = ({
  title
}) => {
    return (
        <div id="wrapper-header">
          <div className="wrapper-image">
            <img src={NoteMusic} alt="music note" width="95%" />
          </div>
          <div className="wrapper-title">
            <h1>{title}</h1>
            <img src={pipiletMandala} alt="" width="700"/>
          </div>
        </div>
    )
};

export default HeaderSong;