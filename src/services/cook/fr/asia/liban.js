import littleMan from '../../../../images/cook/pipilet_male.jpg';
import image from '../../../../images/cook/recipe/asia/liban.png';
import image2 from '../../../../images/cook/recipe/asia/liban2.jpeg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleMan,
  title: "RECETTES LIBANAISES",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Labneh",
      image: image,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "1⁄2 L de lait.",
            "1 cuillère à soupe de yaourt",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Chauffer le lait à 45 degrés.",
            "Diluer le yaourt dans un peu de lait chaud. Le mélanger au lait que nous mettrons ensuite dans un pot de terre.",
            "Couvrir le pot de terre et laisser reposer 5 ou 6h.",
            "Quand le fromage blanc est de bonne consistance, le mettre au réfrigérateur.",
          ]
        }
      ]
    },
    {
      title: "Gâteau libanais d’orange",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "4 œufs.",
            "450g d’oranges entières",
            "200g de sucre",
            "1 cuillère à café de fleur d’oranger",
            "8g de levure chimique",
            "200g d’amandes moulues",
            "sucre glace pour décorer",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Laver les oranges et les cuire recouvertes d’eau pendant 15min à la cocotte minute. Essorer, laisser refroidir et réserver.",
            "Mixer les oranges.",
            "Battre le sucre et les œufs jusqu’à ce que le mélange soit blanchâtre. Ajouter la purée d’orange, la fleur d’oranger et la levure et mélanger.",
            "Ajouter les amandes et mélanger à la spatule.",
            "Beurrer un moule, verser la pâte et enfourner à 170 degrés pendant 60min. Laisser ensuite reposer 10min.",
            "Une fois froid, démouler et saupoudrer de sucre glace",
          ]
        }
      ]
    }
  ]
})