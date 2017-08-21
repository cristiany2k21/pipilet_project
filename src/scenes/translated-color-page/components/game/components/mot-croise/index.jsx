import React from 'react';

import ListWords from './components/list-word';
import GridWord from './components/grid-word';
const MotCroise = ({
  original,
  translated,
  sameLanguage
}) => {
  const widthListWork = sameLanguage ? "" : "50%";

  return (
    <div id="wrapper-mot-croise">
      <div className="wrapper-word">
        <ListWords words={original.words} language={original.language} widthListWork={widthListWork} />
        { !sameLanguage && <ListWords words={translated.words} language={translated.language} widthListWork={widthListWork} /> }
      </div>
      <div className="wrapper-grid">
        <GridWord grid={translated.grid}/>
      </div>
    </div>
  )
};

export default MotCroise;