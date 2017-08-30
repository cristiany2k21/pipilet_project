import React from'react';

import information from './information';

import male from '../../images/cook/pipilet_male.jpg';
import female from '../../images/cook/pipilet_female.jpg';

import colorSpanish from '../color/spanish/';
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

import map from '../../images/map.jpg';

import englishRecipe from '../cook/spa/europe/fairy_cakes';
import frenchRecipe from '../cook/spa/europe/mousseDeChocolate';
import russiaRecipe from '../cook/spa/europe/manzanasAsadas';
import germanRecipe from '../cook/spa/europe/galletaDePascua';
import spanishRecipe from '../cook/spa/europe/macedonia';
import italyRecipe from '../cook/spa/europe/mouse';
import serbiaRecipe from '../cook/spa/europe/tarta';

import australiaRecipe from '../cook/spa/oceania/alba';
import vanuatuRecipe from '../cook/spa/oceania/helado';
import zelandaRecipe from '../cook/spa/oceania/pavlova';

import keniaRecipe from '../cook/spa/africa/helado';
import beninRecipe from '../cook/spa/africa/bananas';
import marocRecipe from '../cook/spa/africa/bizcocho';
import tunezRecipe from '../cook/spa/africa/ghriyba';
import egyptRecipe from '../cook/spa/africa/guzeya';
import madaRecipe from '../cook/spa/africa/malagasy';
import algeriaRecipe from '../cook/spa/africa/rellenos';

import mexicRecipe from '../cook/spa/america/bizcocho';
import canadaRecipe from '../cook/spa/america/trempettes';
import brasilRecipe from '../cook/spa/america/quindim';
import guyaneRecipe from '../cook/spa/america/mango';
import chiliRecipe from '../cook/spa/america/cupcakes';
import haitiRecipe from '../cook/spa/america/banana';
import argentineRecipe from '../cook/spa/america/alfajores';

import singapurRecipe from '../cook/spa/asia/melocoton';
import arabieRecipe from '../cook/spa/asia/maskina';
import indiaRecipe from '../cook/spa/asia/lassi';
import libanRecipe from '../cook/spa/asia/labneh';
import chinaRecipe from '../cook/spa/asia/helado';
import vietnamRecipe from '../cook/spa/asia/che';
import jordanieRecipe from '../cook/spa/asia/chamia';

import { presentation } from '../presentation/spanish';

import owls_1 from '../../scenes/color-number-page/images/esp/owls-1.png';
import owls_2 from '../../scenes/color-number-page/images/esp/owls-2.png';
import owls_3 from '../../scenes/color-number-page/images/esp/owls-3.png';

import children from '../../scenes/color-number-page/images/esp/children.png';

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
    "numberPageContent": {
      "title": "LOS NUMEROS",
      "flag": information.getFlags()
    },
    "ColorPageContent": {
      "title": "LOS COLORES",
      "flag": information.getFlags()
    },
    "colorTranslatedPageContent": {
      "title": "APRENDIENDO LOS COLORES CON TU AMIGO",
      "rules": [
        "En la parte de abajo encontrarás:",
        "* una sopa de letras con los colores a buscar",
        "* un mandala para que puedas colorear a tu gusto.",
        "!Tú eres fuertes seguro que lo harás bien.!",
      ],
      "originalLanguage": colorSpanish,
    },
    "cookerPageContent": {
      "title": "LA RESPOSTERÍA",
      "description":
        <div>
          <span className="red"><b>TU AMIGO HA</b></span> DECIDIDO RECORRER <span className="dodgerblue"><b>EL MUNDO</b></span> Y HA VISITADO <span className="green"><b>LOS CINCO CONTINENTES</b></span>. RECOPILANDO DELICIOSOS POSTRES DE <span className="yellow"><b>DIFERENTES PAÍSES DEL MUNDO</b></span>
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
          { name: "USA", type: female, recipe: canadaRecipe },
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