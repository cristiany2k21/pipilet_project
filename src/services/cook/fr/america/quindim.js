import littleMan from '../../../../images/cook/pipilet_male.jpg';
import image from '../../../../images/cook/recipe/america/brasil.jpg';
import image2 from '../../../../images/cook/recipe/america/brasil-2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleMan,
  title: 'RECETTES BRESILIENNES',
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: 'Quindim',
      image: image,
      sectionIngredient: [
        {
          title: 'Ingrédients:',
          ingredient: [
            '4 oeufs entiers.',
            '2 jaunes d’oeuf.',
            '4 cuillères à soupe de sucre.',
            '1 boite de lait concentré.',
            'Noix de coco en copeaux.',
            '1 boite de lait de coco.',
          ],
        },
      ],
      sectionPreparation: [
        {
          title: 'Préparation:',
          preparation: [
            'Battre les 2 jaunes d’oeuf avec les 4 oeufs entiers et les 4 cuillères de sucre.',
            'Dans le fond du moule, faire du caramel.',
            'Dans un bol, laisser hydrater la noix de coco en copeaux dans le lait de coco.',
            'Intégrer le lait concentré à la préparation aux oeufs, .',
            'Verser le tout dans le moule.',
            'Faire cuire le tout au bain marie pendant environ 40 mn et c’est prêt!',
          ],
        },
      ],
    },
    {
      title: 'Mousse de Maracuyá et Fruits de la Passion',
      image: image2,
      sectionIngredient: [
        {
          title: 'Ingrédients:',
          ingredient: [
            '2 o 3 maracuyá et de fruits de la passion.',
            '1 boite de lait concentré.',
            '1 tasse de jus de maracuyá (frais ou congelé).',
            '1 boite de crème.',
            '6 oeufs.',
            '2 feuilles de gélatine.',
            '1 cuillère à soupe de jus de citron.',
          ],
        },
      ],
      sectionPreparation: [
        {
          title: 'Recette:',
          preparation: [
            'Faire tremper la gélatine dans de l’eau froide et la dissoudre ensuite dans un peu d’eau chaude',
            'Dans un grand bol, mélanger le jus de maracuyá, le lait concentré, le jus de citron, la crème), y la gélatine dissoute. Battre jusqu’à complète dissolution.',
            'Séparer les jaunes et les blancs et battre les blancs en neige très ferme.',
            'Mélanger délicatement la préparation de maracuyá aux blancs en neige. Faire attention que la mousse ne tombe pas.',
            'Verser le tout dans un grand plat ou dans des verres individuels et placer le tout au réfrigérateur jusqu’à prise complète.',
            'Avant de servir, vous pouvez recouvrir la mousse d’un peu de pulpe de maracuyá et un peu de céréales pour le croustillant.',
          ],
        },
      ],
    },
  ],
});
