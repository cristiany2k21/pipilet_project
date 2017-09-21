import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/africa/malagasy.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTE DE MADAGASCAR',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'TORTA MAGALASY DE MADAGASCAR',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'2 tasses de lait.',
						'1 gousse de vanille.',
						'4 cuillérées de sucre.',
						'1 pincée de noix de muscade.',
						'1 pincée de clou de girofle.',
						'5 cuillérées de tapioca.',
						'2 cuillérées de crème patissière.',
						'4 bananes bien mures.',
						'30g de beurre.',
						'4 œufs'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Mélanger dans une casserole, le lait, la vanille, le sucre , la noix de muscade et le clou de girofle, porter juste avant ébullition.',
						'Retirer du feu, ajouter le tapioca au mélange et remettre le feu doux, laisser cuire 10 minutes et tourner de temps en temps.',
						'Pendant que le tapioca cuit, préchauffer le four à 180°C.',
						'Retirer le tapioca du feu, retirer la gousse de vanille et ajouter la crème pâtissière.',
						'Faire une purée avec les bananes et les ajouter au tapioca.',
						'Beurrer un moule.',
						'Incorporer les œufs, un à un au mélange et mélanger avec une spatule.',
						'Cuire pendant 20 minutes au four.',
						'Servir chaud ou tiède dans une assiette à dessert'
					]
				}
			]
		}
	]
});
