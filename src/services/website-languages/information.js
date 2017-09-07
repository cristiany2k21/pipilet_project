import { CONTACT, HOME, PRESENTATION } from '../../constants/navbar';
import { SONG, COLORNUMBER, COOKER, PRESENTATIONSIDEBAR } from '../../constants/sidebar';

import pipiletSong from '../../images/pipilet-song.jpg';
import pipiletNumberColor from '../../images/pipilet-number-color.jpg';
import pipiletCooker from '../../images/pipilet-cooker.jpg';
import pipiletDescription from '../../images/pipilet-description.jpg';

import french from '../../images/flag/french.png';
import english from '../../images/flag/english.png';
import india from '../../images/flag/india.png';
import brasil from '../../images/flag/brasil.png';
import italy from '../../images/flag/italy.png';
import spanish from '../../images/flag/spanish.png';
import serbia from '../../images/flag/serbia.png';
import german from '../../images/flag/german.png';
import china from '../../images/flag/china.png';
import southAfrica from '../../images/flag/south-africa.jpg';
import tanzania from '../../images/flag/tanzania.jpg';
import russia from '../../images/flag/russia.png';
import ghana from '../../images/flag/ghana.png';
import lebanon from '../../images/flag/lebanon.jpg';

import tanzaniaColor from '../color/tanzania';
import spanishColor from '../color/spanish';
import southColor from '../color/south-africa';
import serbiaColor from '../color/serbia';
import russiaColor from '../color/russia';
import italyColor from '../color/italy';
import indiaColor from '../color/india';
import germanColor from '../color/german';
import frenchColor from '../color/french';
import englishColor from '../color/english';
import chinaColor from '../color/china';
import brasilColor from '../color/brasil';

export default ({
  getNavbar: (navbar, sidebar) => [
    { "title": navbar[0], "subNavbar": [], "url": HOME },
    { "title": navbar[1], "subNavbar": [], "url": PRESENTATION },
    {
      "title": navbar[2], "subNavbar": [
      { "title": sidebar[0], "url": SONG },
      { "title": sidebar[1], "url": COLORNUMBER },
      { "title": sidebar[2], "url": COOKER },
      { "title": sidebar[3], "url": PRESENTATIONSIDEBAR },
    ],
    },
    { "title": navbar[3], "subNavbar": [], "url": CONTACT }
  ],
  getSidebar: (sidebar) => [
    {
      "title": sidebar[0],
      "image": pipiletSong,
      "alt": "pipilet-song",
      "url": SONG
    },
    {
      "title": sidebar[1],
      "image": pipiletNumberColor,
      "alt": "pipilet-color-number",
      "url": COLORNUMBER
    },
    {
      "title": sidebar[2],
      "image": pipiletCooker,
      "alt": "pipilet-cooker",
      "url": COOKER
    },
    {
      "title": sidebar[3],
      "image": pipiletDescription,
      "alt": "pipilet-presentation",
      "url": PRESENTATIONSIDEBAR
    }
  ],
  getFlags: () => [
    { "name": "french", "value": french },
    { "name": "english", "value": english },
    { "name": "india", "value": india },
    { "name": "brasil", "value": brasil },
    { "name": "italy", "value": italy },
    { "name": "spanish", "value": spanish },
    { "name": "serbia", "value": serbia },
    { "name": "german", "value": german },
    { "name": "china", "value": china },
    { "name": "southAfrica", "value": southAfrica },
    { "name": "tanzania", "value": tanzania },
    { "name": "russia", "value": russia }
  ],
  getFlagsMusic: () => [
    { "name": "french", "value": french },
    { "name": "english", "value": english },
    { "name": "india", "value": india },
    { "name": "brasil", "value": brasil },
    { "name": "italy", "value": italy },
    { "name": "spanish", "value": spanish },
    { "name": "serbia", "value": serbia },
    { "name": "german", "value": german },
    { "name": "china", "value": china },
    { "name": "lebanon", "value": lebanon },
    { "name": "ghana", "value": ghana },
    { "name": "russia", "value": russia }
  ],
  tanzaniaColor,
  spanishColor,
  southColor,
  serbiaColor,
  russiaColor,
  italyColor,
  indiaColor,
  germanColor,
  frenchColor,
  englishColor,
  chinaColor,
  brasilColor,
})