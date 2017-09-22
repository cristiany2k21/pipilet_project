import React from 'react';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

const HeaderRecipe = ({
	                      title,
	                      flag
                      }) => {
	return (
	<div className="wrapper-header-recipe">
		<div className="wrapper-image-girl-man">
			<img src={flag} alt="logo" />
		</div>
		<div className="wrapper-title">
			<div className="title">{title}</div>
		</div>
		<div className="wrapper-image-pipilet">
			<img src={pipiletCooker} alt="logo" />
		</div>
	</div>
	);
};

export default HeaderRecipe;
