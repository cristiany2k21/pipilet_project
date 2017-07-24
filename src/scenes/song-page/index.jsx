import React from 'react';
import { connect } from 'react-redux';

import HeaderSong from './components/header';
import DisplayLanguageSong from './components/display-language';
import ChooseFlag from './components/choose-flag';

import './styles/index.scss';

const SongPage = ({
  songPageContent,
}) => {
  return (
    <div>
      <HeaderSong title={songPageContent.header.title}/>
      <DisplayLanguageSong />
      <ChooseFlag />
    </div>
  )
};

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(SongPage);