import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/africa/kenya.jpg';

export default ({
	flag: littleMan,
	title: 'RECETA DE KENIA',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'MANGO HELADO',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'2 tazas de mangos .',
						'Un brick mediano de nata.',
						'Azúcar.',
						'Cáscara de limón.',
						'Leche condensada.',
						'Sal.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Machacar las 2 tazas de mango, haciendo un puré de ellos.',
						'En la batidora echar la nata, 1/2 taza de azúcar hasta quedar bien espesa.',
						'Unir al puré de los mangos 2 cucharadas de cáscara de limón finas, 1/2 taza de leche condensada y media cucharilla de sal.',
						'Unir la nata con todo ello y ponerlo en el congelador.'
					]
				}
			]
		}
	]
});
