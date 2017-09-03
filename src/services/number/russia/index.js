import russia from '../../../images/flag/russia.png';
import little_draw from '../images/elephant_little_draw_number.png';
import big_draw from '../images/elephant_big_draw_number.png';
import download from '../../download/number/russia.pdf';

export default (
  {
    "header": "РОССИЯ Числа от 1 до 100",
    "flag": russia,
    "download": download,
    "draw": {
      "little-draw": little_draw,
      "big-draw": big_draw
    },
    "numbers": [
      [
        { letter: "1", value: "один [adin]" },
        { letter: "11", value: "одиннадцать [adinacatj" },
      ],
      [
        { letter: "2", value: "два [dva]" },
        { letter: "12", value: "двенадцать [dvinacatj" },
      ],
      [
        { letter: "3", value: "три [tri]" },
        { letter: "13", value: "тринадцать [trinacatj]" },
      ],
      [
        { letter: "4", value: "четыре [tchetirié]" },
        { letter: "14", value: "четырнадцать [chityrnacatj]" },
      ],
      [
        { letter: "5", value: "пять [pyat]" },
        { letter: "15", value: "пятнадцать [pitnacatj]" },
      ],
      [
        { letter: "6", value: "шесть [chiést]" },
        { letter: "16", value: "шестнадцать [shysnacatj]" },
      ],
      [
        { letter: "7", value: "семь [siém]" },
        { letter: "17", value: "семнадцать [simjnacatj]" },
      ],
      [
        { letter: "8", value: "восемь [vossiém']" },
        { letter: "18", value: "восемнадцать [vosimnacatj]" },
      ],
      [
        { letter: "9", value: "девять [diéviat]" },
        { letter: "19", value: "девятнадцать [divitnacatj]" },
      ],
      [
        { letter: "10", value: "десять [diéciat]" },
        { letter: "20", value: "двадцать [dvacatj]" },
      ]
    ],
    "ten-numbers": [
      { letter: "21", value: "Двадцать один [dvacatj odin]" },
      { letter: "22", value: "Двадцать два [dvacatj dva]" },
      { letter: "30", value: "тридцать [tricatj]" },
      { letter: "40", value: "сорок [sorok]" },
      { letter: "50", value: "пятьдесят [pjatjdisjat]" },
      { letter: "60", value: "шестьдесят [shestjdisjat]" },
      { letter: "70", value: "семьдесят [semjdisjat]" },
      { letter: "80", value: "восемьдесят [vosimdisjat]" },
      { letter: "90", value: "девяносто [divjanosto]" },
      { letter: "100", value: "сто [sto]" },
    ],
    "operator": [
      { letter: "x", value: "умножить" },
      { letter: "-", value: "минус (вычесть)" },
      { letter: ":", value: "разделить" },
      { letter: "+", value: "плюс (прибавить)" },
      { letter: "=", value: "равно (равняется)" },
    ],
    "exercice": [
      { letter: "5 + 8 =", value: "тринадцать" },
      { letter: "10 + 30 =", value: "" },
      { letter: "15 + 40 =", value: "" },
      { letter: "20 + 50 =", value: "" },
      { letter: "60 + 20 =", value: "" },
    ]

  }
)