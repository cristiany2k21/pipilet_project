import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/asia/arabia.jpg';
import image2 from '../../../../images/cook/recipe/asia/arabia2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleGirl,
  title: "RECETTES D’ARABIE SAOUDITE",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Maskina.",
      image: image,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "2 verres de farine.",
            "1 verre et demi de sucre en poudre.",
            "1 verre de crème.",
            "Fruits secs émincés",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Mélanger la farine, le sucre et la crème.",
            "Huiler le moule et verser la préparation dans ce dernier. Huiler la surface du gâteau et saupoudrer de fruits secs.",
            "Mettre au four à température modérée..",
            "Servir frais.",
          ]
        }
      ]
    },
    {
      title: "Mohalabeya de kamar el din",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "1/2 kg de carottes.",
            "1/2 kg de jus d’orange.",
            "2 verres d’eau.",
            "2 cuillères à soupe de Maïzena.",
            "Sucre",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Cuire les carottes. Une fois cuites, les peler et les mixer au blender avec le jus d’orange. Adoucir la préparation d’environ 3 cuillères à soupe de sucre et mettre à cuire.",
            "Dissoudre la Maïzena dans un peu d’eau et l’ajouter à la préparation. Mélanger le jus obtenu jusqu’à obtenir la consistance souhaitée. Verser dans le récipient de service et répandre des fruits secs, de la noix de coco en poudre puis laisser refroidir. Placer au réfrigérateur et servir très frais.",
          ]
        }
      ]
    }
  ]
})