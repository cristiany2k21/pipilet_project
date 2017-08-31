import information from './information';

import male from '../../images/cook/pipilet_male.jpg';
import female from '../../images/cook/pipilet_female.jpg';

import colorFrench from '../color/french';
import imagePipilet from '../../images/pipilet-description.jpg';

import winterIsHereTranslated from '../songs/fr/winter-is-here';
import fallFallBallonTranslated from '../songs/fr/fall-fall-ballon';
import theWashermanTranslated from '../songs/fr/the-washerman';
import ticTicTicTranslated from '../songs/fr/tic-tic-tic';
import siMaMaKaTranslated from '../songs/fr/si-ma-ma-ka';
import theCourtyardOfMyHouseTranslated from '../songs/fr/the-courtyard-of-my-house';
import giramosalRededorDelMoralTranslated from '../songs/fr/here-we-go-round-the-mulberry-bush';
import itsRainningTranslated from '../songs/fr/its-rainning';
import dosTigresViejosTranslated from '../songs/fr/two-tigers';
import seHaCasadoRosaTranslated from '../songs/fr/spring-has-come';
import patACakeTranslated from '../songs/fr/pat-a-cake';
import mondayMorningTranslated from '../songs/fr/on-monday-morning';

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

import keniaRecipe from '../cook/fr/africa/helado';
import beninRecipe from '../cook/fr/africa/bananas';
import marocRecipe from '../cook/fr/africa/bizcocho';
import tunezRecipe from '../cook/fr/africa/ghriyba';
import egyptRecipe from '../cook/fr/africa/guzeya';
import madaRecipe from '../cook/fr/africa/malagasy';
import algeriaRecipe from '../cook/fr/africa/rellenos';

import mexicRecipe from '../cook/fr/america/bizcocho';
import canadaRecipe from '../cook/fr/america/trempettes';
import brasilRecipe from '../cook/fr/america/quindim';
import guyaneRecipe from '../cook/fr/america/mango';
import chiliRecipe from '../cook/fr/america/cupcakes';
import haitiRecipe from '../cook/fr/america/banana';
import argentineRecipe from '../cook/fr/america/alfajores';

import singapurRecipe from '../cook/fr/asia/melocoton';
import arabieRecipe from '../cook/fr/asia/maskina';
import indiaRecipe from '../cook/fr/asia/lassi';
import libanRecipe from '../cook/fr/asia/labneh';
import chinaRecipe from '../cook/fr/asia/helado';
import vietnamRecipe from '../cook/fr/asia/che';
import jordanieRecipe from '../cook/fr/asia/chamia';

import { presentation } from '../presentation/french';

import owls_1 from '../../scenes/color-number-page/images/fr/owls-1.png';
import owls_2 from '../../scenes/color-number-page/images/fr/owls-2.png';
import owls_3 from '../../scenes/color-number-page/images/fr/owls-3.png';

import children from '../../scenes/color-number-page/images/fr/children.png';


import allColorFr from '../../images/all-colors-fr.png';
import allNumberEsp from '../../scenes/color-number-page/images/fr/children.png';

