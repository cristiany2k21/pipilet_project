import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/asia/liban.jpg';
import image2 from '../../../../images/cook/recipe/asia/liban2.jpeg';


export default ({
	flag: littleMan,
	title: 'RECETAS LIBANESAS',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Labneh',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'Medio litro de leche',
						'Una cucharada sopera de yogur'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Calentar la leche hasta unos 45o, o hasta que podamos mantener la punta del dedo dentro de la leche unos 10 segundos, sin quemarnos.',
						'Diluimos el yogur en un poco de la leche caliente. Lo mezclamos con la leche, que pondremos en una olla, preferentemente, de barro. Removemos con cuchara de madera.',
						'Tapamos la olla de barro con la tapa o con un plato. Tapamos con un trapo y dejamos reposar 5 o 6 horas. Yo la dejé toda la noche, tapada, en el horno apagado, puesto que tardó en empezar a cuajar.',
						'Una vez ha tomado consistencia la leche cuajada, ponemos en el frigorífico.'
					]
				}
			]
		},
		{
			title: 'Pastel Libanenes de naranja',
			image: image2,
			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'4 huevos.',
						'450gr. de naranjas enteras.',
						'200gr. Azúcar.',
						'1cucharadita de agua de azahar.',
						'8gr. levadura química',
						'200gr. almendra molida.',
						'Azúcar glas para decorar'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Lavar las naranjas y cocerlas cubiertas de agua durante 15 minutos en la olla a presión. Escurrir, dejar enfriar y reservar.',
						'Triturar las naranjas con la batidora.',
						'Batir el azúcar junto con los huevos hasta que la mezcla se ponga blanquecina. Añadir el puré de naranja, el azahar y la levadura y seguir batiendo hasta que se integre.',
						'Añadir la almendra y mezclar de forma manual con una espátula.',
						'Untar un molde con mantequilla, verter la masa y hornear a 170o durante 60 minutos. Pasado ese tiempo, apagar el horno, abrir la puerta y dejar reposar otros 10 minutos.',
						'Una vez frío, sacarlo del molde y espolvorear por encima con azúcar glas.'
					]
				}
			]
		}
	]
});
