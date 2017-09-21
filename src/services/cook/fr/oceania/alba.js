import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/oceania/australie.jpg';
import image2 from '../../../../images/cook/recipe/oceania/australie2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTES AUSTRALIENNES',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'ALBA',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'Sucre',
						'2 citrons',
						'Glace au choix'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Mélanger les citrons avec le sucre et prendre son parfum de glace préféré, incorporer et mettre une heure au congélateur.'
					]
				}
			]
		},
		{
			title: 'Paletas de Mango',
			image: image2,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'3 mangues mures.',
						'sucre.',
						'eau.',
						'1 coupelle pour boules de glace.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Peler les mangues.',
						'Couper jusqu’à obtenir la pulpe.',
						'Mélanger avec le sucre et l’eau.',
						'Vider le jus dans des petites coupelles à glace et mettre au congélateur'
					]
				}
			]
		}
	]
});
