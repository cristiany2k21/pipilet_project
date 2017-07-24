import React from 'react';
import YoutubeVideo from 'react-youtube';

import "../../styles/index.scss";
import pipiletSong from "../../../../images/pipilet-song.jpg";

const LyricsSong = ({
  musicTranslated,
  musicOriginal
}) => {
  return (
    <div id="wrapper-lyrics-song">
      <div className="wrapper-original-language">
        <div className="original-language">
          <h1>{musicOriginal.title}</h1>
          <h2>{musicOriginal.language}</h2>
          {
            musicOriginal.couplet.map((items, index) => {
              return (
                <p key={index}>
                  {
                    items.map((item, index) => {
                      return (
                        <div key={index}>
                          {item}
                        </div>
                      )
                    })
                  }
                </p>
              )
            })
          }
          <YoutubeVideo
            videoId={musicOriginal.youtubeId}
          />
        </div>
      </div>
      <div className="wrapper-selected-language">
        <div className="selected-language">
          <h1>{musicTranslated.title}</h1>
          <h2>{musicTranslated.language}</h2>
          {
            musicTranslated.couplet.map((items, index) => {
              return (
                <p key={index}>
                  {
                    items.map((item, index) => {
                      return (
                        <div key={index}>
                          {item}
                        </div>
                      )
                    })
                  }
                </p>
              )
            })
          }
        </div>
        <div className="image-pipilet-song">
          <img src={pipiletSong} width="250" />
        </div>
      </div>

    </div>
  )
};

export default LyricsSong;