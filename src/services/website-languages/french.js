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
        { "name": "english", "translated-song": giramosalRededorDelMoralTranslated, "original-song": giramosalRededorDelMoralOriginal },
        { "name": "serbia", "translated-song": itsRainningTranslated, "original-song": itsRainningOriginal },
        { "name": "russia", "translated-song": patACakeTranslated, "original-song": patACakeOriginal },
        { "name": "spanish", "translated-song": theCourtyardOfMyHouseTranslated, "original-song": theCourtyardOfMyHouseOriginal },
      ]
    },
    "numberPageContent": {
      "title": "LES NOMBRES",
      "flag": information.getFlags()
    },
    "ColorPageContent": {
      "title": "LES COULEURS",
      "flag": information.getFlags()
    },
    "colorTranslatedPageContent": {
      "title": "APPREND LES COULEURS AVEC TON AMI",
      "rules": [
        "En bas tu trouveras:",
        "* un jeu de mots melangés sur le theme des couleurs",
        "* un mandala à colorier comme tu veux",
        "Tu est fort pas de doute que tu reussiras !",
      ],
      "originalLanguage": colorFrench,
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
      "text": [
        "Bonjour a tous les enfantsl !!!",
        "Je m’appelle Pipilet Mandala et je viens d’arriver sur Terre il y a peu. Je suis un escargot extraterrestre , je viens de la plantète Galappar,, qui est la planète de la musique, de la couleur et de l’amour.",
        "Et je ne sais pas parler, puisque mon moyen de communication passe par la musique et la couleur Et à la place de l’écriture, je chante et je peins, je suis un escargot magique!!!",
        "J’aimerais beaucoup te connaitre et que tu sois mon ami. J’aime avoir des amis sur toutes les planètes : je suis joyeux, sympathique et amusant comme toi et je crois que l’on va bien s’entendre. Je n’en ai aucun doute !",
        "Je veux aller à l’école pour apprendre ta langue, ta culture, tes coutumes, ton histoire, ta gastronomie, ton folklore ; ton artisanat, etc... Mais aussi, pouvoir comprendre les enfants des cinq continents et me faire beaucoup d’amis . Je suis également très gourmand et j’aime beaucoup cuisiner",
        "Je voyage tout le temps avec ma guitare et ma carapace d’escargot, qui est un Mandala et qui me sert de sac à dos où j’amène de la musique, de la couleur et beaucoup d’amour . C’est super,  non ? Et bien, je vais te dire un secret. Ou plutôt, NON !.Viens avec moi le découvrir !!",
        "Tu veux t’amuser et participer à cette aventure passionnante ? ce sera merveilleux ! On apprendra des choses ensemble et tu connaitras beaucoup plus de choses sur ma planète et sur moi !!!",
      ]
    }
  }
)