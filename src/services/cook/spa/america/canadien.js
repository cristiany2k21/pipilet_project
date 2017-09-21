import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/america/canada.jpg';

export default ({
	flag: littleMan,
	title: 'RECETA CANADIENSE',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Trempettes',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'125 gr de harina .',
						'una pizca de sal',
						'1 huevo y 1 yema de huevo',
						'300 ml de leche',
						'15 ml de mantequilla derretida',
						'Miel de arce pura',
						'mantequilla'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Coloca la harina y la sal un recipiente grande, luego haz un hueco en el centro de la harina.',
						'Pon dentro del hueco que has hecho el huevo entero y la yema de otro.',
						'Incorpora lentamente la mitad de la leche revolviendo continuamente.',
						'Con ayuda de un batidor, introduce la mantequilla derretida y bate todo hasta obtener una masa cremosa.',
						'Posteriormente agrega el resto de la leche y déjalo en reposo durante una hora antes de hacer los crepes.'
					]
				}
			]
		}
	]
});
