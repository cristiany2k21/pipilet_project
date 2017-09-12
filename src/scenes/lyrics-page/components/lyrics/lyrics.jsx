import React from 'react';

import DisplayLyrics from './component/display-lyrics/display-lyrics';

import './style/lyrics.sass';

const LyricsSong = ({
  musicTranslated,
  musicOriginal,
  sameLyrics
}) => {
  const widthWrapper = sameLyrics ? "50%" : "100%";
  const widthLyrics = !sameLyrics ? "50%" : "100%";

  return (
    <div style={{ width: widthWrapper }} id="wrapper-lyrics-song">
      <DisplayLyrics cssExtraClassName="wrapper-original-language" music={musicOriginal} width={widthLyrics} />
      { !sameLyrics && <DisplayLyrics cssExtraClassName="wrapper-selected-language" music={musicTranslated} width={widthLyrics} /> }
    </div>
  )
};

export default LyricsSong;