export default (
  {
    "lan": "fr",
    "navbar": information.getNavbar("Accueil", "Présentation", "Contact"),
    "sidebar": information.getSidebar("LES CHANSONS", "LES COULEURS ET LES CHIFFRES", "LES PÂTISSERERIES", "SAIS-TU QUI JE SUIS ?"),
    "songPageContent": {
      "title": "LES CHANSONS",
      "language": {
        "english": "ANGLAIS",
        "arab": "ARABE",
        "italy": "ITALIEN",
        "french": "FRANÇAIS",
        "german": "ALLEMAND",
        "russia": "RUSSE",
        "china": "CHINOIS",
        "spanish": "ESPAGNOL",
        "india": "INDE",
        "africa": "AFRICAIN",
        "portugal": "PORTUGAIS",
        "serbia": "SERBIE",
      },
      "flag": information.getFlagsMusic(),
      "music": [
        { "name": "lebanon", "translated-song": ticTicTicTranslated, "original-song": ticTicTicOriginal },
        { "name": "ghana", "translated-song": siMaMaKaTranslated, "original-song": siMaMaKaOriginal },
        { "name": "china", "translated-song": dosTigresViejosTranslated, "original-song": dosTigresViejosOriginal },
        { "name": "german", "translated-song": winterIsHereTranslated, "original-song": winterIsHereOriginal },
        { "name": "india", "translated-song": theWashermanTranslated, "original-song": theWashermanOriginal },
        { "name": "brasil", "translated-song": fallFallBallonTranslated, "original-song": fallFallBallonOriginal },
        { "name": "italy", "translated-song": seHaCasadoRosaTranslated, "original-song": seHaCasadoRosaOriginal },
        { "name": "french", "translated-song": mondayMorningTranslated, "original-song": mondayMorningOriginal },
        {
          "name": "english",
          "translated-song": giramosalRededorDelMoralTranslated,
          "original-song": giramosalRededorDelMoralOriginal
        },
        { "name": "serbia", "translated-song": itsRainningTranslated, "original-song": itsRainningOriginal },
        { "name": "russia", "translated-song": patACakeTranslated, "original-song": patACakeOriginal },
        {
          "name": "spanish",
          "translated-song": theCourtyardOfMyHouseTranslated,
          "original-song": theCourtyardOfMyHouseOriginal
        },
      ]
    },
    "colorNumberContent": {
      "titleColor": "LES COULEURS",
      "imageColor": allColorFr,
      "titleNumber": "LES NOMBRES",
      "imageNumber": allNumberEsp
    },
    "colorPageContent": {
      "titleColor": "LES COULEURS",
      "owls": [
        {
          image: owls_1,
          countryName: [
            "french",
            "india",
            "spanish",
            "russia"
          ]
        },
        {
          image: owls_2,
          countryName: [
            "german",
            "serbia",
            "italy",
            "china"
          ]
        },
        {
          image: owls_3,
          countryName: [
            "english",
            "tanzania",
            "brasil",
            "southAfrica"
          ]
        }
      ],
    },
    "numberPageContent": {
      "titleNumber": "LES NOMBRES",
      "imageNumber": [
        {
          image: children,
          countryName: [
            "french",
            "china",
            "german",
            "spanish",
            "italy",
            "serbia",
            "brasil",
            "india",
            "english",
            "tanzania",
            "russia",
            "southAfrica",
          ]
        }
      ]
    },
    "colorTranslatedPageContent": {
      "title": "APPREND LES COULEURS AVEC TON AMI",
      "rules": [
        "En bas tu trouveras:",
        "* un jeu de mots melangés sur le theme des couleurs",
        "* un mandala à colorier comme tu veux",
        "Tu est fort pas de doute que tu reussiras !",
      ],
      "headerFirstColumn": "LES COULEURS EN",
      "originalLanguage": {
        "id": "french",
        "name": "FRANÇAISE",
        "data": information.frenchColor
      },
      "translated": [
        { "id": "brasil", "name": "PORTUGAIS", "data": information.brasilColor },
        { "id": "china", "name": "CHINOIS", "subTitle":"S’ÉCRIT", "subSubTitle":"SE PRONONCE", "data": information.chinaColor },
        { "id": "english", "name": "ANGLAIS", "data": information.englishColor },
        { "id": "french", "name": "FRANÇAISE", "data": information.frenchColor },
        { "id": "german", "name": "ALLEMAND", "data": information.germanColor },
        { "id": "india", "name": "INDIEN", "subTitle":"S’ÉCRIT", "subSubTitle":"SE PRONONCE", "data": information.indiaColor },
        { "id": "italy", "name": "ITALIEN", "data": information.italyColor },
        { "id": "russia", "name": "RUSSE", "subTitle":"S’ÉCRIT", "subSubTitle":"SE PRONONCE", "data": information.russiaColor },
        { "id": "serbia", "name": "SERBE", "subTitle":"S’ÉCRIT", "subSubTitle":"SE PRONONCE", "data": information.serbiaColor },
        { "id": "arab", "name": "ARABE", "subTitle":"S’ÉCRIT", "subSubTitle":"SE PRONONCE", "data": information.southColor },
        { "id": "spanish", "name": "ESPAGNOL", "data": information.spanishColor },
        { "id": "tanzania", "name": "SWAHILI", "data": information.tanzaniaColor },
      ]
    },
    "cookerPageContent": {
      "title": "LES RECETTES",
      "description": "TON AMI A FAIL LE TOUR DES CINQ CONTINENTS ET NOTÉ DIFFÉRENTS RECETTES DÉLICIEUSES DE DIFFÉRENTS PAYS DU MONDE.",
      "image": map,
    },
    "chooseCountryContent": {
      "america": {
        "name": "america",
        "title": "ATELIER DE CUISINE AMÉRICAINE",
        "country": [
          { name: "ARGENTINE", type: female, recipe: argentineRecipe },
          { name: "BRÉSIL", type: male, recipe: brasilRecipe },
          { name: "HAÏTI", type: female, recipe: haitiRecipe },
          { name: "CHILI", type: female, recipe: chiliRecipe },
          { name: "GUAYANE.F", type: male, recipe: guyaneRecipe },
          { name: "MEXIQUE", type: female, recipe: mexicRecipe },
          { name: "ÉTATS-UNIS", type: female, recipe: canadaRecipe },
          { name: "CANADA", type: male, recipe: canadaRecipe }
        ],
      },
      "oceania": {
        "name": "oceania",
        "title": "ATELIER DE CUISINE DE L’OCÉANIE",
        "country": [
          { name: "AUSTRALIE", type: female, recipe: australiaRecipe },
          { name: "VANUATU", type: male, recipe: vanuatuRecipe },
          { name: "NOUVELLE ZÉLANDE", type: male, recipe: zelandaRecipe },
        ]
      },
      "europe": {
        "name": "europe",
        "title": "ATELIER DE CUISINE EUROPÉENNE",
        "country": [
          { name: "ANGLETERRE", type: female, recipe: englishRecipe },
          { name: "FRANCE", type: male, recipe: frenchRecipe },
          { name: "ALLEMAGNE", type: female, recipe: germanRecipe },
          { name: "ESPAGNE", type: female, recipe: spanishRecipe },
          { name: "ITALIE", type: male, recipe: italyRecipe },
          { name: "RUSSIE", type: female, recipe: russiaRecipe },
          { name: "SERBIE", type: female, recipe: serbiaRecipe },
        ],
      },
      "africa": {
        "name": "africa",
        "title": "TALLER DE COCINA AFRICANA",
        "country": [
          { name: "BENIN", type: female, recipe: beninRecipe },
          { name: "KENYA", type: male, recipe: keniaRecipe },
          { name: "TUNISIE", type: female, recipe: tunezRecipe },
          { name: "EGYPTE", type: female, recipe: egyptRecipe },
          { name: "ALGERIE", type: male, recipe: algeriaRecipe },
          { name: "MAROC", type: female, recipe: marocRecipe },
          { name: "MADAGASCAR", type: female, recipe: madaRecipe },
        ]
      },
      "asia": {
        "name": "asia",
        "title": "ATELIER DE CUISINE ASIATIQUE",
        "country": [
          { name: "JORDANIE", type: female, recipe: jordanieRecipe },
          { name: "SINGAPOUR", type: male, recipe: singapurRecipe },
          { name: "VIETNAM", type: female, recipe: vietnamRecipe },
          { name: "CHINE", type: female, recipe: chinaRecipe },
          { name: "LÍBAN", type: male, recipe: libanRecipe },
          { name: "INDE", type: female, recipe: indiaRecipe },
          { name: "ARABIE SAUDITE", type: female, recipe: arabieRecipe },
        ],
      }
    },
    "presentationPageContent": {
      "image-pipilet": imagePipilet,
      "text": presentation
    }
  }
)