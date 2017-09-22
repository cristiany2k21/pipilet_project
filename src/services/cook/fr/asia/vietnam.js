import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/asia/vietnam.jpeg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTES DU VIETNAM',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Chè chuối',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients (pour deux personnes)',
					ingredient: [
						'1 c/s de graines de sésame.',
						'3 c/s de tapioca.',
						'350 ml d’eau.',
						'1 pincée de sel.',
						'125 ml de lait de coco.',
						'3 c/s de sucre.',
						'1 banane.',
						'Beurre (un peu)'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Dans une poêle torréfier légèrement les graines de sésame.',
						'Faire chauffer l’eau dans une casserole et ajouter le tapioca lorsque l’eau bout. Baisser alors le feu au minimum et laisser cuire 20 minutes en remuant de temps en temps.',
						'Ajouter le lait de coco, le sucre et la pincée de sel. Remuer et laisser cuire 3 minutes supplémentaires.',
						'Couper la banane en tranches. Réserver quelques tranches pour la décoration et incorporer le reste à la préparation. Laisser cuire à feu doux jusqu’à épaississement.',
						'Verser dans les bols et laisser refroidir.',
						'Dans la poêle, faire fondre le beurre et frire légèrement les tranches de banane restantes.',
						'Disposer une tranche de banane dans chaque bol et saupoudrer des graines de sésame. Servir.'
					]
				}
			]
		}
	]
});
