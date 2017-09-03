import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import Link from 'react-router/lib/Link';
import logoNumbercolor from '../../images/pipilet-number-color.jpg';
import Footer from '../../components/footer';
import Header from '../../components/header-page';
import './styles/index.sass';

const ColorNumber = ({
  titleColor,
  imageColor,
  titleNumber,
  imageNumber
}) => {

  return (
    <div id="wrapper-colornumber">
      <Header title={titleColor} logo={logoNumbercolor}/>
      <div className="wrapper-all-image">
        <Link to="/color">
          <img src={imageColor}/>
        </Link>
      </div>
      <Header title={titleNumber} logo={logoNumbercolor}/>
      <div className="wrapper-all-image">
        <Link to="/number">
          <img src={imageNumber}/>
        </Link>
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = state => ({
  titleColor: state.ChooseLanguage.colorNumberContent.titleColor,
  imageColor: state.ChooseLanguage.colorNumberContent.imageColor,
  titleNumber: state.ChooseLanguage.colorNumberContent.titleNumber,
  imageNumber: state.ChooseLanguage.colorNumberContent.imageNumber
});

export default connect(mapStateToProps)(ColorNumber);