import React from 'react';

import Footer from '../../components/footer';

import HeaderTitle from './components/header-title';
import DisplayImage from './components/display-image';

import family from './images/family.jpg';

import './styles/index.scss';

const HomeContainer = () => {

  return (
    <div>
      <HeaderTitle />
      <DisplayImage image={family} />
      <Footer />
    </div>
  )
}

export default HomeContainer;