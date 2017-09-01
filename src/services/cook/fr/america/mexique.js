import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/america/mexico-nutella.jpg';
import image2 from '../../../../images/cook/recipe/america/mexico-oreo.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleGirl,
  title: "RECETTES MEXICAINES",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Gâteau de Nutella",
      image: image,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "1 1⁄2 tasse de farine.",
            "2 Oeufs",
            "1 Cuillère à soupe de sucre",
            "1 1⁄2 tasse de Nutella",
            "1 Cuillère à soupe d’extrait de vanille",
            "1 Tasse de lait",
            "Une pincée de bicarbonate de soude.",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Dans un grand saladier placer les ingrédients secs en premier puis les ingrédients humides.",
            "Mélanger le tout jusqu’à obtention d’un mélange épais.",
            "Beurrer le moule et verser le mélange dans celui ci.",
            "Placer le tout au four à 250° pendant environ 25 minutes. Vérifier la cuisson en piquant le centre avec un couteau pointu. Si celui ci ressort mouillé c’est le gâteau n’est pas cuit, si le couteau ressort sec, il est cuit.",
            "Ajouter quelques fruits pour la décoration et le tour est joué.",
          ]
        }
      ]
    },
    {
      title: "Recette de Glace aux Oreo",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "12 biscuit Oreo",
            "40 cl de crème fraiche liquide",
            "1 boite de lait concentré",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Briser les biscuits Oréo en petits et gros morceaux et réserver le tout dans un bol.",
            "Monter la crème en Chantilly dans un grand saladier en aluminium préalablement refroidi au réfrigérateur afin que la crème monte bien.",
            "Ajouter ensuite le lait concentré et les biscuits brisés. Mélanger doucement l’ensemble. Verser la préparation dans un grand plat de service ou dans les 6 verrines. Laisser refroidir environ 3 heures dans un congélateur ou 6 heures dans un réfrigérateur.",
            "Une fois le tout bien refroidi, le dessert est prêt ! Nous te conseillons de le consommer rapidement car il va fondre rapidement hors du réfrigérateur!",
          ]
        }
      ]
    }
  ]
})