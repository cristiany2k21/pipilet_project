/* eslint-disable no-unused-vars */
import React from 'react';
import information from './information';

import male from '../../images/cook/pipilet_male.jpg';
import female from '../../images/cook/pipilet_female.jpg';

import imagePipilet from '../../images/pipilet-description.jpg';

import winterIsHereTranslated from '../songs/eng/winter-is-here';
import fallFallBallonTranslated from '../songs/eng/fall-fall-ballon';
import theWashermanTranslated from '../songs/eng/the-washerman';
import ticTicTicTranslated from '../songs/eng/tic-tic-tic';
import siMaMaKaTranslated from '../songs/eng/si-ma-ma-ka';
import theCourtyardOfMyHouseTranslated from '../songs/eng/the-courtyard-of-my-house';
import giramosalRededorDelMoralTranslated from '../songs/eng/here-we-go-round-the-mulberry-bush';
import itsRainningTranslated from '../songs/eng/its-rainning';
import dosTigresViejosTranslated from '../songs/eng/two-tigers';
import seHaCasadoRosaTranslated from '../songs/eng/spring-has-come';
import patACakeTranslated from '../songs/eng/pat-a-cake';
import mondayMorningTranslated from '../songs/eng/on-monday-morning';

import winterIsHereOriginal from '../songs/original/winter-is-here';
import fallFallBallonOriginal from '../songs/original/fall-fall-ballon';
import theWashermanOriginal from '../songs/original/the-washerman';
import ticTicTicOriginal from '../songs/original/tic-tic-tic';
import siMaMaKaOriginal from '../songs/original/si-ma-ma-ka';
import theCourtyardOfMyHouseOriginal from '../songs/original/the-courtyard-of-my-house';
import giramosalRededorDelMoralOriginal from '../songs/original/here-we-go-round-the-mulberry-bush';
import itsRainningOriginal from '../songs/original/its-rainning';
import dosTigresViejosOriginal from '../songs/original/two-tigers';
import seHaCasadoRosaOriginal from '../songs/original/spring-has-come';
import patACakeOriginal from '../songs/original/pat-a-cake';
import mondayMorningOriginal from '../songs/original/on-monday-morning';

import map from '../../images/map.png';

import englishRecipe from '../cook/fr/europe/fairy_cakes';
import frenchRecipe from '../cook/fr/europe/mousseDeChocolate';
import russiaRecipe from '../cook/fr/europe/manzanasAsadas';
import germanRecipe from '../cook/fr/europe/galletaDePascua';
import spanishRecipe from '../cook/fr/europe/macedonia';
import italyRecipe from '../cook/fr/europe/mouse';
import serbiaRecipe from '../cook/fr/europe/tarta';

import australiaRecipe from '../cook/fr/oceania/alba';
import vanuatuRecipe from '../cook/fr/oceania/helado';
import zelandaRecipe from '../cook/fr/oceania/pavlova';

import keniaRecipe from '../cook/fr/africa/kenya';
import beninRecipe from '../cook/fr/africa/benin';
import marocRecipe from '../cook/fr/africa/maroc';
import tunezRecipe from '../cook/fr/africa/tunisie';
import egyptRecipe from '../cook/fr/africa/egypt';
import madaRecipe from '../cook/fr/africa/malagasy';
import algeriaRecipe from '../cook/fr/africa/algerie';

import mexicRecipe from '../cook/fr/america/mexique';
import canadaRecipe from '../cook/fr/america/canada';
import brasilRecipe from '../cook/fr/america/quindim';
import guyaneRecipe from '../cook/fr/america/guyane';
import chiliRecipe from '../cook/fr/america/chilie';
import haitiRecipe from '../cook/fr/america/haiti';
import argentineRecipe from '../cook/fr/america/argentine';

