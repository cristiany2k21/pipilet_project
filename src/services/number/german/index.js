import german from '../../../images/flag/german.png';
import little_draw from '../images/bird_little_draw_number.png';
import big_draw from '../images/bird_big_draw_number.png';

export default (
  {
    "header": "ANZAHLEN DEN 1 BEL DEN 100",
    "flag": german,
    "draw": { "little-draw": little_draw, "big-draw": big_draw },
    "numbers": [
      [
        { letter: "1", value: "Eins" },
        { letter: "11", value: "Elf" },
        { letter: "21", value: "Einundzwanzig" },
        { letter: "31", value: "Einunddreißig" },
      ],
      [
        { letter: "2", value: "Zwei" },
        { letter: "12", value: "Zwölf" },
        { letter: "22", value: "Zweiundzwanzig" },
        { letter: "32", value: "Zweiunddreißig" },
      ],
      [
        { letter: "3", value: "Drei" },
        { letter: "13", value: "Dreizehn" },
        { letter: "23", value: "Dreiundzwanzig" },
        { letter: "33", value: "Dreiunddreißig" },
      ],
      [
        { letter: "4", value: "Vier" },
        { letter: "14", value: "vierzehn" },
        { letter: "24", value: "Vierundzwanzig" },
        { letter: "34", value: "Vierunddreißig" },
      ],
      [
        { letter: "5", value: "Fünf" },
        { letter: "15", value: "Fünfzehn" },
        { letter: "25", value: "Fünfundzwanzig" },
        { letter: "35", value: "Fünfunddreißig" },
      ],
      [
        { letter: "6", value: "Sechs" },
        { letter: "16", value: "Sechzehn" },
        { letter: "26", value: "Sechsundzwanzig" },
        { letter: "36", value: "Sechsunddreißigi" },
      ],
      [
        { letter: "7", value: "Sieben" },
        { letter: "17", value: "Siebzehn" },
        { letter: "27", value: "Siebenundzwanzig" },
        { letter: "37", value: "Siebenunddreißig" },
      ],
      [
        { letter: "8", value: "Acht" },
        { letter: "18", value: "Achtzehn" },
        { letter: "28", value: "Achtundzwanzig" },
        { letter: "38", value: "Achtunddreißig" },
      ],
      [
        { letter: "9", value: "Neun" },
        { letter: "19", value: "Neunzehn" },
        { letter: "29", value: "Neunundzwanzig" },
        { letter: "39", value: "Neununddreißig" },
      ],
      [
        { letter: "10", value: "Zehn" },
        { letter: "20", value: "Zwanzig" },
        { letter: "30", value: "Dreißig" },
        { letter: "40", value: "Vierzig" },
      ]
    ],
    "ten-numbers": [
      { letter: "50", value: "Fünfzig" },
      { letter: "60", value: "Sechzig" },
      { letter: "70", value: "Siebzig" },
      { letter: "80", value: "Achtzig" },
      { letter: "90", value: "Neunzig" },
      { letter: "100", value: "Einhundert / Humdert" },
    ],
    "operator": [
      { letter: "x", value: "FÜR" },
      { letter: "-", value: "MINDESTENS" },
      { letter: ":", value: "DIVISOR" },
      { letter: "+", value: "PLUS" },
      { letter: "=", value: "EGA" },
    ],
    "exercice": [
      { letter: "5 + 8 =", value: "Dreizehn" },
      { letter: "10 + 30 =", value: "" },
      { letter: "15 + 40 =", value: "" },
      { letter: "20 + 50 =", value: "" },
      { letter: "60 + 20 =", value: "" },
    ]

  }
)