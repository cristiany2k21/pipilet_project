import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/africa/benin.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETA DE BENIN',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'BANANAS DULCES EN SALSA DE NARANJA',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'4 plátanos poco maduros.',
						'1⁄2 taza de jugo de naranja recién exprimido',
						'1 cucharada de jugo de limón fresco exprimido',
						'1⁄2 taza de azúcar morena',
						'Helado de vainilla'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Calentar el jugo de naranja, jugo de limón y el azúcar moreno en una sartén durante unos 15 minutos. Debe reducir y espesar en un jarabe.',
						'Pelar los plátanos o bananas, cortándolos por la mitad y cocinar en el jarabe hasta que se caliente.',
						'Servir inmediatamente sobre el helado de vainilla.'
					]
				}
			]
		}
	]
});
