import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/africa/benin.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTE DU BENIN',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'BANANNES DOUCES À LA SAUCE ORANGE',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'4 bananes pas très mures.',
						'1⁄2 tasse de jus d’orange fraichement pressé.',
						'1 cuillérée de jus de citron fraichement pressé.',
						'1⁄2 tasse de sucre roux.',
						'Glace à la vanille.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Chauffer le jus d’orange, le jus de citron et le sucre roux dans une casserole pendant 15 minutes. Le jus doit réduire, le mettre ensuite dans un plat.',
						'Peler les bananes en les coupant par la moitié et les cuisiner dans le plat avec le jus, jusqu’à ce qu’elles soient chaudes.',
						'Servir immédiatement sur de la glace à la vanille.'
					]
				}
			]
		}
	]
});
