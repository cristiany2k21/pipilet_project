import { CONTACT, HOME, PRESENTATION } from '../../constants/navbar';
import { SONG, COLORNUMBER } from '../../constants/sidebar';
import pipiletSong from '../../images/pipilet-song.jpg';
import pipiletNumberColor from '../../images/pipilet-number-color.jpg';
import pipiletCooker from '../../images/pipilet-cooker.jpg';
import pipiletDescription from '../../images/pipilet-description.jpg';

import winterIsHereTranslated from '../songs/eng/winter-is-here';
import fallFallBallonTranslated from '../songs/eng/fall-fall-ballon';
import theWashermanTranslated from '../songs/eng/the-washerman';
import ticTicTicTranslated from '../songs/eng/tic-tic-tic';
import siMaMaKaTranslated from '../songs/eng/si-ma-ma-ka';
import theCourtyardOfMyHouseTranslated from '../songs/eng/the-courtyard-of-my-house';
import giramosalRededorDelMoralTranslated from '../songs/eng/here-we-go-round-the-mulberry-bush';
import llueveTranslated from '../songs/eng/its-rainning';
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
import llueveOriginal from '../songs/original/its-rainning';
import dosTigresViejosOriginal from '../songs/original/two-tigers';
import seHaCasadoRosaOriginal from '../songs/original/spring-has-come';
import patACakeOriginal from '../songs/original/pat-a-cake';
import mondayMorningOriginal from '../songs/original/on-monday-morning';

import french from '../../images/flag/french.png';
import english from '../../images/flag/english.jpg';
import india from '../../images/flag/india.jpg';
import brasil from '../../images/flag/brasil.png';
import italy from '../../images/flag/italy.png';
import spanish from '../../images/flag/spanish.png';
import serbia from '../../images/flag/serbia.png';
import german from '../../images/flag/german.jpg';
import china from '../../images/flag/china.jpg';
import southAfrica from '../../images/flag/south-africa.jpg';
import tanzania from '../../images/flag/tanzania.jpg';
import russia from '../../images/flag/russia.jpg';

export default (
  {
    "lan": "eng",
    "navbar": [
      { "title": "Home", "url": HOME },
      { "title": "Presentation", "url": PRESENTATION },
      { "title": "Contact", "url": CONTACT }
    ],
    "sidebar": [
      {
        "title": "YOU WOULD LIKE TO LEARN 12 LANGUAGES BY SINGIN?",
        "image": pipiletSong,
        "alt": "pipilet-song",
        "url": SONG
      },
      {
        "title": "YOU WOULD LIKE TO LEARN COLORS AND FIGURES EN 12 LANGUAGES ?",
        "image": pipiletNumberColor,
        "alt": "pipilet-color-number",
        "url": COLORNUMBER
      },
      {
        "title": "YOU WOULD LIKE TO LEARN TO MAKE PASTRIES OF 5 CONTINENTES IN FAMILY?",
        "image": pipiletCooker,
        "alt": "pipilet-cooker",
        "url": ""
      },
      {
        "title": "WOULD LIKE TO BE YOUR FRIEND. DO YOU KNOW WHO AM I ?",
        "image": pipiletDescription,
        "alt": "pipilet-presentation",
        "url": ""
      }
    ],
    "songPageContent": {
      "header": {
        "title": "LEARN SONG OF THE WORLD WITH"
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
    },
    "numberPageContent": {
      "title": "LEARN THE NUMBER FROM 1 TO 100 IN VARIOUS LANGUAGES OF THE WORLD WIHT PIPILET MANDALA",
      "flag": [
        {"name": "french", "value": french},
        {"name": "english", "value": english},
        {"name": "india", "value": india},
        {"name": "brasil", "value": brasil},
        {"name": "italy", "value": italy},
        {"name": "spanish", "value": spanish},
        {"name": "serbia", "value": serbia},
        {"name": "german", "value": german},
        {"name": "china", "value": china},
        {"name": "southAfrica", "value": southAfrica},
        {"name": "tanzania", "value": tanzania},
        {"name": "russia", "value": russia}
      ]
    }
  }
)