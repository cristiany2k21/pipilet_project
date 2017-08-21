import React from 'react';
import { connect } from 'react-redux';

import HeaderPage from '../../components/header-page';
import FamilyOwls from './components/family-owls';
import DisplayFlag from '../../components/flag';
import ImagePipilet from '../../components/footer-number-color';

import './style/index.scss';

const ColorSelection = ({
  ColorPageContent
}) => {
  return (
    <div>
      <HeaderPage title={ColorPageContent.title} />
      <FamilyOwls />
      <DisplayFlag flag={ColorPageContent.flag} path="color" />
      <ImagePipilet />
    </div>
  )
};

const mapStateToProps = state => state.ChooseLanguage;

export default connect(mapStateToProps)(ColorSelection);