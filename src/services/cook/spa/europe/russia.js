import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/europe/russia.jpg';
import image2 from '../../../../images/cook/recipe/europe/russia2.jpeg';

export default ({
	flag: littleGirl,
	title: 'RECETAS RUSAS',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Manzanas asadas al horno \'Assorti\'.',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'Confitura de albaricoque - 2 cucharaditas',
						'Piñones - 1 cucharadita',
						'Jengibre molido - 1 pizca',
						'Sirope de fresa - 2 cucharaditas',
						'Sémola - 1 cucharadita',
						'Vainilla - 1 pizca',
						'Miel – 1 cucharadita',
						'Nueces - 3 unidades',
						'Agua - 3 cucharadas',
						'Manzanas verdes - 3 unidades',
						'Canela - 1 pizca'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Lavar las manzanas y descorazonarlas con un cuchillo especial o habitual. Se puede cortar de lado a lado. Entonces en el molde se formará una capa de mermelada.',
						'Verter en el molde agua (opcional). Poner las manzanas en el molde. En la primera manzana poner la mermelada de albaricoque, a continuación, añadir los piñones y una pizca de jengibre, si lo deseas.',
						'La segunda manzana rellenar con el sirope de la mermelada de fresa mezclado con sémola y espolvorear con la vainilla.',
						'En la tercera manzana poner las nueces picadas, llenar con miel y espolvorear con canela.',
						'Asar en el horno precalentado hasta 200ºC durante 20-30 minutos. Servir calientes o frías'
					]
				}
			]
		},
		{
			title: 'Pastel de zanahoria',
			image: image2,
			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'Huevos - 4 unidades',
						'Azúcar - 2 tazas',
						'Aceite de girasol - 1,5 tazas',
						'Harina - 2 tazas',
						'Zanahorias ralladas - 3 tazas',
						'Nueces 120 g (se puede con pacanas, es más sabroso)',
						'Canela molida - 2 cucharaditas',
						'Soda - 2 cucharaditas',
						'Sal - 1 cucharadita'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Mezclar los huevos, azúcar y la mantequilla. Aparte mezclar los ingredientes secos, mezclar todo y añadir las zanahorias y las nueces. Colocar la masa en el molde y hornear a 160ºC.',
						'El pastel se puede cortar en dos tortas y echar la crema de mascarpone o crema de un 35% batida.',
						'Servir una vez esté frío.'
					]
				}
			]
		}
	]
});
