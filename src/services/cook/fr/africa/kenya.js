import littleMan from '../../../../images/cook/pipilet_male.jpg';
import image from '../../../../images/cook/recipe/africa/kenya.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleMan,
  title: "RECETTE DU KENYA",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "MANGUE GLACÉE",
      image: image,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "2 tasses de mangues.",
            "1 brique moyenne de crème fraîche.",
            "Sucre.",
            "Citron.",
            "Lait condensé.",
            "Sel.",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Écraser les mangues en purée.",
            "Mélanger au batteur la crème fraîche et une demi tasse de sucre, jusqu’à ce que le mélange soit bien épais.",
            "Ajouter à la purée de mangue 2 cuillerées fine de jus de citron, 1⁄2 tasse de lait condensée et une demie-cuillérée de sel.",
            "Mélanger la crème et la purée de mangue, et mettre au congélateur.",
          ]
        }
      ]
    },
  ]
})