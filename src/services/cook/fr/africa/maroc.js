import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/africa/maroc.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTE MAROCAINE',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Biscuit au citron',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'200 g farine.',
						'150 g sucre.',
						'100 ml huile.',
						'4 oeufs.',
						'zeste d’un citron.',
						'2 cuillères à soupe de jus de citron.'
					]
				},
				{
					title: 'Pour la décoration:',
					ingredient: [
						'Vermicelles au chocolat',
						'1 yaourt au citron bien crémeux'
					]
				}

			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Dans un grand saladier, mélanger les oeufs et le sucre jusqu’à complète homogénéité du mélange. Ensuite ajouter l’huile le zeste de citron et les 2 cuillères à soupe de jus de citron. Bien mélanger à nouveau.',
						'Dans un autre saladier, mélanger la farine et la levure chimique, mélanger ensuite l’ensemble avec la préparation initiale aux oeufs.',
						'Ceci réalisé, placer la préparation dans un moule fariné et enfourner à 180 degré d’abord avec la chaleur en bas et quand le bas est cuit chaleur en haut pour terminer la cuisson (au total environ une demi heure).',
						'La cuisson terminée sortir du four et vérifier la cuisson en enfonçant un couteau pointu au centre. La cuisson est terminée si le couteau ressort sec et propre. Il faut alors laisser le gâteau refroidir.',
						'Une fois à température, démouler et placer le gâteau sur un plat. Il n’y a plus qu’à déguster'
					]
				}
			]
		},
		{
			title: 'Gâteau au flan et chocolat',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'Un paquet et demi de biscuits au beurre (style petits Lu)',
						'Un peu de lait (pour mouiller les biscuits)',
						'1 litre de lait (pour le flan)',
						'2 sachets de flan instantané',
						'4-5 cuillères à soupe de sucre pour le flan',
						'200 grammes de chocolate noir',
						'1 cuillère à soupe de beurre',
						'20 cl de crème liquide',
						'Copeaux de noix de coco pour la décoration'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Recette:',
					preparation: [
						'Dans un moule carré ou rectangulaire, commencer par faire la base du gâteau: mouiller les biscuits avec le lait et les placer au fond du moule sur 2 couches.',
						'Préparer le flan comme indiqué sur les sachets de flan instantanés. Globalement placer un peu moins d’un litre de lait dans une casserole et faire chauffer à feu doux avec le sucre. Remuez de temps en temps. Dissoudre la poudre de flan avec le peu de lait réservé. Lorsque le lait commence à bouillir, verser la préparation au flan dissout. Bien remuer jusqu’à ce que l’ensemble recommence à bouillir.',
						'Laisser refroidir un peu et verser le mélange sur la base du gâteau.',
						'Préparation du glaçage au chocolat. Faire chauffer la crème liquide et lorsqu’elle commence à bouillir, couper le feu et incorporer le chocolat coupé en copeaux. Remuer. Une fois dissout, ajouter le beurre pour que le glaçage soit brillant.',
						'Le flan ayant pris dans le moule, verser le glaçage au chocolat sur celui ci et laisser refroidir au réfrigérateur. Sortir 20mn avant de consommer.'
					]
				}
			]
		}
	]
});
