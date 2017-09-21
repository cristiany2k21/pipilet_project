import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/europe/german.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETAS ALEMANAS',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Receta de galletas de Pascua: Osterkekse.',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes para la masa:',
					ingredient: [
						'500 g Mehl – harina.',
						'250 g Butter – mantequilla.',
						'200 g Zucker – azúcar.',
						'2 Eier – huevos.',
						'1 Päckchen Vanillezucker – paquete azúcar de vainilla.',
						'Messerspitze Zimt – un poquitín de canela (la puntita de un cuchillo)'
					]
				},
				{
					title: 'Ingredientes para el glaseado',
					ingredient: [
						'1 Eiweiß – clara de huevo',
						'1 Prise Salz – pellizco de sal',
						'200 g Puderzucker – azúcar glass',
						'bunte Lebensmittelfarbe – colorante alimentario'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación de la masa para las galletas:',
					preparation: [
						'Poner la harina en un bol.',
						'Añadir en el bol de la harina: la mantequilla cortada en trocitos, el azúcar, los huevos, el azúcar de vainilla y la canela. Trabajar todo con las manos de fuera hacia dentro hasta conseguir una masa compacta.',
						'Envolver la masa como si fuera una pelota en un papel transparente (film) y dejar reposar en la nevera entre 30 y 60 minutos.',
						'Precalentar el horno a 180 grados.',
						'Cuando se haya enfriado la masa, quitaremos el papel film y, con la ayuda de un rodillo, la iremos trabajando hasta obtener una capa de unos 5 milímetros de grosor. Más fina no, de lo contrario las galletas se romperán.',
						'Presionar con el molde de galletas escogido sobre la masa e ir depositándolas en la bandeja del horno que habremos cubierto previamente con papel de hornear.',
						'Colocar la bandeja en la parte media del horno y hornear las galletas unos 10 minutos, controlando que no se doren demasiado.',
						'Una vez horneadas, sacar la bandeja del horno y depositar las galletas con mucho cuidado sobre una superficie plana. Se recomienda hacerlo tirando del papel de hornear. Dejarlas enfriar encima del papel antes de proceder a decorarlas con el glaseado.'
					]
				},
				{
					title: 'Elaboración del glaseado',
					preparation: [
						'Batir la clara del huevo con el pellizco de sal a punto de nieve. Pueden utilizarse un par de claras si se desea obtener una cantidad de glaseado mayor.',
						'Echar el azúcar glas junto a las claras y batir hasta obtener una crema compacta. En caso de que el glaseado sea demasiado líquido, echar algo más de azúcar glas.',
						'El color del glaseado resultante será de color blanco. Podemos teñir el glaseado con los colores que más nos gusten. Para ello pondremos en pequeños bols un poco del glaseado y lo mezclaremos con el color deseado.',
						'Rellenar una manga pastelera con el glaseado escogido para decorar las galletas. También puede hacerse rellenando con el glaseado una bolsa de congelar y cortando una de las puntitas. O con una cuchara manualmente, dependiendo de la decoración que se elija.',
						'Decorar las galletas al gusto e imaginación de cada uno.'
					]
				}
			]
		}
	]
});
