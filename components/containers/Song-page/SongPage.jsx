import React from 'react';
import { connect } from 'react-redux';
import HeaderSong from './header/HeaderSong';
import DisplayLanguageSong from './display-language/DisplayLanguageSong';
import ChooseFlag from './choose-flag/ChooseFlag';

const SongPage = ({
  songPageContent
}) => {
    return (
        <div>
            <HeaderSong title={songPageContent.header.title} />
            <DisplayLanguageSong />
            <ChooseFlag />
        </div>
    )
};

const mapStateToProps = state => {
  console.log('state ------> ', state);
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(SongPage);