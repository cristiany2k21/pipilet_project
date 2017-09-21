import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/europe/german.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
	flag: littleGirl,
	title: 'RECETTES ALLEMANDES',
	imagePipilet: pipiletCooker,
	recipe: [
		{
			title: 'Recette de biscuits de Pâques : Osterkekse.',
			image: image,
			sectionIngredient: [
				{
					title: 'Ingrédients pour la pâte',
					ingredient: [
						'500g de farine.',
						'250g de beurre.',
						'200g de sucre.',
						'2 œufs.',
						'1 paquet de sucre vanillé.',
						'Une pointe de cannelle (la pointe d’un'
					]
				},
				{
					title: 'Ingrédients pour le glaçage',
					ingredient: [
						'1 blanc d’œuf.',
						'1 pincée de sel.',
						'200g de sucre glace.',
						'Du colorant alimentaire.'
					]
				}
			],
			sectionPreparation: [
				{
					title: 'Préparation de la pâte pour les biscuits:',
					preparation: [
						' Mettre la farine dans un bol.',
						' Ajouter à la farine des morceaux de beurre, le sucre, les œufs, le sucre vanillé et la cannelle. Travailler le tout avec les mains jusqu’à obtenir une pate compacte.',
						' Enrouler la pâte en forme de boule dans un film transparent et laisser reposer dans le frigo entre 30 et 60 minutes.',
						' Préchauffer le four à 180°C.',
						' Une fois la pâte froide, enlever le film et à l’aide d’un rouleau ; travailler la pâte jusqu’à obtenir une pâte de 5 millimètres d’épaisseur. Plus fine, les biscuits se casseraient.',
						' Presser la pâte avec le moule de biscuit choisi et disposer les biscuits sur une plaque de four sur du papier sulfurisé.',
						' Mettre la plaque dans la partie moyenne du four et enfourner les biscuits pendant 10 minutes, en contrôlant qu’ils ne soient pas trop cuits.',
						' Une fois cuits, sortir la plaque du four et déposer les biscuits sur une surface plane. Nous recommandons de le faire en tirant le papier sulfurisé. Les laisser refroidir au-dessus du papier avant de procéder à la décoration avec le glaçage.'
					]
				},
				{
					title: 'Elaboration du glaçage',
					preparation: [
						'Monter les blancs en neige avec une pointe de sel. On peut utiliser 2 blancs d’œufs si on veut obtenir une plus grande quantité de glaçage.',
						'Ajouter le sucre glace aux blancs d’œuf et monter jusqu’à obtenir une crème compacte. Si le glaçage est trop liquide, mettre plus de sucre glace.',
						'La couleur du glaçage obtenu sera blanche. On peut colorer le glaçage avec les couleurs de notre choix, grâce aux colorants alimentaires. Déposer un peu de glaçage dans de petits bols et mélanger avec la couleur de son choix dans chaque bol.',
						'Remplir du glaçage une seringue de pâtissier pour décorer les biscuits. Sinon, on peut prendre un sac de congélation et le remplir du glaçage, et couper une des pointes du sac. Ou sinon avec une cuillère/couteau manuellement, en fonction de la décoration choisie.',
						'Décorer les biscuits selon ton goût et ton imagination.'
					]
				}
			]
		}
	]
});
