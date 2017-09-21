import React from 'react';
import { connect } from 'react-redux';
import Language from '../../services/color';

import HeaderColor from './components/header/header';
import TableColor from './components/table/table';
import Game from './components/game/game';
import Drawing from './components/drawing/drawing';

import './style/translated-color-page.sass';

const TranslatedColor = ({
	                         colorPage,
	                         translatedColor
                         }) => {

	const sameLanguage = (colorPage.originalLanguage.id == translatedColor.id);
	const idTranslatedColor = translatedColor.id;
	const index = colorPage.translated.map(index => index.id).indexOf(idTranslatedColor);
	const colorTranslated = colorPage.translated[index];

	return (
	<div id="wrapper-translated-color">
		<HeaderColor
		title={colorPage.title}
		rules={colorPage.rules}
		download={colorTranslated.download}
		nameDownload={`${colorTranslated.name} COLOR.pdf`}
		/>
		<TableColor
		headerFirstColumn={colorPage.headerFirstColumn}
		headerThirdColumn={colorTranslated.name}
		headerFourColumn={colorTranslated.subSubTitle}
		subTitle={colorTranslated.subTitle}
		originalColor={colorPage.originalLanguage}
		translatedColor={translatedColor}
		sameLanguage={sameLanguage}
		/>
		{translatedColor.game &&
		<Game
		originalGame={colorPage.originalLanguage.data.game}
		translatedGame={translatedColor.game}
		sameLanguage={sameLanguage}
		secondLanguage={colorTranslated.name}
		firstLanguage={colorPage.originalLanguage.name}/>
		}
		<Drawing draw={translatedColor.drawing}/>
	</div>
	);
};

const mapStateToProps = (state, props) => ({
	translatedColor: Language[props.params.language],
	colorPage: state.ChooseLanguage.colorTranslatedPageContent
});

export default connect(mapStateToProps)(TranslatedColor);

