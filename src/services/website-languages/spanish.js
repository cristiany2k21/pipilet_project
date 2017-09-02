import React from'react';

import information from './information';

import male from '../../images/cook/pipilet_male.jpg';
import female from '../../images/cook/pipilet_female.jpg';

import imagePipilet from '../../images/pipilet-description.jpg';

import winterIsHereTranslated from '../songs/spa/winter-is-here';
import fallFallBallonTranslated from '../songs/spa/fall-fall-ballon';
import theWashermanTranslated from '../songs/spa/the-washerman';
import ticTicTicTranslated from '../songs/spa/tic-tic-tic';
import siMaMaKaTranslated from '../songs/spa/si-ma-ma-ka';
import theCourtyardOfMyHouseTranslated from '../songs/spa/the-courtyard-of-my-house';
import giramosalRededorDelMoralTranslated from '../songs/spa/here-we-go-round-the-mulberry-bush';
import itsRainningTranslated from '../songs/spa/its-rainning';
import dosTigresViejosTranslated from '../songs/spa/two-tigers';
import seHaCasadoRosaTranslated from '../songs/spa/spring-has-come';
import patACakeTranslated from '../songs/spa/pat-a-cake';
import mondayMorningTranslated from '../songs/spa/on-monday-morning';

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

import englishRecipe from '../cook/spa/europe/english';
import frenchRecipe from '../cook/spa/europe/french';
import russiaRecipe from '../cook/spa/europe/russia';
import germanRecipe from '../cook/spa/europe/german';
import spanishRecipe from '../cook/spa/europe/spanish';
import italyRecipe from '../cook/spa/europe/italy';
import serbiaRecipe from '../cook/spa/europe/serbia';

import australiaRecipe from '../cook/spa/oceania/australie';
import vanuatuRecipe from '../cook/spa/oceania/vanuatu';
import zelandaRecipe from '../cook/spa/oceania/zelande';

import keniaRecipe from '../cook/spa/africa/kenya';
import beninRecipe from '../cook/spa/africa/benin';
import marocRecipe from '../cook/spa/africa/maroc';
import tunezRecipe from '../cook/spa/africa/tunisie';
import egyptRecipe from '../cook/spa/africa/egypte';
import madaRecipe from '../cook/spa/africa/malagasy';
import algeriaRecipe from '../cook/spa/africa/algerie';

import mexicRecipe from '../cook/spa/america/mexico';
import canadaRecipe from '../cook/spa/america/canadien';
import brasilRecipe from '../cook/spa/america/brasil';
import guyaneRecipe from '../cook/spa/america/guyane';
import chiliRecipe from '../cook/spa/america/chilie';
import haitiRecipe from '../cook/spa/america/haiti';
import argentineRecipe from '../cook/spa/america/argentine';
import UsaRecipe from '../cook/spa/america/usa';

import singapurRecipe from '../cook/spa/asia/singapour';
import arabieRecipe from '../cook/spa/asia/arabia';
import indiaRecipe from '../cook/spa/asia/india';
import libanRecipe from '../cook/spa/asia/liban';
import chinaRecipe from '../cook/spa/asia/china';
import vietnamRecipe from '../cook/spa/asia/vietnam';
import jordanieRecipe from '../cook/spa/asia/jordania';

import { presentation } from '../presentation/spanish';

import owls_1 from '../../scenes/color-number-page/images/esp/owls-1.png';
import owls_2 from '../../scenes/color-number-page/images/esp/owls-2.png';
import owls_3 from '../../scenes/color-number-page/images/esp/owls-3.png';

import children from '../../scenes/color-number-page/images/esp/children.png';

import allColorEsp from '../../images/all-colors-esp.png';
import allNumberEsp from '../../scenes/color-number-page/images/esp/children.png';

