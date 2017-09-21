import React from 'react';
import logoDownload from '../../../../../../images/icon-download.jpg';

const Ingredient = ({
	                    sectionIngredient,
	                    image,
	                    download
                    }) => {
	return (
	<div className="wrapper-section-ingredient">
		<div className="wrapper-all-recipe">
			{
				sectionIngredient.map((items, index) => (
				<div key={index} className="wrapper-recipe">
					<div className="inner-recipe">
						<div className="wrapper-title-section">{items.title}</div>
						<ul>
							{
								items.ingredient.map((item, index) => (
								<li key={index}>
									{item}
								</li>
								))
							}
						</ul>
					</div>
				</div>
				))
			}
		</div>
		<div className="wrapper-logo-download">
			<a
			href={download}
			download={download}
			>
				<img src={logoDownload} className="little-draw"/>
			</a>
		</div>
		<div className="wrapper-logo-recipe">
			<img src={image}/>
		</div>
	</div>
	);
};

export default Ingredient;
