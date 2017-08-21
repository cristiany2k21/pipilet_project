import React from 'react';
import { connect } from 'react-redux';

import HeaderPage from '../../components/header-page';
import DisplayLanguageSong from './components/display-language';
import ChooseFlag from './components/choose-flag';

import './styles/index.scss';

const SongPage = ({
  title,
  language,
  flag
}) => {
  return (
    <div>
      <HeaderPage title={title}/>
      <DisplayLanguageSong language={language} />
      <ChooseFlag flag={flag} />
    </div>
  )
};

const mapStateToProps = state => ({
  title: state.ChooseLanguage.songPageContent.title,
  language: state.ChooseLanguage.songPageContent.language,
  flag: state.ChooseLanguage.songPageContent.flag,
})

export default connect(mapStateToProps)(SongPage);