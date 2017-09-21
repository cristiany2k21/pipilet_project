import React from 'react';

const Ingredient = ({
	                    sectionIngredient,
	                    image
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
		<div className="wrapper-logo-recipe">
			<img src={image}/>
		</div>
	</div>
	);
};

export default Ingredient;
