import React from 'react';
import { connect } from 'react-redux';
import HeaderPage from '../../components/header-page';
import cooker from '../../images/pipilet-cooker.jpg';

import Description from './components/description';
import Map from './components/map';
import Footer from '../../components/footer';

import map from './images/map.png';

import './style/index.scss';

const CookPage = ({
  cookerPageContent
}) => {
  console.log('cookerPageContent ------> ', cookerPageContent.description);
    return (
        <div id="wrapper-cooker-page">
          <HeaderPage title={cookerPageContent.title} logo={cooker} />
          <Description description={cookerPageContent.description} />
          <Map map={map}/>
          <Footer />
        </div>
    )
};

const mapStateToProps = state => {
  return state.ChooseLanguage;
}

export default connect(mapStateToProps)(CookPage);