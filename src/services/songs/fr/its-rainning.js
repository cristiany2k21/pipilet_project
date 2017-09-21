import rainning from '../../../images/music-image/its-rainning.jpg';
import download from '../../download/songs/fr/song_fr_its-rainning.pdf';

export default (
{
	'id': 'fr',
	'download': download,
	'title': 'Il pleut',
	'sub-title': 'Chanson traditionnelle',
	'image': rainning,
	'language': '(Français)',
	'couplet': [
		[
			'Il pleut, l\'herbe pousse, la forêt verdit',
			'Il pleut, l\'herbe pousse, la forêt verdit.'
		],
		[
			'Dans la forêt, l\'arbre pousse, mince et haut',
			'Dans la forêt, l\'arbre pousse, mince et haut.'
		],
		[
			'Sous l\'arbre, ma sœur est assise, je suis près d\'elle',
			'Sous l\'arbre, ma sœur est assise, je suis près d\'elle.'
		]
	],
	information: {
		title: 'Translittération',
		description: [
			'Kicha pada',
			'Kicha pada, trava rastè, gora zèlèni, (2x)',
			'Ou toy gori rastè drvo tanko visoko. (2x)',
			'Pod nyim sèdi moya sèya, a ya porèd nyé. (2x)'
		]
	}
}
);
