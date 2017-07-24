import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderLyrics from './components/header';
import LyricsSong from './components/lyrics';
import Sheet from './components/sheet';

import './styles/index.scss';

class LyricsPage extends Component {

  render() {

    const { songPageContent, params } = this.props;
    const idSong = params.id;
    const musicTranslated = songPageContent.music[idSong]['translated-song']
    const musicOriginal = songPageContent.music[idSong]['original-song']

    console.log('musicOriginal.sheet ------> ', musicOriginal.sheet);
    return (
      <div>
        <HeaderLyrics title={musicOriginal.title} image={musicOriginal.image}/>
        <LyricsSong musicTranslated={musicTranslated} musicOriginal={musicOriginal}/>
        {musicOriginal.sheet && <Sheet sheet={musicOriginal.sheet}/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(LyricsPage);