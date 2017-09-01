import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import image from '../../../../images/cook/recipe/asia/china.jpg';
import image2 from '../../../../images/cook/recipe/asia/china2.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';

export default ({
  flag: littleGirl,
  title: "RECETTES CHINOISES",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Glace frite.",
      image: image,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "• Mie de pain (2 tranches par glace)",
            "• Un peu de lait dans un bol",
            "• Pot de crème glacée, selon gouts (chocolat, vanille, crème...)",
            "• 1,5 verre de farine",
            "• 1 verre de lait",
            "• 1 œuf",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Couper les bords du pain de mie.",
            "Faire des boules de glace. Mouiller les bords du pain de mie avec un peu de lait et mettre les boules de glace sur le pain.",
            "Prendre le 2ème pain de mie et couvrir la glace pour former un losange.",
            "Bien le manipuler à la main pour lui donner une forme rebondie et l’envelopper dans du papier d’aluminium. Le mettre au congélateur jusqu’à ce qu’il soit dur comme une pierre (1 jour entier).",
            "Le lendemain, faire la pâte panée pour frire la glace. Mettre dans un bol l’œuf, la farine et le lait. Bien battre jusqu’à ce qu’il n’y ait plus de grumeaux.",
            "Faire chauffer l’huile. Mettre la glace sortie du congélateur dans le bol et bien l’imbiber avant de la faire frire. Attention à l’huile brulante. Frire jusqu’à ce que ce soit bien doré.",
            "Les sortir et les mettre sur un plateau avec un sopalin pour absorber l’huile Mettre ensuite la glace sur un plateau et mettre dessus ce que vous voulez (du miel, du chocolat ou du sirop par exemple).",
          ]
        }
      ]
    },
    {
      title: "Flan aux céréales de chocolat",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingrédients:",
          ingredient: [
            "1litro leche .",
            "200 gr azúcar moreno .",
            "1 sache de flan instantané.",
            "150g de céréales type riz soufflé.",
            "canelle en poudre",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Préparation:",
          preparation: [
            "Dans une casserole, faire bouillir le lait et le sucre. À ébullition, ajouter le sache de flan instantané et remuer pour éviter les grumeaux.",
            "Dans chaque moule à flan, déposer une poignée de céréales et verser le mélange de flan",
            "Laisser refroidir dans le frigo. Au moment de servir, verser dessus le caramel.",
          ]
        }
      ]
    }
  ]
})