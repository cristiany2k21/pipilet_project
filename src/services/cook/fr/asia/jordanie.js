import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image2 from '../../../../images/cook/recipe/asia/jordania2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleGirl,
  title: 'RECETTES DE JORDANIE',
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: 'Chamia',
      // image: image,
      sectionIngredient: [
        {
          title: 'Ingrédients:',
          ingredient: [
            'Une tasse et demi de farine de maïs (375 ml).',
            'Une tasse de sucre (250ml).',
            'Six œufs.',
            '50 grammes de beurre.',
            'Une petite cuillère de bicarbonate de soude.',
            'Une demi-tasse de lait (125 ml).',
            'Quelques gouttes de saveur vanille.',
            'Quelques amandes pour décorer..',
          ],
        },
      ],
      sectionPreparation: [
        {
          title: 'Préparation:',
          preparation: [
            'Mélanger le beurre ramolli avec le sucre et dans un autre récipient mélanger les œufs avec la saveur vanille .',
            'Verser la préparation à base de beurre dans les œufs mélangés.',
            'Incorporer délicatement la farine de maïs jusqu’à complète intégration',
            'Dans un moule beurré, et y verser la préparation. A l’aide de la pointe d’un couteau, dessiner des losanges et y placer en leur centre une amande. Placer le tout dans le four. Quand la surface du gâteau est dorée, la Chamia est prête.',
            'Sortir le gâteau et le laisser refroidir avant de le servir.',
          ],
        },
      ],
    },
    {
      title: 'Booza',
      image: image2,
      sectionIngredient: [
        {
          title: 'Ingrédients:',
          ingredient: [
            '2 verres de farine de blé.',
            '2 verres d’eau.',
            '2 verres de sucre.',
            'Gingembre ou cannelle suivant les gouts. Peut  être accompagné avec bonheur par quelques  noisettes grillées.',
          ],
        },
      ],
      sectionPreparation: [
        {
          title: 'Préparation:',
          preparation: [
            'Mélanger la farine à l’eau et laisser reposer une nuit.',
            'Le lendemain, filtrer le liquide et cuire l’ensemble avec deux verres d’eau jusqu’à ébullition.',
            'Filtrer à nouveau et mélanger les deux verres de sucre dans la préparation.',
            'Verser le tout dans un récipient en verre et placer le tout dans le réfrigérateur pendant 3 jours afin que la praparation fermente.',
            'Lorsque des bulles apparaissent à la surface c’est que la fermentation a commencée. Sortir du  réfrigérateur et filtrer à nouveau. Servir le tout dans des verres.',
            'Saupoudrer la poudre de gingembre ou de cannelle sur chaque verre et éventuellement la noisette  grillée. Servir.',
          ],
        },
      ],
    },
  ],
});
