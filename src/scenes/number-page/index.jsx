import React from 'react';
import { connect } from 'react-redux';

import './styles/index.scss';
import HeaderNumber from './components/header';
import DisplayFlag from './components/flag';
import ImagePipilet from './components/image-pipilet';

const NumberSelection = ({
  numberPageContent
}) => {
  return (
    <div>
      <HeaderNumber title={numberPageContent.title} />
      <DisplayFlag flag={numberPageContent.flag}/>
      <ImagePipilet />
    </div>
  )
};

const mapStateToProps = state => {
  return state.ChooseLanguage.language
}

export default connect(mapStateToProps)(NumberSelection);