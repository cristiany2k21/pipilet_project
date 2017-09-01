import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/oceania/vanuatu.jpg';

export default ({
  flag: littleMan,
  title: "RECETA DE VANUATU",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "HELADO DE MANGO",
      image: image,

      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "1 taza de pulpa de mango.",
            "1 taza de azúcar.",
            "1 taza de leche.",
            "1 lata de leche condensada.",
            "4 huevos.",
            "1 cucharada de jugo de limón.",
            "Una pizca de sal.",
          ],
        }
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Calentar la leche y apagar el fuego justo antes de que comience la ebullición.",
            "Batir los huevos con el azúcar, añadir la leche caliente poco a poco sin dejar de batir. Acontinuación, añadir la leche condensada y la pulpa de mango, jugo de limón y una pizca de sal. Mezclar bien.",
            "Deje enfriar, luego poner en el congelador por 12 horas.",
            "Al día siguientes se saca del congelador y pasamos a removerla durante 30 minutos dentro de la máquina para hacer helados.",
            "Para obtener una textura más firme del helado, la dejamos posteriormente reposar durante 30 minutos en el congelador de nuevo. Y ya está lista para degustar, BUEN PROVECHO!!!"
          ]
        }
      ]
    },
  ]
})