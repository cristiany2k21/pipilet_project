import spanish from '../../../images/flag/spanish.png';
import little_draw from '../images/bike_little_draw_number.png';
import big_draw from '../images/bike_big_draw_number.png';
import download from '../../download/number/spanish.pdf';

export default (
  {
    "header": "ESPAÑOL NÚMEROS DEL 1 AL 100",
    "flag": spanish,
    "download": download,
    "draw": {
      "little-draw": little_draw,
      "big-draw": big_draw
    },
    "numbers": [
      [
        { letter: "1", value: "Uno" },
        { letter: "11", value: "Once" },
        { letter: "21", value: "Veintiuno" },
        { letter: "31", value: "Treinta y uno" },
      ],
      [
        { letter: "2", value: "Dos" },
        { letter: "12", value: "Doce" },
        { letter: "22", value: "Veintidós" },
        { letter: "32", value: "Treintay dos" },
      ],
      [
        { letter: "3", value: "Tres" },
        { letter: "13", value: "Trece" },
        { letter: "23", value: "Veintitrés" },
        { letter: "33", value: "Treintay tres" },
      ],
      [
        { letter: "4", value: "Cuatro" },
        { letter: "14", value: "Catorce" },
        { letter: "24", value: "Veinticuatro" },
        { letter: "34", value: "Treintay cuatro" },
      ],
      [
        { letter: "5", value: "Cinco" },
        { letter: "15", value: "Quince" },
        { letter: "25", value: "Veinticinco" },
        { letter: "35", value: "Treintay cinco" },
      ],
      [
        { letter: "6", value: "Seis" },
        { letter: "16", value: "Dieciséis" },
        { letter: "26", value: "Veintiséis" },
        { letter: "36", value: "Treintay seis" },
      ],
      [
        { letter: "7", value: "Siete" },
        { letter: "17", value: "Diecisiete" },
        { letter: "27", value: "Veintisiete" },
        { letter: "37", value: "Treintay siete" },
      ],
      [
        { letter: "8", value: "Ocho" },
        { letter: "18", value: "Dieciocho" },
        { letter: "28", value: "Veintiocho" },
        { letter: "38", value: "Treintay ocho" },
      ],
      [
        { letter: "9", value: "Nueve" },
        { letter: "19", value: "Diecinueve" },
        { letter: "29", value: "Veintinueve" },
        { letter: "39", value: "Treintay nueve" },
      ],
      [
        { letter: "10", value: "Diez" },
        { letter: "20", value: "Veinte" },
        { letter: "30", value: "Treinta" },
        { letter: "40", value: "Cuarenta" },
      ]
    ],
    "ten-numbers": [
      { letter: "50", value: "Cincuenta" },
      { letter: "60", value: "Sesenta" },
      { letter: "70", value: "Setenta" },
      { letter: "80", value: "Ochenta" },
      { letter: "90", value: "Noventa" },
      { letter: "100", value: "Cien / Ciento" },
    ],
    "operator": [
      { letter: "x", value: "POR" },
      { letter: "-", value: "MENOS" },
      { letter: ":", value: "DIVIDO" },
      { letter: "+", value: "MAS" },
      { letter: "=", value: "IGUAL" },
    ],
    "exercice": [
      { letter: "5 + 8 =", value: "Trece" },
      { letter: "10 + 30 =", value: "" },
      { letter: "15 + 40 =", value: "" },
      { letter: "20 + 50 =", value: "" },
      { letter: "60 + 20 =", value: "" },
    ]

  }
)