import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/africa/algerie1.jpg';
import image2 from '../../../../images/cook/recipe/africa/algerie2.jpg';

export default ({
	flag: littleMan,
	title: 'RECETTES ALGERIENNES',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Dattes farcies à la pâte d’amande',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'40 Dattes dénoyautées',
						'150 g d’amande en poudre',
						'150 g de sucre glace',
						'1 grande cuillère de margarine à température ambiante',
						'Quelques gouttes d’eau de fleur d’oranger',
						'1 blanc d’oeuf',
						'50 g de sucre semoule',
						'colorant alimentaire (optionel)'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Dans un récipient, mélanger la poudre d’amande et le sucre glace',
						'Ajouter la margarine, le blanc d’oeuf et les quelques gouttes d’eau de fleur d’oranger. Mélanger à la main jusqu’à obtention d’une pâte d’amande homogène (beaucoup de personnes ajoutent du colorant alimentaire afin d’obtenir des dattes de toutes les couleurs)',
						'Prélever un peu de pête d’amande et lui donner une forme de petite quenelle.',
						'Ouvrir la datte et y introduire la quenelle de pâte d’amande.',
						'Quand toutes les dattes sont fourrées prendre un couteau pointu et tracer quelques stries sur la partie visible de la pâte d’amande.',
						'Une fois ceci fait, saupoudrez de sucre semoule pour décorer.'
					]
				}
			]
		},
		{
			title: 'Gâteau de biscuits et chocolat',
			image: image2,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'Un paquet de biscuits secs .',
						'100 g de chocolat noir.',
						'300 g de beurre.',
						'150 g de sucre.',
						'2 oeufs.',
						'50 g de cacao en poudre'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Recette:',
					preparation: [
						'Prendre un moule de service en verre.',
						'Dans un bol qui passe au micro ondes, faire fondre le beurre et le chocolat juqu’à obtenir un mélange lisse. Ajouter les oeufs, le sucre et le cacao en poudre. Bien mélanger.',
						'Verser un peu de la préparation au chocolat au fond du moule et recouvrir d’une couche de biscuits. Recommencer jusqu’à utilisation de tous les biscuits et terminer avec du chocolat.',
						'Placer au réfrigérateur jusqu’à complet refroidissement et servir.'
					]
				}
			]
		}
	]
});
