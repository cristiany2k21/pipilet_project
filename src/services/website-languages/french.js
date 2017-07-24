import { CONTACT, HOME, PRESENTATION } from '../../constants/navbar';
import { SONG, COLORNUMBER } from '../../constants/sidebar';
import pipiletSong from '../../images/pipilet-song.jpg';
import pipiletNumberColor from '../../images/pipilet-number-color.jpg';
import pipiletCooker from '../../images/pipilet-cooker.jpg';
import pipiletDescription from '../../images/pipilet-description.jpg';

import winterIsHereTranslated from '../songs/fr/winter-is-here';
import fallFallBallonTranslated from '../songs/fr/fall-fall-ballon';
import theWashermanTranslated from '../songs/fr/the-washerman';
import ticTicTicTranslated from '../songs/fr/tic-tic-tic';
import siMaMaKaTranslated from '../songs/fr/si-ma-ma-ka';
import theCourtyardOfMyHouseTranslated from '../songs/fr/the-courtyard-of-my-house';
import giramosalRededorDelMoralTranslated from '../songs/fr/here-we-go-round-the-mulberry-bush';
import llueveTranslated from '../songs/fr/its-rainning';
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
import llueveOriginal from '../songs/original/its-rainning';
import dosTigresViejosOriginal from '../songs/original/two-tigers';
import seHaCasadoRosaOriginal from '../songs/original/spring-has-come';
import patACakeOriginal from '../songs/original/pat-a-cake';
import mondayMorningOriginal from '../songs/original/on-monday-morning';


export default (
  {
    "lan": "fr",
    "navbar": [
      { "title": "Accueil", "url": HOME },
      { "title": "Présentation", "url": PRESENTATION },
      { "title": "Contact", "url": CONTACT }
    ],
    "sidebar": [
      {
        "title": "TU SOUHAITERAIS APPRENDRE 12 LANGUES EN CHANTANT ?",
        "image": pipiletSong,
        "alt": "pipilet-song",
        "url": SONG
      },
      {
        "title": "TU SOUHAITERASIS APPRENDRE LES COULEURS ET CHIFFRES EN 12 LANGUES ?",
        "image": pipiletNumberColor,
        "alt": "pipilet-color-number",
        "url": COLORNUMBER
      },
      {
        "title": "TU SOUHAITERAIS APRENDRE A PATISSER EN FAMILLE DES RECETTES DE 5 CONTINENTS ?",
        "image": pipiletCooker,
        "alt": "pipilet-cooker",
        "url": ""
      },
      {
        "title": "J’AIMERAI ETRE TON AMI SAIS TU QUI JE SUIS ?",
        "image": pipiletDescription,
        "alt": "pipilet-presentation",
        "url": ""
      }
    ],
    "songPageContent": {
      "header": {
        "title": "APPRENEZ LES CHANSONS DU MONDE AVEC"
      },
      "music": [
        { "translated-song": ticTicTicTranslated, "original-song": ticTicTicOriginal } ,
        { "translated-song": siMaMaKaTranslated, "original-song": siMaMaKaOriginal } ,
        { "translated-song": dosTigresViejosTranslated, "original-song": dosTigresViejosOriginal } ,
        { "translated-song": winterIsHereTranslated, "original-song": winterIsHereOriginal } ,
        { "translated-song": theWashermanTranslated, "original-song": theWashermanOriginal } ,
        { "translated-song": fallFallBallonTranslated, "original-song": fallFallBallonOriginal } ,
        { "translated-song": seHaCasadoRosaTranslated, "original-song": seHaCasadoRosaOriginal } ,
        { "translated-song": mondayMorningTranslated, "original-song": mondayMorningOriginal} ,
        { "translated-song": giramosalRededorDelMoralTranslated, "original-song": giramosalRededorDelMoralOriginal } ,
        { "translated-song": llueveTranslated, "original-song": llueveOriginal },
        { "translated-song": patACakeTranslated, "original-song": patACakeOriginal } ,
        { "translated-song": theCourtyardOfMyHouseTranslated, "original-song": theCourtyardOfMyHouseOriginal } ,
      ]
    }
  }
)