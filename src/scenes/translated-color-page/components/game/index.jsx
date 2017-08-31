import React from 'react';

import MotCroise from './components/mot-croise';

import './style/index.scss';

const Game = ({
  originalGame,
  translatedGame,
  sameLanguage
}) => {
  return (
    <div id="wrapper-game">
      <MotCroise original={originalGame} translated={translatedGame} sameLanguage={sameLanguage}/>
    </div>
  )
};

export default Game;