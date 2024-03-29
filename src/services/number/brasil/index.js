import brasil from '../../../images/flag/brasil.png';
import little_draw from '../images/bike_little_draw_number.png';
import big_draw from '../images/bike_big_draw_number.png';
import download from '../../download/number/number_brasil.pdf';

export default (
{
	'header': 'BRASIL NÚMEROS DO 1 AOS 100',
	'flag': brasil,
	'download': download,
	'draw': {
		'little-draw': little_draw,
		'big-draw': big_draw
	},
	'numbers': [
		[
			{letter: '1', value: 'Um/Uma'},
			{letter: '11', value: 'Onze'},
			{letter: '21', value: 'Vinte e um'},
			{letter: '31', value: 'Trinta e um'}
		],
		[
			{letter: '2', value: 'Dois/Duas'},
			{letter: '12', value: 'Doze'},
			{letter: '22', value: 'Vinte e dois'},
			{letter: '32', value: 'Trinta e dois'}
		],
		[
			{letter: '3', value: 'Três'},
			{letter: '13', value: 'Treze'},
			{letter: '23', value: 'Vinte e três'},
			{letter: '33', value: 'Trinta e três'}
		],
		[
			{letter: '4', value: 'Quatro'},
			{letter: '14', value: 'Catorze'},
			{letter: '24', value: 'Vinte e quatro'},
			{letter: '34', value: 'Trinta e quatro'}
		],
		[
			{letter: '5', value: 'Cinco'},
			{letter: '15', value: 'Quinze'},
			{letter: '25', value: 'Vinte e cinco'},
			{letter: '35', value: 'Trinta e cinco'}
		],
		[
			{letter: '6', value: 'Seis'},
			{letter: '16', value: 'Dezasseis'},
			{letter: '26', value: 'Vinte e seis'},
			{letter: '36', value: 'Trinta e seis'}
		],
		[
			{letter: '7', value: 'Sete'},
			{letter: '17', value: 'Dezassete'},
			{letter: '27', value: 'Vinte e sete'},
			{letter: '37', value: 'Trinta e sete'}
		],
		[
			{letter: '8', value: 'Oito'},
			{letter: '18', value: 'Dezoito'},
			{letter: '28', value: 'Vinte e oito'},
			{letter: '38', value: 'Trinta e oito'}
		],
		[
			{letter: '9', value: 'Nove'},
			{letter: '19', value: 'Dezanove'},
			{letter: '29', value: 'Vinte e nove'},
			{letter: '39', value: 'Trinta e nove'}
		],
		[
			{letter: '10', value: 'Dez'},
			{letter: '20', value: 'Vinte'},
			{letter: '30', value: 'Trinta'},
			{letter: '40', value: 'Quarenta'}
		]
	],
	'ten-numbers': [
		{letter: '50', value: 'Cinquenta'},
		{letter: '60', value: 'Sessenta'},
		{letter: '70', value: 'Setenta'},
		{letter: '80', value: 'Oitenta'},
		{letter: '90', value: 'Noventa'},
		{letter: '100', value: 'Cem/Cento'}
	],
	'operator': [
		{letter: 'x', value: 'PARA'},
		{letter: '-', value: 'MENOS'},
		{letter: ':', value: 'DIVIDIDO'},
		{letter: '+', value: 'MA'},
		{letter: '=', value: 'IGUAL'}
	],
	'exercice': [
		{letter: '5 + 8 =', value: 'Treze'},
		{letter: '10 + 30 =', value: ''},
		{letter: '15 + 40 =', value: ''},
		{letter: '20 + 50 =', value: ''},
		{letter: '60 + 20 =', value: ''}
	]

}
);
