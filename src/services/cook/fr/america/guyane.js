import littleMan from '../../../../images/cook/pipilet_male.jpg';
import image from '../../../../images/cook/recipe/america/guyane.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleMan,
	title: 'RECETTES DE LA GUYANE FRANÇAISE',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'MANGO FOOL',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'3-4 mangues bien mures, pelées et coupées',
						'petits cubes.',
						'5 cuillères à soupe de sucre.',
						'Le jus d’un citron et sa peau.',
						'1 tasse de crème.',
						'1 cuillère à café d’extrait de vanille.',
						'1⁄4 cuillère à café de noix de muscade.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Passer au blender les mangues avec le jus du citron et 2 ou 3 cuillères de sucre.',
						'Laisser reposer.',
						'Avec le batteur monter la crème en y incorporant une cuillère de sucre, du zeste de citron et la vanille.',
						'Une fois la crème montée, verser dans des verres en alternant les couches de purée de mangue et de crème montée. Servir très frais.',
						'Déguster!'
					]
				}
			]
		}
	]
});
