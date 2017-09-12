import React from 'react';
import { connect } from 'react-redux';

import Language from '../../services/number';
import HeaderNumber from './components/header/header';
import TableNumber from './components/table/table';

import './styles/translated-number-page.sass';

const TranslatedNumber = ({
  numbers
}) => {
  return (
    <div id="translated-number">
      <HeaderNumber title={numbers.header} flag={numbers.flag}/>
      <TableNumber
        download={numbers.download}
        language={numbers}
        littleDraw={numbers.draw["little-draw"]}
        bigDraw={numbers.draw["big-draw"]}
      />
    </div>
  )
};

const mapStateToProps = (state, props) => ({
  numbers: Language[props.params.language]
});

export default connect(mapStateToProps)(TranslatedNumber);