import React from 'react';
import { connect } from 'react-redux';

import logoColor from '../../images/pipilet-number-color.jpg';

import Section from './component/section';
import Footer from '../../components/footer';

import './styles/index.scss';

const ColorNumber = ({
  titleColor,
  imageColor,
  titleNumber,
  imageNumber
}) => {

  return (
    <div id="wrapper-colornumber">
      <Section path="/color" image={imageColor} title={titleColor} logo={logoColor} extraClassName="color" />
      <Section path="/number" image={imageNumber} title={titleNumber} logo={logoColor} extraClassName="number" />
      <Footer />
    </div>
  )
};

const mapStateToProps = state => ({
  titleColor: state.ChooseLanguage.colorNumberContent.titleColor,
  imageColor: state.ChooseLanguage.colorNumberContent.owls,
  titleNumber: state.ChooseLanguage.colorNumberContent.titleNumber,
  imageNumber: state.ChooseLanguage.colorNumberContent.imageNumber
})

export default connect(mapStateToProps)(ColorNumber);