import singapurRecipe from '../cook/fr/asia/singapour';
import arabieRecipe from '../cook/fr/asia/maskina';
import indiaRecipe from '../cook/fr/asia/india';
import libanRecipe from '../cook/fr/asia/liban';
import chinaRecipe from '../cook/fr/asia/china';
import vietnamRecipe from '../cook/fr/asia/vietnam';
import jordanieRecipe from '../cook/fr/asia/jordanie';

import arabeColorDownload from '../download/colors/eng/color_eng_arabe.pdf';
import brasilColorDownload from '../download/colors/eng/color_eng_brasil.pdf';
import englishColorDownload from '../download/colors/eng/color_eng_english.pdf';
import chinaColorDownload from '../download/colors/eng/color_eng_china.pdf';
import frenchColorDownload from '../download/colors/eng/color_eng_french.pdf';
import germanColorDownload from '../download/colors/eng/color_eng_german.pdf';
import indiaColorDownload from '../download/colors/eng/color_eng_india.pdf';
import italyColorDownload from '../download/colors/eng/color_eng_italy.pdf';
import russiaColorDownload from '../download/colors/eng/color_eng_russia.pdf';
import serbiaColorDownload from '../download/colors/eng/color_eng_serbia.pdf';
import spanishColorDownload from '../download/colors/eng/color_eng_spanish.pdf';
import swahiliColorDownload from '../download/colors/eng/color_eng_swahili.pdf';

import { presentation } from '../presentation/english';

import owls_1 from '../../scenes/color-number-page/images/eng/eng_owls-1.png';
import owls_2 from '../../scenes/color-number-page/images/eng/eng_owls-2.png';
import owls_3 from '../../scenes/color-number-page/images/eng/eng_owls-3.png';

import children from '../../scenes/color-number-page/images/eng/eng_children.png';

import allColorEng from '../../images/all-colors-eng.png';
import allNumberEsp from '../../scenes/color-number-page/images/eng/eng_children.png';

import { whoarewe } from '../who-are-we/spanish';

const navbar = [
	'Home',
	'Presentation',
	'Pipilet Mandala',
	'Videos',
	'Contact'
];

const sidebar = [
	'SONGS',
	'COLORS AND NUMBERS',
	'PASTRIES',
	'DO YOU KNOW WHO I AM ?'
];


