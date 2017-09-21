import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/america/brasil.jpg';
import image2 from '../../../../images/cook/recipe/america/brasil-2.jpg';

export default ({
	flag: littleMan,
	title: 'RECETAS BRASILEÑAS',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Quindim',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'4 cucharadas',
						'2 yemas',
						'4 cuch azúcar',
						'1 lata leche condensada',
						'Coco rallado',
						'1 bote de leche de coco'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Batir los 2 huevos y las 4 yemas con las 4 cucharadas de azúcar.',
						'Acaramelar un molde.',
						'En un bowl colocar el coco rallado junto a la leche de coco para que se hidrate.',
						'Agregarle una lata de leche condensada y los huevos batidos.',
						'Pasar todo al molde.',
						'Cocinar en un molde a baño María unos 40 minutos. Y listo!'
					]
				}
			]
		},
		{
			title: 'Mousse de Maracuyá o Fruta de la pasión',
			image: image2,
			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'2 o 3 piezas de maracuyá o fruta de la pasión',
						'1 lata de leche condensada',
						'1 taza de jugo de maracuyá (fresco o congelado)',
						'1 lata de crema de leche',
						'6 huevos',
						'2 hojas de gelatina sin sabor'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Receta para hacer el Mousse:',
					preparation: [
						'Con un poco de agua caliente, diluir la gelatina y reservar.',
						'En un vaso de batidora, mezclar el jugo de maracuyá, la leche condensada, el zumo de limón, la crema de leche (sin suero), y la gelatina. Batir.',
						'Separar las claras de las yemas y batirlas a punto de nieve.',
						'Mezclar las claras a la mezcla de la batidora y remover con mucho cuidado para que no se baje.',
						'Depositar la mezcla en un molde grande para el mousse o en porciones individuales como queramos. Llevarlos a la nevera para que cuaje.',
						'A la hora de servir, acompañar el mousse con la pulpa fresca de maracuyá y algo de cereales.'
					]
				}
			]
		}
	]
});
