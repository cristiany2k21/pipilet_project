import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import logoColor from '../../images/pipilet-number-color.jpg';
import Section from '../../components/section';
import Footer from '../../components/footer';
import './style/number-page.sass';

const NumberPage = ({
  titleNumber,
  imageNumber
}) => {
    return (
        <div id="wrapper-number-page" >
          <Section path="/number" image={imageNumber} title={titleNumber} logo={logoColor} extraClassName="number" />
          <Footer />
        </div>
    )
};

const mapStateToProps = state => ({
  titleNumber: state.ChooseLanguage.numberPageContent.titleNumber,
  imageNumber: state.ChooseLanguage.numberPageContent.imageNumber,
});

export default connect(mapStateToProps)(NumberPage);