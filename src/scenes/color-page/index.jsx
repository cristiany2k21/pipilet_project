import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import logoColor from '../../images/pipilet-number-color.jpg';
import Section from './component/section';

const ColorPage = ({
  titleColor,
  imageColor
}) => {
    return (
        <div id="wrapper-color-page">
          <Section path="/color" image={imageColor} title={titleColor} logo={logoColor} extraClassName="color" />
        </div>
    )
};

const mapStateToProps = state => ({
  titleColor: state.ChooseLanguage.colorNumberContent.titleColor,
  imageColor: state.ChooseLanguage.colorNumberContent.owls,
})

export default connect(mapStateToProps)(ColorPage)