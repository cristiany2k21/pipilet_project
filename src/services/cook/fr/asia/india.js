import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/asia/india.jpg';
import image2 from '../../../../images/cook/recipe/asia/india2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTES INDI',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Lassi de fraises et bananes',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'1 yaourt nature sans sucre',
						'3 ou 4 fraises',
						'1⁄2 banane',
						'1,5 du pot de yaourt d’eau',
						'1 cuillère à café de miel',
						'1 cuillère à café de sucre',
						'1 pincée de piment'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Mettre tous les ingrédients dans le mixeur et battre pendant quelques minutes jusqu’à ce que ce soit bien mélangé et parfaitement mouliné. Rectifier la quantité de sucre et miel si nécessaire',
						'Laisser refroidir au réfrigérateur jusqu’au moment de servir. Servir bien froid avec un peu de menthe.'
					]
				}
			]
		},
		{
			title: 'Panna cotta de thé chaï',
			image: image2,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'2 cuillères à café de thé chaï',
						'60cL de lait entier',
						'100g de lait concentré sucré',
						'1 feuille de gélatine.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Dans une grande casserole, verser le lait et le faire chauffer doucement. Ajouter le thé et laisser bouillir pendant 5 minutes. Puis, le retirer du feu, le couvrir et le laisser reposer 15 minutes',
						'Mettre la gélatine dans l’eau froide, la laisser se ramollir, l’essorer avec les mains et la mettre dans le thé pour la faire fondre. Mélanger le tout et ajouter le lait concentré. Réserver au frigo pour la refroidir.'
					]
				}
			]
		}
	]
});
