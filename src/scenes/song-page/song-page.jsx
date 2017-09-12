import React from 'react';
import { connect } from 'react-redux';

import logo from '../../images/pipilet-song.jpg';

import HeaderPage from '../../components/header-page';
import Footer from '../../components/footer';
import DisplayLanguageSong from './components/display-language/display-language';
import ChooseFlag from './components/choose-flag/choose-flag';

import './styles/song-page.sass';

const SongPage = ({
  title,
  language,
  flag
}) => {
  return (
    <div>
      <HeaderPage title={title} logo={logo} />
      <DisplayLanguageSong language={language} />
      <ChooseFlag flag={flag} />
      <Footer />
    </div>
  )
};

const mapStateToProps = state => ({
  title: state.ChooseLanguage.songPageContent.title,
  language: state.ChooseLanguage.songPageContent.language,
  flag: state.ChooseLanguage.songPageContent.flag,
});

export default connect(mapStateToProps)(SongPage);