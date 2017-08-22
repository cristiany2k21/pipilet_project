import React from 'react';
import { connect } from 'react-redux';

import familyOwls from './images/family-owls.jpg';
import familyChildren from './images/family-children.jpg';

import Section from './component/section';

import './styles/index.scss';

const ColorNumber = ({
  titleColor,
  titleNumber
}) => {
  return (
    <div id="wrapper-colornumber">
      <Section path="/color" image={familyOwls} title={titleColor} />
      <Section path="/number" image={familyChildren} title={titleNumber} />
    </div>
  )
};

const mapStateToProps = state => ({
  titleColor: state.ChooseLanguage.colorNumberContent.titleColor,
  titleNumber: state.ChooseLanguage.colorNumberContent.titleNumber,
})

export default connect(mapStateToProps)(ColorNumber);