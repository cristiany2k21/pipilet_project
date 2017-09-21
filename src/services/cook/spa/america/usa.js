import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/america/usa1.jpg';
import image1 from '../../../../images/cook/recipe/america/usa2.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETAS DE USA',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'DONUTS',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'1 kilo de harina',
						'400 g de agua a temperatura ambiente',
						'90 g de azúcar refinado',
						'12 g de sal',
						'20 g de levadura fresca',
						'100 g de huevo (bate dos huevos medianos, pesa y retira el sobrante)',
						'70 g de mantequilla, a temperatura ambiente',
						'10 g de ralladura de limón',
						'3 g de canela en polvo',
						'Aceite de girasol -preferentemente- o de oliva muy suave para freír'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Poner todos los ingredientes, salvo la mantequilla, en un bol grande que nos permita mezclar a mano con comodidad. Mezclar con una mano, haciendo movimientos envolventes, hasta que no quede harina dentro del bol.',
						'Si es necesario se puede echar un poquito de agua para la unión de la masa, ya sabéis que la cantidad de agua puede variar considerablemente, dependiendo de la harina. Se trata de una masa firme pero elástica a la vez, debe ser fácil de trabajar. Una vez bien mezclado, tapar con plástico y reposar 10 minutos.',
						'Amasar sobre la encimera. No debería hacer falta harina ni aceite para amasar.',
						'Realizar tres rondas de amasados hasta que la superficie sea lisa, añadiendo en la última la mantequilla a temperatura ambiente. Tapar y dejar reposar otros 10 minutos para que el gluten se relaje.',
						'Estirar con un rodillo hasta conseguir un grosor (uniforme) de 1cm aproximadamente y cortar tantas piezas como sea posible: se pueden congelar perfectamente y freír en cualquier otro momento.',
						'Para aquellas piezas que vayamos a terminar en el momento, colocarlas sobre un papel de horno y dejar que fermenten hasta haber crecido considerablemente, aproximadamente una hora.',
						'Calentar aceite para freír. Aquí llegamos a uno de los puntos clave: el aceite no debe estar demasiado caliente, pues los donuts cogerían demasiado color y no se cocerían del todo por dentro. Haced un par de pruebas hasta que los donuts puedan freírse 2 minutos por lado sin quemarse, alrededor de 180oC.',
						'Sacar del aceite con una espumadera y enfriar en una rejilla. Decorar con azúcar espolvoreado, con chocolate o con una glas hecho con una parte de agua por cuatro de azúcar glas.'
					]
				}
			]
		},
		{
			title: 'New York Cheesecake',
			image: image1,
			sectionIngredient: [
				{
					title: 'Ingredientes:',
					ingredient: [
						'Un paquete de galletas maría (o digestive)',
						'85 g de mantequilla',
						'900 g de queso crema, tipo philadelphia',
						'200 ml de crème fraîche (o yogur griego)',
						'250 gr de azúcar',
						'3 huevos',
						'zumo de medio limón',
						'3 cucharadas soperas de harina de repostería',
						'una pizca de vainilla',
						'300 gr de frambuesas (pueden ser congeladas)',
						'zumo de medio limón',
						'una hoja de gelatina',
						'3 cucharadas soperas de azúcar.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Preparación:',
					preparation: [
						'Precalentamos el horno a 200 oC.',
						'Comenzamos preparando la base. Para ello, trituramos las galletas con ayuda de un robot de cocina, o metiéndolas dentro de una bolsa y golpeándolas con un rodillo, hasta obtener un polvo de galleta fino.',
						'Derretimos la mantequilla y mezclamos con la galleta en polvo (debe quedar como arena mojada). Cubrimos la base de un molde desmontable de 20 a 24 cm con papel de hornear,  distribuimos encima la masa de galleta, presionando bien, e introducimos en el congelador mientras preparamos el relleno de nuestra tarta de queso.',
						'Batimos el queso crema con unas varillas, añadimos el azúcar, la crème fraîche (o el yogur), la vainilla, el limón y la harina, hasta obtener una pasta lisa. Añadimos a continuación los huevos de uno en uno, pero sin batir mucho, lo justo para que se incorporen pero no coja mucho aire la masa. Ponemos la mezcla de queso sobre la base de galletas que habíamos preparado previamente.',
						'Introducimos nuestra tarta de queso en el horno, y horneamos 10 minutos a 200 oC. Posteriormente bajamos la temperatura a 90 oC y horneamos durante 30 minutos más. El interior de la tarta, al moverlo, parecerá un flan.',
						'Una vez pasado este tiempo, dejamos la tarta de queso en el horno apagado varias horas. Una vez a temperatura ambiente la tarta, la llevamos al frigorífico hasta que esté totalmente fría (lo mejor es preparar la tarta de un día para otro).',
						'Por último preparamos la salsa de frambuesa. Hidratamos la hoja de gelatina en un vaso de agua fría durante 5 minutos.',
						'En un cazo aparte, calentamos las frambuesas lavadas con el zumo de limón y el azúcar, y removemos constantemente, triturando al mismo tiempo las frambuesas.',
						'Si os molestan las pepitas podéis colar la salsa de frambuesa antes del siguiente paso.',
						'Cuando la salsa de frambuesa esté bien caliente, y triturada a nuestro gusto, incorporamos la gelatina bien escurrida a esta mezcla, removiendo hasta que se disuelva totalmente.',
						'Distribuimos la salsa de frambuesa sobre la tarta y se metemos de nuevo en la nevera hasta que vayamos a consumirla.'
					]
				}
			]
		}
	]
});
