import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/asia/vietnam.jpeg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETAS DE VIETNAM',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Chè chuối',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'1 c/s de semillas de sésamo.',
						'3 c/s de tapioca.',
						'350 ml de agua.',
						'1 pizca de sal.',
						'125 ml de leche de coco.',
						'3 c/s de azúcar.',
						'1 plátano.',
						'Mantequilla (un poco)'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'En una sartén pon a que se tuestan ligeramente las semillas de sésamo.',
						'Poner un cazo al fuego con el agua y la llevamos a ebullición. Cuando comience a hervir echamos la tapioca, bajamos el fuego al mínimo, y lo dejamos cocer 20 minutos removiendo de cuando en cuando.',
						'Añadimos la leche de coco, el azúcar y la sal. Removemos bien y seguimos cociendo por 3 minutos.',
						'Cortamos el plátano en rodajas. Reservamos algunas para la decoración y el resto las echamos en el cazo removiendo y dejando cocer durante unos minutos hasta que la mezcla espese.',
						'Lo ponemos en unos cuencos y dejamos templar.',
						'En una sartén derretimos la mantequilla y freímos ligeramente las rodajas de plátano que hemos reservado.',
						'Lo servimos decorando con el plátano frito y las semillas de sésamo.'
					]
				}
			]
		}
	]
});
