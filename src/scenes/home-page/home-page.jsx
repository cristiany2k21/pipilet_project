import React from 'react';

import Footer from '../../components/footer/footer';

import HeaderTitle from './components/header-title/header-title';
import DisplayImage from './components/display-image/display-image';

import family from './images/family.jpg';

import './styles/home-page.sass';

const HomeContainer = () => {

	return (
	<div>
		<HeaderTitle/>
		<DisplayImage image={family}/>
		<Footer/>
	</div>
	);
};

export default HomeContainer;
