import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/europe/serbia.jpg';
import image2 from '../../../../images/cook/recipe/europe/serbia2.jpg';


export default ({
  flag: littleGirl,
  title: "RECETAS SERBIAS",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Tarta de Belgrado",
      image: image,

      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "13 yemas de huevo.",
            "10 claras a punto de nieve.",
            "275 gramos de azúcar .",
            "270 gramos da almendras molidas.",
            "135 gramos de frutas confitadas",
            "1 tableta de chocolate",
            "2 cucharada de harina.",
            "Mantequilla o margarina para engrasar el molde.",
          ],
        }
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "1. Mezclar las yemas con el azúcar, hasta obtener una crema espumosa.",
            "2. Añadir, las almendras picadas, la fruta confitada y la harina.",
            "3. Fundir el chocolate en un poco de leche e incorporar en ella la mezcla obtenida previamente.",
            "4. Batir las claras a punto de nieve y mezclarlo todo con cuidado, hasta obtener una mezcla homogénea.",
            "5. Verter el resultado en un molde previamente untado con la mantequilla, ponerlo todo al horno y dejarlo allí durante 3⁄4 de hora.",
            "6. Finalmente, retirar el pastel, dejar que se enfríe y servir.",
            "Para decorar la tarta se aconseja añadir por encima almendras turradas y partidas por la mitad, o bien azúcar glass al gusto",
          ]
        }
      ]
    },
    {
      title: "DULCE DE MEMBRILLO DESDE JAGODINA",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "1 Kg de membrillos",
            "1 Kg de azúcar",
          ],
        }
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Lavar los membrillos y cocerlos en agua abundante hasta que estén tiernos y la piel empiece a agrietarse.",
            "Escurrirlos, pelarlos y cortarlos en trozos. Pasarlos por un pasapurés o la batidora.",
            "Pesar la pulpa obtenida y mezclarla con el mismo peso de azúcar.",
            "Cocer a fuego suave durante unos 25 minutos, removiendo la mezcla continuamente para evitar que se pegue.",
            "La prueba de que la cocción está en su punto es que, al verter una pequeña porción sobre un plato, ésta cuaja de inmediato.",
            "Retirar del fuego, verter en un molde grande o en varios pequeños y refrigerar."
          ]
        }
      ]
    }
  ]
})