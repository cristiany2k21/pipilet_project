import china from '../../../images/flag/china.png';
import little_draw from '../images/elephant_little_draw_number.png';
import big_draw from '../images/elephant_big_draw_number.png';
import download from '../../download/number/number_china.pdf';

export default (
  {
    "header": "中国 编号从 1 到 100",
    "flag": china,
    "download": download,
    "draw": {
      "little-draw": little_draw,
      "big-draw": big_draw
    },
    "numbers": [
      [
        { letter: "1", value: "一 [yī]" },
        { letter: "11", value: "十一 [shi yi]" },
        { letter: "21", value: "二十一 [èr shi yi]" },
        { letter: "31", value: "三十一 [sān shi yi]" },
      ],
      [
        { letter: "2", value: "二 [èr]" },
        { letter: "12", value: "十二 [shi er]" },
        { letter: "22", value: "二十二 [èr shi èr]" },
        { letter: "32", value: "三十二 [sān shi èr]" },
      ],
      [
        { letter: "3", value: "三 [sān]" },
        { letter: "13", value: "十三 [shi san]" },
        { letter: "23", value: "二十三 [èr shi sān]" },
        { letter: "33", value: "三十三 [sān shi sān]" },
      ],
      [
        { letter: "4", value: "四 [sì]" },
        { letter: "14", value: "十四 [shi sì]" },
        { letter: "24", value: "二十四 [èr shi sì]" },
        { letter: "34", value: "三十四 [sān shi sì]" },
      ],
      [
        { letter: "5", value: "五 [wǔ]" },
        { letter: "15", value: "十五 [shi wǔ]" },
        { letter: "25", value: "二十五 [èr shi wǔ]" },
        { letter: "35", value: "三十五 [sān shi wǔ]" },
      ],
      [
        { letter: "6", value: "六 [liù]" },
        { letter: "16", value: "十六 [shi liù]" },
        { letter: "26", value: "二十六 [èr shi liù]" },
        { letter: "36", value: "三十六 [sān shi liù]" },
      ],
      [
        { letter: "7", value: "七 [qī]" },
        { letter: "17", value: "十七 [shi qī]" },
        { letter: "27", value: "二十七 [èr shi qī]" },
        { letter: "37", value: "三十七 [sān shi qī]" },
      ],
      [
        { letter: "8", value: "八 [bā]" },
        { letter: "18", value: "十八 [shi bā]" },
        { letter: "28", value: "二十八 [èr shi bā]" },
        { letter: "38", value: "三十八 [sān shi bā]" },
      ],
      [
        { letter: "9", value: "九 [jiǔ]" },
        { letter: "19", value: "十九 [shi jiǔ]" },
        { letter: "29", value: "二十九 [èr shi jiǔ]" },
        { letter: "39", value: "三十九 [sān shi jiǔ]" },
      ],
      [
        { letter: "10", value: "十 [shí]" },
        { letter: "20", value: "二十 [èr shí]" },
        { letter: "30", value: "三十 [sān shí]" },
        { letter: "40", value: "四十 [sì shí]" },
      ]
    ],
    "ten-numbers": [
      { letter: "0", value: "零 [líng]" },
      { letter: "100", value: "一百 [yī bǎi]" },
    ],
    "operator": [
      { letter: "x", value: "乘 [cheng]" },
      { letter: "-", value: "减 [jian]" },
      { letter: ":", value: "除 [chu]" },
      { letter: "+", value: "加 [jia]" },
      { letter: "=", value: "等于 [deng yu]" },
    ],
    "exercice": [
      { letter: "5 + 8 =", value: "十三" },
      { letter: "10 + 30 =", value: "" },
      { letter: "15 + 40 =", value: "" },
      { letter: "20 + 50 =", value: "" },
      { letter: "60 + 20 =", value: "" },
    ]

  }
)
