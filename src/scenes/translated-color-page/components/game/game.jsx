import React from 'react';

import MotCroise from './components/mot-croise/mot-croise';

import './style/game.sass';

const Game = ({
	              originalGame,
	              translatedGame,
	              sameLanguage,
	              secondLanguage,
	              firstLanguage
              }) => {
	return (
	<div id="wrapper-game">
		<MotCroise firstLanguage={firstLanguage} secondLanguage={secondLanguage}
		           original={originalGame} translated={translatedGame}
		           sameLanguage={sameLanguage}/>
	</div>
	);
};

export default Game;