export default (
  {
    "lan": "esp",
    "navbar": information.getNavbar("Acogida", "Presentación", "Contacto"),
    "sidebar": information.getSidebar("LAS CANCIONES", "LOS COLORES Y LOS NÚMEROS", "LA REPOSTERÍA", "¿ SABES QUIÊN SOY ?"),
    "songPageContent": {
      "title": "LAS CANCIONES",
      "language": {
        "english": "INGLÉS",
        "arab": "ARABE",
        "italy": "ITALIANO",
        "french": "FRANCÉS",
        "german": "ALEMÁN",
        "russia": "RUSO",
        "china": "CHINO",
        "spanish": "ESPAÑOL",
        "india": "HINDI",
        "africa": "AFRICANO",
        "portugal": "PORTUGUÉS",
        "serbia": "SERBIO",
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
      "titleColor": "LOS COLORES",
      "imageColor": allColorEsp,
      "titleNumber": "LOS NUMEROS",
      "imageNumber": allNumberEsp
    },
    "colorPageContent": {
      "titleColor": "LOS COLORES",
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
      "titleNumber": "LOS NUMEROS",
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
      "title": "APRENDIENDO LOS COLORES CON TU AMIGO",
      "rules": [
        "En la parte de abajo encontrarás:",
        "* una sopa de letras con los colores a buscar",
        "* un mandala para que puedas colorear a tu gusto.",
        "!Tú eres fuertes seguro que lo harás bien.!",
      ],
      "headerFirstColumn": "APRENDIENDO LOS COLORES EN",
      "originalLanguage": {
        "id": "spanish",
        "name": "ESPAÑOL",
        "data": information.spanishColor
      },
      "translated": [
        { "id": "brasil", "name": "PORTUGÉS", "data": information.brasilColor },
        { "id": "china", "name": "CHINO", "subTitle":"SE ESCRIBE", "subSubTitle":"SE PRONUNCIA", "data": information.chinaColor },
        { "id": "english", "name": "INGLÉS", "data": information.englishColor },
        { "id": "french", "name": "FRANCÉS", "data": information.frenchColor },
        { "id": "german", "name": "ALEMAN", "data": information.germanColor },
        { "id": "india", "name": "HINDI", "subTitle":"SE ESCRIBE", "subSubTitle":"SE PRONUNCIA", "data": information.indiaColor },
        { "id": "italy", "name": "ITALIANO", "data": information.italyColor },
        { "id": "russia", "name": "RUSO", "subTitle":"SE ESCRIBE", "subSubTitle":"SE PRONUNCIA", "data": information.russiaColor },
        { "id": "serbia", "name": "SERBIO", "subTitle":"SE ESCRIBE", "subSubTitle":"SE PRONUNCIA", "data": information.serbiaColor },
        { "id": "arab", "name": "ARABE", "subTitle":"SE ESCRIBE", "subSubTitle":"SE PRONUNCIA", "data": information.southColor },
        { "id": "spanish", "name": "ESPAÑOL", "data": information.spanishColor },
        { "id": "tanzania", "name": "SWAHILI", "data": information.tanzaniaColor },
      ]
    },
    "cookerPageContent": {
      "title": "LA RESPOSTERÍA",
      "description": <div>
        <span className="red"><b>TU AMIGO HA</b></span> DECIDIDO RECORRER <span
        className="dodgerblue"><b>EL MUNDO</b></span> Y HA VISITADO <span className="green"><b>LOS CINCO CONTINENTES</b></span>.
        RECOPILANDO DELICIOSOS POSTRES DE <span className="yellow"><b>DIFERENTES PAÍSES DEL MUNDO</b></span>
      </div>,
      "image": map,
    },
    "chooseCountryContent": {
      "america": {
        "name": "america",
        "title": "TALLER DE COCINA AMERICANA",
        "country": [
          { name: "ARGENTINA", type: female, recipe: argentineRecipe },
          { name: "BRASIL", type: male, recipe: brasilRecipe },
          { name: "HAITI", type: female, recipe: haitiRecipe },
          { name: "CHILE", type: female, recipe: chiliRecipe },
          { name: "GUAYANAS", type: male, recipe: guyaneRecipe },
          { name: "MÉJICO", type: female, recipe: mexicRecipe },
          { name: "USA", type: female, recipe: UsaRecipe },
          { name: "CANADA", type: male, recipe: canadaRecipe }
        ],
      },
      "oceania": {
        "name": "oceania",
        "title": "TALLER DE COCINA DE OCEANÍA",
        "country": [
          { name: "AUSTRALIA", type: female, recipe: australiaRecipe },
          { name: "VANUATU", type: male, recipe: vanuatuRecipe },
          { name: "NUEVA ZELANDA", type: male, recipe: zelandaRecipe },
        ]
      },
      "europe": {
        "name": "europe",
        "title": "TALLER DE COCINA EUROPEA",
        "country": [
          { name: "INGLATERRA", type: female, recipe: englishRecipe },
          { name: "FRANCIA", type: male, recipe: frenchRecipe },
          { name: "ALEMANIA", type: female, recipe: germanRecipe },
          { name: "ESPAÑA", type: female, recipe: spanishRecipe },
          { name: "ITALIA", type: male, recipe: italyRecipe },
          { name: "RUSIA", type: female, recipe: russiaRecipe },
          { name: "SERBIA", type: female, recipe: serbiaRecipe },
        ],
      },
      "africa": {
        "name": "africa",
        "title": "TALLER DE COCINA AFRICANA",
        "country": [
          { name: "BENIN", type: female, recipe: beninRecipe },
          { name: "KENIA", type: male, recipe: keniaRecipe },
          { name: "TÚNEZ", type: female, recipe: tunezRecipe },
          { name: "EGIPTO", type: female, recipe: egyptRecipe },
          { name: "ARGELIA", type: male, recipe: algeriaRecipe },
          { name: "MARRUECOS", type: female, recipe: marocRecipe },
          { name: "MADAGASCAR", type: female, recipe: madaRecipe },
        ]
      },
      "asia": {
        "name": "asia",
        "title": "TALLER DE COCINA ASIÁTICA",
        "country": [
          { name: "JORDANIA", type: female, recipe: jordanieRecipe },
          { name: "SINGAPUR", type: male, recipe: singapurRecipe },
          { name: "VIETNAM", type: female, recipe: vietnamRecipe },
          { name: "CHINA", type: female, recipe: chinaRecipe },
          { name: "LÍBANO", type: male, recipe: libanRecipe },
          { name: "INDIA", type: female, recipe: indiaRecipe },
          { name: "ARABIA SAUDITA", type: female, recipe: arabieRecipe },
        ],
      }
    },
    "presentationPageContent": {
      "image-pipilet": imagePipilet,
      "text": presentation
    }
  }
)