import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/oceania/australie.jpg';
import image2 from '../../../../images/cook/recipe/oceania/australie2.jpg';

export default ({
  flag: littleGirl,
  title: "RECETAS AUSTRALIANAS",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "ALBA",
      image: image,

      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "Azúcar.",
            "2 limones.",
            "helado a gusto.",
          ],
        }
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "mezclar el azúcar con los limones y poner el gusto preferido del helado y luego colocar una hora en el congelador.",
          ]
        }
      ]
    },
    {
      title: "Paletas de Mango",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "3 mangos, maduros.",
            "azúcar.",
            "agua la que necesite.",
            "1 molde para paletas de hielo.",
          ],
        }
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Pelar los mangos. Cortas hasta dejar la pura pulpa. Licuarlo junto con el azúcar y el agua. Vaciar el jugo en pequeños moldes y ponerlo a congelar."
          ]
        }
      ]
    }
  ]
})