export default (
{
	lan: 'eng',
	navbar: information.getNavbar(navbar, sidebar),
	sidebar: information.getSidebar(sidebar),
	songPageContent: {
		title: 'SONGS',
		language: {
			english: 'ENGLISH',
			arab: 'ARABIC',
			italy: 'ITALIAN',
			french: 'FRENCH',
			german: 'GERMAN',
			russia: 'RUSSIA',
			china: 'CHINESE',
			spanish: 'SPANISH',
			india: 'INDIA',
			africa: 'SWAHILI',
			portugal: 'PORTUGUESE',
			serbia: 'SERBA'
		},
		flag: information.getFlagsMusic(),
		music: [
			{
				name: 'lebanon', 'translated-song': ticTicTicTranslated,
				'original-song': ticTicTicOriginal
			},
			{
				name: 'ghana',
				'translated-song': siMaMaKaTranslated,
				'original-song': siMaMaKaOriginal
			},
			{
				name: 'china',
				'translated-song': dosTigresViejosTranslated,
				'original-song': dosTigresViejosOriginal
			},
			{
				name: 'german',
				'translated-song': winterIsHereTranslated,
				'original-song': winterIsHereOriginal
			},
			{
				name: 'india',
				'translated-song': theWashermanTranslated,
				'original-song': theWashermanOriginal
			},
			{
				name: 'brasil',
				'translated-song': fallFallBallonTranslated,
				'original-song': fallFallBallonOriginal
			},
			{
				name: 'italy',
				'translated-song': seHaCasadoRosaTranslated,
				'original-song': seHaCasadoRosaOriginal
			},
			{
				name: 'french',
				'translated-song': mondayMorningTranslated,
				'original-song': mondayMorningOriginal
			},
			{
				name: 'english',
				'translated-song': giramosalRededorDelMoralTranslated,
				'original-song': giramosalRededorDelMoralOriginal
			},
			{
				name: 'serbia',
				'translated-song': itsRainningTranslated,
				'original-song': itsRainningOriginal
			},
			{
				name: 'russia',
				'translated-song': patACakeTranslated,
				'original-song': patACakeOriginal
			},
			{
				name: 'spanish',
				'translated-song': theCourtyardOfMyHouseTranslated,
				'original-song': theCourtyardOfMyHouseOriginal
			}
		]
	},
	colorNumberContent: {
		titleColor: 'COLORS',
		imageColor: allColorEng,
		titleNumber: 'NUMBERS',
		imageNumber: allNumberEsp
	},
	colorPageContent: {
		titleColor: 'COLORS',
		owls: [
			{
				image: owls_1,
				countryName: [
					'french',
					'india',
					'spanish',
					'russia'
				]
			},
			{
				image: owls_2,
				countryName: [
					'german',
					'serbia',
					'italy',
					'china'
				]
			},
			{
				image: owls_3,
				countryName: [
					'english',
					'tanzania',
					'brasil',
					'southAfrica'
				]
			}
		]
	},
	numberPageContent: {
		titleNumber: 'NUMBERS',
		imageNumber: [
			{
				image: children,
				countryName: [
					'french',
					'china',
					'german',
					'spanish',
					'italy',
					'serbia',
					'brasil',
					'india',
					'english',
					'tanzania',
					'russia',
					'southAfrica'
				]
			}
		]
	},
	colorTranslatedPageContent: {
		title: 'LEARN COLORS WITH YOUR FRIEND',
		headerFirstColumn: 'LEARNS COLORS IN',
		originalLanguage: {
			id: 'english',
			name: 'ENGLISH',
			data: information.englishColor
		},
		translated: [
			{
				id: 'arab',
				name: 'ARABE',
				subTitle: 'IS WRITTEN',
				subSubTitle: 'IT’S PRONOUNCED',
				data: information.southColor,
				download: arabeColorDownload
			},
			{
				id: 'brasil',
				name: 'PORTUGUESE',
				data: information.brasilColor,
				download: brasilColorDownload
			},
			{
				id: 'china',
				name: 'CHINESE',
				subTitle: 'IS WRITTEN',
				subSubTitle: 'IT’S PRONOUNCED',
				data: information.chinaColor,
				download: chinaColorDownload
			},
			{
				id: 'english',
				name: 'ENGLISH',
				data: information.englishColor,
				download: englishColorDownload
			},
			{
				id: 'french',
				name: 'FRENCH',
				data: information.frenchColor,
				download: frenchColorDownload
			},
			{
				id: 'german',
				name: 'GERMAN',
				data: information.germanColor,
				download: germanColorDownload
			},
			{
				id: 'india',
				name: 'HINDI',
				subTitle: 'IS WRITTEN',
				subSubTitle: 'IT’S PRONOUNCED',
				data: information.indiaColor,
				download: indiaColorDownload
			},
			{
				id: 'italy',
				name: 'ITALIAN',
				data: information.italyColor,
				download: italyColorDownload
			},
			{
				id: 'russia',
				name: 'RUSSIAN',
				subTitle: 'IS WRITTEN',
				subSubTitle: 'IT’S PRONOUNCED',
				data: information.russiaColor,
				download: russiaColorDownload
			},
			{
				id: 'serbia',
				name: 'SERBIO',
				subTitle: 'IS WRITTEN',
				subSubTitle: 'IT’S PRONOUNCED',
				data: information.serbiaColor,
				download: serbiaColorDownload
			},
			{
				id: 'spanish',
				name: 'SPANISH',
				data: information.spanishColor,
				download: spanishColorDownload
			},
			{
				id: 'tanzania',
				name: 'SWAHILI',
				data: information.tanzaniaColor,
				download: swahiliColorDownload
			}
		]
	},
	cookerPageContent: {
		title: 'RECIPES',
		description:
		<div>
			<span className='red'><b>YOUR FRIEND</b></span> MADE THE TOUR <span
		className='dodgerblue'><b>OF FIVE CONTINENTES</b></span> AND BROUGHT
			BACK<span className='green'><b>VARIOUS DELICIOUS </b></span>.
			RECIPES OF <span
		className='yellow'><b>CONTRIES OF THE WORLD</b></span>
		</div>,
		image: map
	},
	chooseCountryContent: {
		america: {
			name: 'america',
			title: 'AMERICAN COOKING WORKSHOP',
			country: [
				{name: 'ARGENTINA', type: female, recipe: argentineRecipe},
				{name: 'BRAZIL', type: male, recipe: brasilRecipe},
				{name: 'HAITI', type: female, recipe: haitiRecipe},
				{name: 'CHILE', type: female, recipe: chiliRecipe},
				{name: 'FRENCH GUIANA', type: male, recipe: guyaneRecipe},
				{name: 'MEXICO', type: female, recipe: mexicRecipe},
				{name: 'USA', type: female, recipe: canadaRecipe},
				{name: 'CANADA', type: male, recipe: canadaRecipe}
			]
		},
		oceania: {
			name: 'oceania',
			title: 'SOUTH SEA ISLANDS COOKING WORKSHOP',
			country: [
				{name: 'AUSTRALIA', type: female, recipe: australiaRecipe},
				{name: 'VANUATU', type: male, recipe: vanuatuRecipe},
				{name: 'NEW ZEALAND', type: male, recipe: zelandaRecipe}
			]
		},
		europe: {
			name: 'europe',
			title: 'EUROPEAN COOKING WORKSHOP',
			country: [
				{name: 'ENGLAND', type: female, recipe: englishRecipe},
				{name: 'FRANCE', type: male, recipe: frenchRecipe},
				{name: 'GERMANY', type: female, recipe: germanRecipe},
				{name: 'SPAIN', type: female, recipe: spanishRecipe},
				{name: 'ITALY', type: male, recipe: italyRecipe},
				{name: 'RUSSIA', type: female, recipe: russiaRecipe},
				{name: 'SERBIE', type: female, recipe: serbiaRecipe}
			]
		},
		africa: {
			name: 'africa',
			title: 'TALLER DE COCINA AFRICANA',
			country: [
				{name: 'BENIN', type: female, recipe: beninRecipe},
				{name: 'KENYA', type: male, recipe: keniaRecipe},
				{name: 'TUNISIE', type: female, recipe: tunezRecipe},
				{name: 'EGYPTE', type: female, recipe: egyptRecipe},
				{name: 'ALGERIE', type: male, recipe: algeriaRecipe},
				{name: 'MAROC', type: female, recipe: marocRecipe},
				{name: 'MADAGASCAR', type: female, recipe: madaRecipe}
			]
		},
		asia: {
			name: 'asia',
			title: 'ASIAN COOKING WORKSHOP',
			country: [
				{name: 'JORDAN', type: female, recipe: jordanieRecipe},
				{name: 'SINGAPORE', type: male, recipe: singapurRecipe},
				{name: 'VIETNAM', type: female, recipe: vietnamRecipe},
				{name: 'CHINA', type: female, recipe: chinaRecipe},
				{name: 'LEBANON', type: male, recipe: libanRecipe},
				{name: 'INDIA', type: female, recipe: indiaRecipe},
				{name: 'SOUDI ARABIE', type: female, recipe: arabieRecipe}
			]
		}
	},
	presentationPageContent: {
		imagepipilet: imagePipilet,
		text: presentation
	},
	WhoarewePageContent: {
		whoarewe: whoarewe
	}
});
