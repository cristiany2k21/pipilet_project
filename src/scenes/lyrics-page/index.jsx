import React from 'react';
import { connect } from 'react-redux';
import HeaderLyrics from './components/header';
import LyricsSong from './components/lyrics';
import VideoYoutube from './components/video-youtube';
import Sheet from './components/sheet';

import './styles/index.scss';

const LyricsPage = ({ songPageContent, params }) => {

  const language = params.language;
  const index = songPageContent.music.map(index => index.name).indexOf(language);
  const music = songPageContent.music[index];
  const musicTranslated = music['translated-song']
  const musicOriginal = music['original-song']
  const title = musicOriginal["second-title"] ? `${musicOriginal.title} ${musicOriginal["second-title"]}` : musicOriginal.title
  let sameLryics = (musicTranslated.id == musicOriginal.id) ? true : false

  return (
    <div>
      <HeaderLyrics title={title} image={musicOriginal.image} imageFlag={musicOriginal.flag}/>
      <LyricsSong musicTranslated={musicTranslated} musicOriginal={musicOriginal} sameLyrics={sameLryics}/>
      <VideoYoutube music={musicOriginal} sameLyrics={sameLryics}/>
      {musicOriginal.sheet && <Sheet sheet={musicOriginal.sheet}/>}
    </div>
  )
};

const mapStateToProps = state => state.ChooseLanguage;

export default connect(mapStateToProps)(LyricsPage);
