import southAfrica from '../../../images/flag/south-africa.jpg';
import little_draw from '../images/elephant_little_draw_number.png';
import big_draw from '../images/elephant_big_draw_number.png';
import download from '../../download/number/arabe.pdf';

export default (
  {
    "header": "الإنجليزية من 1 إلى 100",
    "flag": southAfrica,
    "download": download,
    "draw": {
      "little-draw": little_draw,
      "big-draw": big_draw
    },
    "numbers": [
      [
        { letter: "1", value: "واحد [wahed]" },
        { letter: "11", value: "عشر أحد [ihda aachar]" },
      ],
      [
        { letter: "2", value: "اثنان [itnan]" },
        { letter: "12", value: "عشر اثنا [itna aachar]" },
      ],
      [
        { letter: "3", value: "ثلثة [talata]" },
        { letter: "13", value: "عشر ثلثة [talata aachar]" },
      ],
      [
        { letter: "4", value: "أربعة [arbaa]" },
        { letter: "14", value: "عشر أربعة [arbaatou aachar]" },
      ],
      [
        { letter: "5", value: "خمسة [khamsa]" },
        { letter: "15", value: "عشر خمسة [khamsatou aachar]" },
      ],
      [
        { letter: "6", value: "ستة [sitatou]" },
        { letter: "16", value: "عشرة ست [sita aachar]" },
      ],
      [
        { letter: "7", value: "سبعة [sabaa]" },
        { letter: "17", value: "عشر سبعة [sabaatou aachar]" },
      ],
      [
        { letter: "8", value: "ثمانية [tamania]" },
        { letter: "18", value: "عشر ثمانية [tamaniatou aachar]" },
      ],
      [
        { letter: "9", value: "تسعة [tisaa]" },
        { letter: "19", value: "عشر تسعة [tisaatou aachar]" },
      ],
      [
        { letter: "10", value: "عشرة [aachra]" },
        { letter: "20", value: "عشرون [ichroun]" },
      ]
    ],
    "ten-numbers": [
      { letter: "21", value: "عشرون و واحد [wahed wa ichroun]" },
      { letter: "22", value: "عشرون و اثنان [itnani wa ichroun]" },
      { letter: "30", value: "ثلثون [talatoun]" },
      { letter: "40", value: "أربعون [arbaoun]" },
      { letter: "50", value: "خمسون [khamsoun]" },
      { letter: "60", value: "ستون [sitoun]" },
      { letter: "70", value: "سبعون [saboun]" },
      { letter: "80", value: "ثمانون [tamanoun]" },
      { letter: "90", value: "تسعون [tisoun]" },
      { letter: "100", value: "مئة [mia]" },
    ],
    "operator": [
      { letter: "x", value: "ف" },
      { letter: "-", value: "ناقص" },
      { letter: ":", value: "عل" },
      { letter: "+", value: "زيد" },
      { letter: "=", value: "يساوي" },
    ],
    "exercice": [
      { letter: "5 + 8 =", value: "ثلثة عشر" },
      { letter: "10 + 30 =", value: "" },
      { letter: "15 + 40 =", value: "" },
      { letter: "20 + 50 =", value: "" },
      { letter: "60 + 20 =", value: "" },
    ]

  }
)