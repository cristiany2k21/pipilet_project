import React from 'react';
import pipiletSong from '../../../../images/pipilet-song.jpg';

const DisplayLanguageSong = () => {
    return (
        <div id="wrapper-language">
            <div className="wrapper-image">
              <img src={pipiletSong} alt="" width="250" />
            </div>
            <div className="wrapper-display-language">
              <div className="absolute-language english">INGLES</div>
              <div className="absolute-language indian">INDIO</div>
              <div className="absolute-language french">FRANCÉS</div>
              <div className="absolute-language arab">ARABE</div>
              <div className="absolute-language african">AFRICANO</div>
              <div className="absolute-language serbia">SERBIO</div>
              <div className="absolute-language italian">ITALIANO</div>
              <div className="absolute-language spanish">ESPANOL</div>
              <div className="absolute-language china">CHINO</div>
              <div className="absolute-language germany">ALEMAN</div>
              <div className="absolute-language russian">RUSO</div>
              <div className="absolute-language portuguese">PORTUGUES</div>
            </div>
        </div>
    )
};

export default DisplayLanguageSong;