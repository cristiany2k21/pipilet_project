import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/america/usa1.jpg';
import image1 from '../../../../images/cook/recipe/america/usa2.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTES DES USA',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'DONUTS',
			image: image,

			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'1 kg de farine',
						'400 g d’eau à température ambiante',
						'90 g de sucre blanc',
						'12 g de sel',
						'20 g de levure',
						'100 g d’oeuf (mélanger 2 oeufs moyens peser et retirer l’excédent)',
						'70 g de beurre à température ambiante',
						'10 g de zestes de citron',
						'3 g de cannelle en poudre',
						'Huile de tournesol ou d’arachide pour frire'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Mettre tous les ingrédients à l’exception du beurre dans un grand saladier et mélanger le tout à la main. Malaxer à une main en un mouvement des doigts enveloppant jusqu’à complète intégration de la farine dans la pâte.',
						'Au besoin, il est possible d’ajouter un peu de farine afin que la pâte se forme, le volume étant très variable en fonction du type de farine utilisé. La pâte doit être ferme et élastique à la fois. Elle doit être facile à travailler. Une fois la pâte terminée, la filmer avec une feuille alimentaire et laisser reposer 10 minutes au réfrigérateur.',
						'Masser la pâte sur le plan de travail bien fariné et remettre au réfrigérateur.',
						'Recommencer trois fois et ajouter le beurre pommade. Masser jusqu’à ce que la surface de la pâte soit totalement lisse. Filmer à nouveau et laisser reposer 10 minutes au réfrigérateur.',
						'Etaler la pâte au rouleau à une épaisseur de 1 cm et couper autant de pièces que possible. Elles peuvent se congeler parfaitement et frire quand on le souhaite.',
						'Pour les morceaux qu’on souhaite cuire, les placer sur un papier cuisson et les laisser monter à température ambiante environ une heure.',
						'Faire chauffer l’huile de friture. Nous arrivons alors au point clé: l’huile doit être chaude mais pas trop car sinon les donuts deviennent trop foncés à l’extérieur alors qu’ils ne seront pas cuits à l’intérieur. Faire quelques essais en laissant frire les donuts environ deux minutes avec normalement une température de l’huile autour des 180°C.',
						'Sortir les Donuts de la friteuse avec un écumoir laisser refroidir sur une grille. Suapoudrer de sucre,  chocolat ou sucre glace mélangé à de l’eau dans une proportion de 1 dose d’eau pour 4 de sucre glace.'
					]
				}
			]
		},
		{
			title: 'New York Cheesecake',
			image: image1,
			sectionIngredient: [
				{
					title: 'Ingrédients:',
					ingredient: [
						'Un paquet de biscuit au beurre type Petit Lu',
						'85 gr de beurre',
						'900 gr de fromage frais, type Philadelphia',
						'200 ml de crème fraîche (o yaourt à la grecque)',
						'250 gr de sucre',
						'3 oeufs',
						'jus d’un demi citron',
						'3 cuillères à soupe de farine pour pâtisserie',
						'une pincée de vanille',
						'300 gr de framboises (fraîches ou congelées)',
						'jus d’un demi citron',
						'une feuille de gélatine',
						'3 cuillères à soupe de sucre.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation:',
					preparation: [
						'Préchauffer le four à 200 oC.',
						'Pour la base, broyer les biscuits jusqu’à obtenir une fine poudre de biscuit.',
						'Faire fondre le beurre et l’ajouter à la poudre de biscuit. Mélanger et enfoncer le fond du moule à charnière de 20 à 24 cm préalablement recouvert de papier cuisson. Placer l’ensemble au congélateur pendant que nous préparons la garniture.',
						'Battre le fromage frais au fouet et ajouter le sucre, la crème fraîche (ou le yaourt grec), la vanille, le citron et la farine. Ajouter les oeufs un à un en remuant doucement jusqu’à complète intégration. La préparation doit être lisse. Verser toute la préparation sur la base de biscuit préparé précédemment.',
						'Placer le gâteau au four et laisser chauffer 10 minutes à 200°C puis baisser la température 90°C et laisser cuire 30 minutes de plus. La préparation doit alors ressembler à un flan au centre quand on la secoue.',
						'Eteindre le four et laisser le Cheesecake dans le four plusieurs heures jusqu’à complet refroidissement. Une fois à température ambiante, placer le Cheesecake au réfrigérateur jusqu’à ce qu’il devienne complètement froid (l’idéal est de faire le gâteau la veille).',
						'En dernier il faut préparer le coulis de framboise. Hydrater la feuille de gélatine dans de l’eau froide pendant 5mn.',
						'Dans une casserole, faire chauffer les framboises avec le jus de citron et le sucre. Remuer constamment et écraser les framboises en même temps.',
						'Si les pépins de framboise vous gênent vous pouvez passer à la passoire le coulis à cette étape.',
						'Lorsque le coulis est bien chaud, essorer la gélatine et l’incorporer à la préparation. Mélanger jusqu’à complète dissolution.',
						'Verser alors le coulis de framboise sur le Cheesecake et replacer au réfrigérateur jusqu’au moment du service.'
					]
				}
			]
		}
	]
});
