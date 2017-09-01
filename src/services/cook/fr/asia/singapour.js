import littleMan from '../../../../images/cook/pipilet_male.jpg';
import image from '../../../../images/cook/recipe/asia/singapour.jpg';
import image2 from '../../../../images/cook/recipe/asia/singapour2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleMan,
  title: "RECETTES DE SINGAPOUR",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Pêches à la vanille",
      image: image,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "Pêches mures.",
            "Glace à la vanille",
            "Noisettes grillées",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Peler les pêches et enlever le noyau. Passer la chair de la pêche au mixeur et réserver au réfrigérateur.",
            "Choisir les noisettes coupées grossièrement. Dans une coupe, servir un peu de glace à lavanille, une bonne portion de purée de pêches, et enfin une poignéede noisettes grillées. Servir immédiatement.",
          ]
        }
      ]
    },
    {
      title: "Mochi Gáces",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "1 verre de farine de riz",
            "3⁄4 de verre d’eau",
            "1⁄2 de verre de sucre",
            "Glace de n’importe quelle saveur (selon vos gouts)",
            "Farine de riz pour enfariner",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Préparer la glace : attendre que la glace soit un peu fondue pour pouvoir la façonner facilement.",
            "Utiliser un moule à glaçons pour façonner la glace ; la congeler à nouveau.",
            "Pour préparer la pâte : avec un batteur manuel, mélanger la farine, l’eau et le sucre dans un récipient.",
            "Le couvrir avec un film plastique et le cuire au microondes à puissance maximum pendant 5 minutes.",
            "Sortir le récipient avec beaucoup de précaution. Mélanger la pâte avec une cuillère en bois.",
            "L’étaler sur une surface enfarinée avec beaucoup de farine de riz. Enrouler la pâte jusqu’à ce qu’elle atteigne 2-3 mm d’épaisseur.",
            "Utiliser un petit verre de 5cm de diamètre pour donner la forme et couper la pâte.",
            "Mettre la pâte au frigo pour qu’elle soit froide.",
            "Mettre la glace au milieu de la pâte et la fermer. Garder à nouveau au congélateur.",
            "Sortir les mochis du congélateur avant de servir et attendre quelques minutes avant de les manger. Savourez!",
          ]
        }
      ]
    }
  ]
})