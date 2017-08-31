import React from 'react';
import connect from 'react-redux/lib/connect/connect';
import Link from 'react-router/lib/Link';
import logoNumbercolor from '../../images/pipilet-number-color.jpg';
import allColor from '../../images/all-colors.png';
import allNumber from '../../images/all-number.png';
import Footer from '../../components/footer';
import Header from '../../components/header-page';
import './styles/index.scss';

const ColorNumber = ({
  titleColor,
  titleNumber,
}) => {

  return (
    <div id="wrapper-colornumber">
      <Header title={titleColor} logo={logoNumbercolor}/>
      <div className="wrapper-all-image">
        <Link to="">
          <img src={allColor}/>
        </Link>
      </div>
      <Header title={titleNumber} logo={logoNumbercolor}/>
      <div className="wrapper-all-image">
        <Link to="">
          <img src={allNumber}/>
        </Link>
      </div>
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