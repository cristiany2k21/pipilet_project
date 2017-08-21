import React from 'react';
import { connect } from 'react-redux';

import HeaderPage from '../../components/header-page';

import FamilyChildren from './components/family-children';
import DisplayFlag from '../../components/flag';
import ImagePipilet from '../../components/footer-number-color';

import './styles/index.scss';

const NumberSelection = ({
  numberPageContent,
  children
}) => {
  if (children)
      return children
  return (
    <div>
      <HeaderPage title={numberPageContent.title} />
      <FamilyChildren />
      <DisplayFlag flag={numberPageContent.flag} path="number" />
      <ImagePipilet />
    </div>
  )
};

const mapStateToProps = state => {
  return state.ChooseLanguage
}

export default connect(mapStateToProps)(NumberSelection);