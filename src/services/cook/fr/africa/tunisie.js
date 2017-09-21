import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/africa/tunisie.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTE DE TUNISIE',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'GHRIYBA',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'250g d’amandes moulues.',
						'50g de beurre en pommade.',
						'100g de sucre glace.',
						'1 œuf à température ambiante.',
						'Amandes effilées, entières pour décorer.',
						'Miel.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Préchauffer le four à 190°C.',
						'Mélanger les amandes, le sucre, le beurre et l’œuf jusqu’à obtenir une pate homogène.',
						'Laisser reposer 30 minutes dans le frigo.',
						'Faire des boules de la grosseur d’une balle de golf et les disposer en ligne sur une plaque avec dupapier végétal, pour mettre au four.',
						'Aplatir un peu et mettre la décoration désirée d’amandes.',
						'Mettre au four pendant 20 minutes (en fonction du four).',
						'Laisser refroidir sur la plaque.',
						'Mettre du miel sur les gâteaux avec un pinceau.'
					]
				}
			]
		}
	]
});
