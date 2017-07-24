import { CONTACT, HOME, PRESENTATION } from '../../constants/navbar';
import { SONG, COLORNUMBER } from '../../constants/sidebar';
import pipiletSong from '../../images/pipilet-song.jpg';
import pipiletNumberColor from '../../images/pipilet-number-color.jpg';
import pipiletCooker from '../../images/pipilet-cooker.jpg';
import pipiletDescription from '../../images/pipilet-description.jpg';

import winterIsHereTranslated from '../songs/spa/winter-is-here';
import fallFallBallonTranslated from '../songs/spa/fall-fall-ballon';
import theWashermanTranslated from '../songs/spa/the-washerman';
import ticTicTicTranslated from '../songs/spa/tic-tic-tic';
import siMaMaKaTranslated from '../songs/spa/si-ma-ma-ka';
import theCourtyardOfMyHouseTranslated from '../songs/spa/the-courtyard-of-my-house';
import giramosalRededorDelMoralTranslated from '../songs/spa/giramos-alrededor-del-moral';
import llueveTranslated from '../songs/spa/its-rainning';
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
import german from '../../images/flag/german.png';
import china from '../../images/flag/china.jpg';
import southAfrica from '../../images/flag/south-africa.jpg';
import china3 from '../../images/flag/china.jpg';
import china4 from '../../images/flag/china.jpg';

export default (
  {
    "lan": "esp",
    "navbar": [
      { "title": "Acogida", "url": HOME },
      { "title": "Presentación", "url": PRESENTATION },
      { "title": "Contacto", "url": CONTACT }
    ],
    "sidebar": [
      {
        "title": "¿ TE GUSTARÍA APRENDER 12 IDIOMAS CANTANDO ?",
        "image": pipiletSong,
        "alt": "pipilet-song",
        "url": SONG
      },
      {
        "title": "¿ TE GUSTARÍA APRENDER LOS COLORES Y LOS NÚMEROS EN 12 IDIOMAS ?",
        "image": pipiletNumberColor,
        "alt": "pipilet-color-number",
        "url": COLORNUMBER
      },
      {
        "title": "¿ TE GUSTARÍA APRENDER EN FAMILIA LA RESPOSTERÍA DE LOS CINCO CONTINENTES DEL MUNDO ?",
        "image": pipiletCooker,
        "alt": "pipilet-cooker",
        "url": ""
      },
      {
        "title": "QUIERO SER TU AMIGO. ¿ SABES QUIÊN SOY ?",
        "image": pipiletDescription,
        "alt": "pipilet-presentation",
        "url": ""
      }
    ],
    "songPageContent": {
      "header": {
        "title": "APRENDE CANCIONES DEL MUNDO CANTANDO CON"
      },
      "flag": {
        "selected": false,
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
      "title": "APRENDE LOS NUMEROS DEL 1 AL 100 EN DIFERENTES LENGUAS DEL MUNDO CON PIPILET MANDALA",
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
        {"name": "china3", "value": china3},
        {"name": "china4", "value": china4}
        ]
    },
    "TranslatedPageContent": {

    }
  }
)