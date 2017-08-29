import React from 'react';
import HeaderTitle from './components/header-title';
import DisplayImage from './components/display-image';

import family from './images/family.jpg';
import logoPipilet from '../../images/pipilet-rainbow.jpg';

import './styles/index.scss';

const HomeContainer = () => {

  return (
    <div>
      <HeaderTitle />
      <DisplayImage image={family} width="750"/>
      <DisplayImage image={logoPipilet} width="700"/>
    </div>
  )
}

export default HomeContainer;