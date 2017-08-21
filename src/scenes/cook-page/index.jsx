import React from 'react';
import { connect } from 'react-redux';
import HeaderPage from '../../components/header-page';

import Description from './components/description';
import Map from './components/map';
import Footer from './components/footer';

import map from './images/map.jpg';
import map_africa from './images/map_africa.jpg';
import map_amerique from './images/map_america.jpg';
import map_asia from './images/map_asia.jpg';
import map_europe from './images/map_europe.jpg';
import map_oceania from './images/map_oceania.jpg';

import './style/index.scss';

const CookPage = ({
  cookerPageContent
}) => {
    return (
        <div id="wrapper-cooker-page">
          <HeaderPage title={cookerPageContent.title} />
          <Description description={cookerPageContent.description} />
          <Map
            map={map}
            map_africa={map_africa}
            map_america={map_amerique}
            map_asia={map_asia}
            map_europe={map_europe}
            map_oceania={map_oceania}
          />
          <Footer />
        </div>
    )
};

const mapStateToProps = state => {
  return state.ChooseLanguage;
}

export default connect(mapStateToProps)(CookPage);