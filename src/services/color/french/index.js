import draw from '../../../images/colors/french_draw.jpg';

export default ({
	id: 'french',
	colors: [
		'ROUGE',
		'JAUNE',
		'BLANC',
		'BLEU',
		'ORANGE',
		'VERT',
		'NOIR',
		'MARRON',
		'VIOLET',
		'ROSE'
	],
	game: {
		subTitle: 'MOTS MELANGÉS',
		words: [
			'Jaune',
			'Noir',
			'Rose',
			'Vert',
			'Marron',
			'Rouge',
			'Orange',
			'Blanc'
		],
		grid: [
			['P', 'C', 'E', 'I', 'V', 'V', 'R'],
			['J', 'A', 'U', 'N', 'E', 'O', 'O'],
			['T', 'H', 'T', 'O', 'R', 'S', 'U'],
			['M', 'G', 'P', 'I', 'T', 'H', 'G'],
			['E', 'S', 'O', 'R', 'Y', 'R', 'E'],
			['X', 'B', 'L', 'A', 'N', 'C', 'T'],
			['Z', 'T', 'O', 'S', 'P', 'R', 'U'],
			['A', 'M', 'A', 'R', 'R', 'O', 'N'],
			['O', 'R', 'A', 'N', 'G', 'E', 'S']
		]
	},
	drawing: [
		draw
	]
});
