import React from 'react';

import Header from './components/header';
import MotCroise from './components/mot-croise';

import './style/index.scss';

const Game = ({
  originalGame,
  translatedGame,
  sameLanguage
}) => {
  return (
    <div id="wrapper-game">
      <Header originalTitle={originalGame.title} translatedTitle={translatedGame.title} />
      <MotCroise original={originalGame} translated={translatedGame} sameLanguage={sameLanguage}/>
    </div>
  )
};

export default Game;