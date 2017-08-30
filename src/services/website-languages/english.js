import information from './information';

import male from '../../images/cook/pipilet_male.jpg';
import female from '../../images/cook/pipilet_female.jpg';

import colorEnglish from '../color/english';
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

import map from '../../images/map.jpg';

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

import { presentation } from '../presentation/english';

import owls_1 from '../../scenes/color-number-page/images/eng/owls-1.png';
import owls_2 from '../../scenes/color-number-page/images/eng/owls-2.png';
import owls_3 from '../../scenes/color-number-page/images/eng/owls-3.png';

import children from '../../scenes/color-number-page/images/eng/children.png';

export default (
  {
    "lan": "eng",
    "navbar": information.getNavbar("Home", "Presentation", "Contact"),
    "sidebar": information.getSidebar("SONGS", "COLORS AND NUMBERS", "PASTRIES", "DO YOU KNOW WHO I AM ?"),
    "songPageContent": {
      "title": "SONGS",
      "language": {
        "english": "ENGLISH",
        "arab": "ARABIC",
        "italy": "ITALIAN",
        "french": "FRENCH",
        "german": "GERMAN",
        "russia": "RUSSIA",
        "china": "CHINESE",
        "spanish": "SPANISH",
        "india": "INDIA",
        "africa": "SWAHILI",
        "portugal": "PORTUGUESE",
        "serbia": "SERBA",
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
        { "name": "english", "translated-song": giramosalRededorDelMoralTranslated, "original-song": giramosalRededorDelMoralOriginal },
        { "name": "serbia", "translated-song": itsRainningTranslated, "original-song": itsRainningOriginal },
        { "name": "russia", "translated-song": patACakeTranslated, "original-song": patACakeOriginal },
        { "name": "spanish", "translated-song": theCourtyardOfMyHouseTranslated, "original-song": theCourtyardOfMyHouseOriginal },
      ]
    },
    "colorNumberContent": {
      "titleColor":"COLORS",
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
      "titleNumber":"NUMBERS",
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
    "numberPageContent": {
      "title": "NUMBERS",
      "flag": information.getFlags()
    },
    "ColorPageContent": {
      "title": "COLORS",
      "flag": information.getFlags()
    },
    "colorTranslatedPageContent": {
      "title": "LEARN COLORS WITH YOUR FRIEND",
      "rules": [
        "Under you will find:",
        "* Mixed words in french with colours as a theme",
        "* A mandala that you can colour the way you want.",
        "You are strong no doubt that you will manage!",
      ],
      "originalLanguage": colorEnglish,
    },
    "cookerPageContent": {
      "title": "RECIPES",
      "description": "YOUR FRIEND MADE THE TOUR OF FIVE CONTINENTES AND BROUGHT BACK VARIOUS DELICIOUS RECIPES OF CONTRIES OF THE WORLD.",
      "image": map,
    },
    "chooseCountryContent": {
      "america": {
        "name": "america",
        "title": "AMERICAN COOKING WORKSHOP",
        "country": [
          { name: "ARGENTINA", type: female, recipe: argentineRecipe },
          { name: "BRAZIL", type: male, recipe: brasilRecipe },
          { name: "HAITI", type: female, recipe: haitiRecipe },
          { name: "CHILE", type: female, recipe: chiliRecipe },
          { name: "FRENCH GUIANA", type: male, recipe: guyaneRecipe },
          { name: "MEXICO", type: female, recipe: mexicRecipe },
          { name: "USA", type: female, recipe: canadaRecipe },
          { name: "CANADA", type: male, recipe: canadaRecipe }
        ],
      },
      "oceania": {
        "name": "oceania",
        "title": "SOUTH SEA ISLANDS COOKING WORKSHOP",
        "country": [
          { name: "AUSTRALIA", type: female, recipe: australiaRecipe },
          { name: "VANUATU", type: male, recipe: vanuatuRecipe },
          { name: "NEW ZEALAND", type: male, recipe: zelandaRecipe },
        ]
      },
      "europe": {
        "name": "europe",
        "title": "EUROPEAN COOKING WORKSHOP",
        "country": [
          { name: "ENGLAND", type: female, recipe: englishRecipe },
          { name: "FRANCE", type: male, recipe: frenchRecipe },
          { name: "GERMANY", type: female, recipe: germanRecipe },
          { name: "SPAIN", type: female, recipe: spanishRecipe },
          { name: "ITALY", type: male, recipe: italyRecipe },
          { name: "RUSSIA", type: female, recipe: russiaRecipe },
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
        "title": "ASIAN COOKING WORKSHOP",
        "country": [
          { name: "JORDAN", type: female, recipe: jordanieRecipe },
          { name: "SINGAPORE", type: male, recipe: singapurRecipe },
          { name: "VIETNAM", type: female, recipe: vietnamRecipe },
          { name: "CHINA", type: female, recipe: chinaRecipe },
          { name: "LEBANON", type: male, recipe: libanRecipe },
          { name: "INDIA", type: female, recipe: indiaRecipe },
          { name: "SOUDI ARABIE", type: female, recipe: arabieRecipe },
        ],
      }
    },
    "presentationPageContent": {
      "image-pipilet": imagePipilet,
      "text": presentation
    }
  }
)