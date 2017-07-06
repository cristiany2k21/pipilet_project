import { CONTACT, HOME, PRESENTATION } from './constants/navbar';
import { SONG, COLORNUMBER } from './constants/sidebar';
import pipiletSong from './images/pipilet-song.jpg';
import pipiletNumberColor from './images/pipilet-number-color.jpg';
import pipiletCooker from './images/pipilet-cooker.jpg';
import pipiletDescription from './images/pipilet-description.jpg';
import pipiletMandala from './images/pipilet-horizontal.jpg';
import familyOwls from './images/family-owls.jpg';
import family from './images/family.jpg';
import logoPipilet from './images/logo-pipilet.jpg';

export default (
  [
    {
      "lan": "esp",
      "navbar": [
        { "title": "Acogida", "url": HOME },
        { "title": "Presentación", "url": PRESENTATION },
        { "title": "Contacto", "url": CONTACT }
      ],
      "homeSidebar": [
        {
          "title": "¿ TE GUSTARÍA APRENDER 12 IDIOMAS CANTANDO ?",
          "image": pipiletSong,
          "alt": "pipilet-song",
          "url": SONG
        },
        {
          "title": "¿ TE GUSTARÍA APRENDER LOS COLORES Y LOS NÚMEROS EN 12 IDIOMAS",
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
      "homeContent": {
          "header": {
            "pipilet": pipiletMandala,
            "owls": familyOwls
          },
          "content": {
            "family": family,
             "logo": logoPipilet
          }
        }
    },
    {
      "lan": "eng",
      "navbar": [
        { "title": "Home", "url": HOME },
        { "title": "Presentation", "url": PRESENTATION },
        { "title": "Contact", "url": CONTACT }
      ],
      "homeSidebar": [
        {
          "title": "Would you like to learn 12 languages?",
          "image": "https://thumbs.dreamstime.com/x/mascotte-d-escargot-47879792.jpg",
          "url": SONG
        },
        {
          "title": "Would you like to learn colors and number in 12 languages ?",
          "image": "https://thumbs.dreamstime.com/z/escargot-mignon-de-dessin-anim%C3%A9-52412086.jpg",
        },
        {
          "title": "Would you like to learn in family TE GUSTARÍA APRENDER EN FAMILIA LA RESPOSTERÍA DE LOS CINCO CONTINENTES DEL MUNDO ?",
          "image": "https://thumbs.dreamstime.com/z/cute-cartoon-snail-24559822.jpg"
        },
        {
          "title": "QUIERO SER TU AMIGO. ¿ SABES QUIÊN SOY ?",
          "image": "https://img.over-blog-kiwi.com/1/84/93/77/20170313/ob_46bb02_ob-f9a8cd-90401be4.png"
        }
      ]
    },
    {
      "lan": "fr",
      "navbar": [
        { "title": "Accueil", "url": HOME },
        { "title": "Présentation", "url": PRESENTATION },
        { "title": "Contact", "url": CONTACT }
      ],
      "homeSidebar": [
        {
          "title": "Vous souhaitez apprendre 12 langues ?",
          "image": "https://thumbs.dreamstime.com/x/mascotte-d-escargot-47879792.jpg",
          "url": SONG
        },
        {
          "title": "¿ TE GUSTARÍA APRENDER LOS COLORES Y LOS NÚMEROS EN 12 IDIOMAS",
          "image": "https://thumbs.dreamstime.com/z/escargot-mignon-de-dessin-anim%C3%A9-52412086.jpg"
        },
        {
          "title": "¿ TE GUSTARÍA APRENDER EN FAMILIA LA RESPOSTERÍA DE LOS CINCO CONTINENTES DEL MUNDO ?",
          "image": "https://thumbs.dreamstime.com/z/cute-cartoon-snail-24559822.jpg"
        },
        {
          "title": "QUIERO SER TU AMIGO. ¿ SABES QUIÊN SOY ?",
          "image": "https://img.over-blog-kiwi.com/1/84/93/77/20170313/ob_46bb02_ob-f9a8cd-90401be4.png"
        }
      ]
    }
  ]
)