import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/africa/maroc.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETAS MARROQUIES',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Bizcocho de limón',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingrediente:',
					ingredient: [
						'200 g harina.',
						'150 g azúcar.',
						'100 ml de aceite.',
						'4 huevos.',
						'ralladura de un limón.',
						'2 cucharadas de zumo de limón.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Dentro de un bol echamos los huevos y el azúcar, mezclamos todo muy bien, después añadimos el aceite, la ralladura de limón y dos cucharadas de zumo de limón, mezclamos todo de nuevo.',
						'Aparte en otro bol mezclamos el harina y levadura química y la añadimos a la primera mezcla.',
						'A continuación ponemos la mezcla en un molde enharinado y lo metemos en el horno a 180 grados sólo de fuego abajo y cuando esté cocido lo pongo el fuego de arriba para que coja más calor (más o menos 30 minutos).',
						'Cuando lo sacamos de el horno metemos un cuchillo dentro para comprobar si está listo, por lo que si sale limpio, está listo sólo hay que dejarlo enfriar .',
						'Una vez frío lo sacamos del molde y lo ponemos en una fuente para servir.'
					]
				}
			]
		},
		{
			title: 'Tarta de flan y chocolate',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'Un paquete y medio de galletas cuadradas (las que más os gusten)',
						'Un poco de leche (para mojar las galletas)',
						'1 litro de leche (para el flan)',
						'2 sobres de flan',
						'4-5 cucharadas de azúcar para el flan (según el gusto)',
						'200 gramos de chocolate negro de repostería',
						'(para cubrir la tarta)',
						'1 cuchara grande de mantequilla',
						'(para fundir el chocolate)',
						'1 brik pequeño de nata líquida (para fundir el chocolate)',
						'Coco rallado (para decorar)'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Receta:',
					preparation: [
						'Cogemos un molde cuadrado. Lo primero que haremos será hacer la base de la tarta. Para ello vamos mojando las galletas en un poco de leche y las vamos colocando sobre el molde. Haremos una base de dos pisos de galletas.',
						'Hacemos el flan como lo indica el fabricante en el envase. Para ello necesitamos 1 litro de leche. Separamos un poco en un vaso grande y ponemos el resto en un cazo a calentar a fuego medio con el azúcar. Removemos de vez en cuando. En el vaso que hemos separado,  disolvemos los sobres de preparado para flan. Cuando la leche del cazo empiece a hervir,  añadimos el vaso con los polvos del flan sin parar de remover hasta que espese y vuelva a hervir.',
						'Cuando el flan esté listo lo vertemos sobre nuestra base de galletas.',
						'Encima del flan ponemos otra capa doble de galletas mojadas en leche.',
						'Ahora preparamos nuestra cobertura de chocolate. Ponemos a calentar la nata líquida a fuego medio. Cuando hierva apagamos el fuego y añadimos el chocolate a trozos sin parar de remover para que se funda. Cuando se haya fundido añadimos 1 cuchara grande de mantequilla y movemos bien. Esto le dará brillo al chocolate.',
						'Cuando la cobertura de chocolate esté lista la echamos sobre la última capa de galletas. Decoramos por encima con coco rallado.',
						'Ahora esperamos que se enfríe un poco y la metemos al frigorífico unas horas antes de servir.'
					]
				}
			]
		}
	]
});
