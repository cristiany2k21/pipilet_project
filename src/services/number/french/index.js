import french from '../../../images/flag/french.png';
import little_draw from '../images/elephant_little_draw_number.png';
import big_draw from '../images/elephant_big_draw_number.png';
import download from '../../download/number/number_french.pdf';

export default (
{
	'header': 'CHIFFRES FRANÇAIS DE 1 À 100',
	'flag': french,
	'download': download,
	'draw': {
		'little-draw': little_draw,
		'big-draw': big_draw
	},
	'numbers': [
		[
			{letter: '1', value: 'Un'},
			{letter: '11', value: 'Onze'},
			{letter: '21', value: 'Vingt-et-un'},
			{letter: '31', value: 'Trente-et-un'}
		],
		[
			{letter: '2', value: 'Deux'},
			{letter: '12', value: 'Douze'},
			{letter: '22', value: 'Vingt-deux'},
			{letter: '32', value: 'Trente-deux'}
		],
		[
			{letter: '3', value: 'Trois'},
			{letter: '13', value: 'Treize'},
			{letter: '23', value: 'Vingt-trois'},
			{letter: '33', value: 'Trente-trois'}
		],
		[
			{letter: '4', value: 'Quatre'},
			{letter: '14', value: 'Quatorze'},
			{letter: '24', value: 'Vingt-quatre'},
			{letter: '34', value: 'Trente-quatre'}
		],
		[
			{letter: '5', value: 'Cinq'},
			{letter: '15', value: 'Quinze'},
			{letter: '25', value: 'Vingt-cinq'},
			{letter: '35', value: 'Trente-cinq'}
		],
		[
			{letter: '6', value: 'Six'},
			{letter: '16', value: 'Seize'},
			{letter: '26', value: 'Vingt-six'},
			{letter: '36', value: 'Trente-six'}
		],
		[
			{letter: '7', value: 'Sept'},
			{letter: '17', value: 'Dix-sept'},
			{letter: '27', value: 'Vingt-sept'},
			{letter: '37', value: 'Trente-sept'}
		],
		[
			{letter: '8', value: 'Huit'},
			{letter: '18', value: 'Dix-huit'},
			{letter: '28', value: 'Vingt-huit'},
			{letter: '38', value: 'Trente-huit'}
		],
		[
			{letter: '9', value: 'Neuf'},
			{letter: '19', value: 'Dix-neuf'},
			{letter: '29', value: 'Vingt-neuf'},
			{letter: '39', value: 'Trente-neuf'}
		],
		[
			{letter: '10', value: 'Dix'},
			{letter: '20', value: 'Vingt'},
			{letter: '30', value: 'Trente'},
			{letter: '40', value: 'Quarante'}
		]
	],
	'ten-numbers': [
		{letter: '50', value: 'Cinquante'},
		{letter: '60', value: 'Soixante'},
		{letter: '70', value: 'Soixante-dix'},
		{letter: '80', value: 'Quatre-vingts'},
		{letter: '90', value: 'Quatre-vingt-dix'},
		{letter: '100', value: 'Cent'}
	],
	'operator': [
		{letter: 'x', value: 'FOIS/PAR'},
		{letter: '-', value: 'MOINS'},
		{letter: ':', value: 'DIVISE'},
		{letter: '+', value: 'PLUS'},
		{letter: '=', value: 'EGAL'}
	],
	'exercice': [
		{letter: '5 + 8 =', value: 'Treize'},
		{letter: '10 + 30 =', value: ''},
		{letter: '15 + 40 =', value: ''},
		{letter: '20 + 50 =', value: ''},
		{letter: '60 + 20 =', value: ''}
	]

}
);
