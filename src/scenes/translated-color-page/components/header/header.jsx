import React from 'react';
import pipilet from '../../../../images/pipilet-number-color.jpg';
import pipiletMandala from '../../../../images/pipilet-horizontal.jpg';
import logoDownload from '../../../../images/icon-download.jpg';

const HeaderColor = ({
	                     title,
	                     nameCountry,
	                     download,
	                     nameDownload,
	                     languageWebsite,
												idColor
                     }) => {

	let rules = [];
	const arrayCountry2Mandala = [
		'serbia',
		'china',
		'arab',
		'russia',
		'india'
	];

	switch (languageWebsite) {
	case 'esp': {
		if (arrayCountry2Mandala.indexOf(idColor) != -1)
			rules = [
				'En la parte de abajo encontrarás:',
				'dos mandalas para que puedas colorear a tu gusto.',
				'!Tú eres fuertes seguro que lo harás bien.!'
			];
		else
			rules = [
				'En la parte de abajo encontrarás:',
				'* una sopa de letras en ' + nameCountry.toLowerCase() + ' con los colores a buscar',
				'* un mandala para que puedas colorear a tu gusto.',
				'!Tú eres fuertes seguro que lo harás bien.!'
			];
		break;
	}
	case 'fr': {
		if (arrayCountry2Mandala.indexOf(idColor) != -1)
			rules = [
				'En bas tu trouveras:',
				'* deux mandalas à colorier comme tu veux',
				'!Tu est fort pas de doute que tu reussiras!'
			];
		else
			rules = [
				'En bas tu trouveras:',
				'* un jeu de mots melangés en ' + nameCountry.toLowerCase() + ' sur le theme des couleurs',
				'* un mandala à colorier comme tu veux',
				'!Tu est fort pas de doute que tu reussiras!'
			];
		break;
	}
	case 'eng': {
		if (arrayCountry2Mandala.indexOf(idColor) != -1)
			rules = [
				'Under you will find:',
				'Two mandalas that you can colour the way you want.',
				'!You are strong no doubt that you will manage!'
			];
		else
			rules = [
				'Under you will find:',
				'* Mixed words in ' + nameCountry.toLowerCase() + ' with colours as a theme',
				'* A mandala that you can colour the way you want.',
				'!You are strong no doubt that you will manage!'
			];
		break;
	}}

	return (
	<div id="wrapper-header">
		<div className="wrapper-image-pipilet">
			<img src={pipilet} alt="logo"/>
		</div>

		<div className="wrapper-title-rules">
			<div className="wrapper-title">{title}</div>
			<div className="wrapper-logo-pipilet">
				<img src={pipiletMandala} alt="logo"/>
			</div>
			<div className="wrapper-rules-download">
				<div className="wrapper-rules">
					{
						rules.map((rule, index) => <div key={index}>{rule}</div>)
					}
				</div>
				<div className="wrapper-download">
					<a href={download} download={nameDownload}>
						<img src={logoDownload} alt="logo"/>
					</a>
				</div>
			</div>
		</div>
	</div>
	);
};

export default HeaderColor;
