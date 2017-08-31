import React from 'react';
import { connect } from 'react-redux';
import Language from '../../services/color';

import HeaderColor from './components/header';
import TableColor from './components/table';
import Game from './components/game';
import Drawing from './components/drawing';

import './style/index.scss';


const TranslatedColor = ({
  colorPage,
  translatedColor
}) => {

  let sameLanguage = (colorPage.originalLanguage.id == translatedColor.id);

  return (
    <div id="wrapper-translated-color">
      <HeaderColor
        title={colorPage.title}
        rules={colorPage.rules}/>
      <TableColor
        originalColor={colorPage.originalLanguage}
        translatedColor={translatedColor}
        sameLanguage={sameLanguage}
      />
      { translatedColor.game &&
      <Game
        originalGame={colorPage.originalLanguage.game}
        translatedGame={translatedColor.game}
        sameLanguage={sameLanguage} /> }
      <Drawing draw={translatedColor.drawing} />
    </div>
  )
};

const mapStateToProps = (state, props) => ({
    translatedColor: Language[props.params.language],
    colorPage: state.ChooseLanguage.colorTranslatedPageContent
});

export default connect(mapStateToProps)(TranslatedColor);

