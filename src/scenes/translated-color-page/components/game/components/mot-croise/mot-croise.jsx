import React from 'react';

import ListWords from './components/list-word/list-word';
import GridWord from './components/grid-word/grid-word';
const MotCroise = ({
  original,
  translated,
  sameLanguage,
  secondLanguage,
  firstLanguage
}) => {
  const widthListWork = sameLanguage ? "" : "50%";

  return (
    <div id="wrapper-mot-croise">
      <div className="wrapper-word">
        <ListWords words={original.words} language={firstLanguage} widthListWork={widthListWork} />
        { !sameLanguage && <ListWords words={translated.words} language={secondLanguage} widthListWork={widthListWork} /> }
      </div>
      <div className="wrapper-grid">
        <GridWord grid={translated.grid}/>
      </div>
    </div>
  )
};

export default MotCroise;