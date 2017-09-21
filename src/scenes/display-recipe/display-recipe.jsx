import React from 'react';
import { connect } from 'react-redux';

import HeaderRecipe from './component/header-recipe/header-recipe';
import Recipe from './component/recipe/recipe';

import './style/display-recipe.sass';

const DisplayRecipe = ({
	                       recipeCountry,
	                       downloadRecipe
                       }) => {

	return (
	<div id="wrapper-display-recipe">
		<HeaderRecipe title={recipeCountry.title} flag={recipeCountry.flag}/>
		<Recipe recipe={recipeCountry.recipe} download={downloadRecipe} />
	</div>
	);
};

const mapStateToProps = (state, props) => {
	const continent = props.params.continent;
	const index = props.params.id;
	const allCountry = state.ChooseLanguage.chooseCountryContent[continent].country;

	return {
		recipeCountry: allCountry[index].recipe,
		downloadRecipe: allCountry[index].downloadRecipe
	};
};

export default connect(mapStateToProps)(DisplayRecipe);
