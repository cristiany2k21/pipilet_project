import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import logoColor from '../../images/pipilet-number-color.jpg';
import Section from '../../components/section';
import Footer from '../../components/footer';

import './style/index.scss';

const ColorPage = ({
  titleColor,
  imageColor
}) => {
    return (
        <div id="wrapper-color-page">
          <Section path="/color" image={imageColor} title={titleColor} logo={logoColor} extraClassName="color" />
          <Footer />
        </div>
    )
};

const mapStateToProps = state => ({
  titleColor: state.ChooseLanguage.colorPageContent.titleColor,
  imageColor: state.ChooseLanguage.colorPageContent.owls,
})

export default connect(mapStateToProps)(ColorPage)