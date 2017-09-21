import littleMan from '../../../../images/cook/pipilet_male.jpg';
import image from '../../../../images/cook/recipe/europe/french.jpg';
import image2 from '../../../../images/cook/recipe/europe/french2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleMan,
	title: 'RECETTES FRANÇAISES',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Mousse au chocolat à l’avocat',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients pour 2 personnes',
					ingredient: [
						'110g de chocolat à pâtisseries, en morceaux',
						'4 cuillères de lait de coco épais',
						'1 avocat mûr',
						'1⁄2 cuillère d’extrait de vanille',
						'1 pincée de sel',
						'3 cuillères à soupe de miel',
						'1 petite cuillère de zeste d’orange',
						'1⁄2 cuillère de poivre rouge mouliné'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'fondre le chocolat au bain-marie avec le lait de coco. Mélanger.',
						'Laisser refroidir et mélanger avec le reste des ingrédients jusqu’à obtenir un mélange homogène.'
					]
				}
			]
		},
		{
			title: 'Tarta Tatin',
			image: image2,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'200g de farine de blé',
						'125g de sucre fin',
						'1 pincée de sel',
						'1 jaune d’œuf',
						'25mL d’eau',
						'60g de beurre',
						'80g de sucre fin',
						'1 cuillère à soupe de sucre fin',
						'1kg de pommes pelées et coupées en tranches',
						'80g de beurre ramolli et coupé et morceaux'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'tamiser la farine et ajouter 125g de sucre et le sel. Former un puit au centre et remplir du beurre coupé en morceaux. Mélanger jusqu’à obtenir une consistance sablonneuse. Ajouter le jaune d’œuf et l’eau, et pétrir jusqu’à former une boule. Envelopper la pâte dans du film plastique et laisser reposer 1 à 2h au réfrigérateur.',
						'Faire fondre le beurre un moule de 23cm de diamètre sur un feu moyen. Quand le beurre est fondu, ajouter 80g de sucre et bien mélanger',
						'Placer les pommes le plus serrées possible dans le moule. Saupoudrer de la cuillère de sucre restant et les laisser caraméliser à feu moyen pendant 12min environ.',
						'Quand les pommes sont caramélisées, retirer du feu. Laisser le moins possible d’espace entre les pommes.',
						'Préchauffer le four à 200 degrés',
						'Sortir la pâte du frigo, l’étaler sur une surface enfarinée. Créer un cercle d’environ 5mm d’épaisseur et d’un diamètre de 3cm de plus que le moule.',
						'Placer la pâte sur les pommes en bordant les côtés à l’intérieur du moule.',
						'Enfourner pendant 30min',
						'Retirer du four et laisser refroidir 10min. Retourner la tarte Tatin sur un plat. Déguster cette tarte seule ou avec un peu de crème fraiche ou une boule de glace à la vanille.'
					]
				}
			]
		}
	]
});
