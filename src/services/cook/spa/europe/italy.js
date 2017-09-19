import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/europe/italy.jpg';
import image2 from '../../../../images/cook/recipe/europe/italy2.jpeg';

export default ({
  flag: littleMan,
  title: 'RECETAS ITALIANAS',
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: 'Mousse de chocolate.',
      image: image,
      sectionIngredient: [
        {
          title: 'Ingredientes:',
          ingredient: [
            '100 gramos de cacao dulce.',
            '50 gramos de azúcar.',
            '0,4 litros de nata batida para postres.',
            'un poco de vainilla.',
          ],
        },
      ],
      sectionPreparation: [
        {
          title: 'Preparación del mousse de chocolate:',
          preparation: [
            'Echa el cacao a una pequeña cacerola, caliéntalo junto a poquito de agua (0,1 litros) hasta que se disuelva. En otra cacerola repita la operación con el azúcar. Después, une el cacao disuelto al azúcar y déjalo enfriar.',
            'Une la nata batida y la vainilla, vierta en una copa de cristal y, si quiere, añade trozos de chocolate o fruta confitada. Guarde en el frigorífico antes de servir.',
          ],
        },
      ],
    },
    {
      title: 'Salami de chocolate',
      image: image2,
      sectionIngredient: [
        {
          title: 'Ingredientes:',
          ingredient: [
            '200 g de chocolate negro 70%',
            '100 g de mantequilla (o margarina)',
            '2 yemas de huevo',
            '8 galletas (80g) de mantequilla',
            '7 bizcochos de soletilla (40g)',
            'Una mezcla de 40 g de almendras peladas, avellanas y piñones',
            '1-2 cucharadas de azúcar en polvo para recubrimiento',
          ],
        },
      ],
      sectionPreparation: [
        {
          title: 'Receta para hacer el Salami de chocolate:',
          preparation: [
            'Picar el chocolate y colocar en un tazón o recipiente resistente al calor. Añadir la mantequilla cortada en trozos y colocar el recipiente sobre una olla de agua hirviendo (la parte inferior del recipiente no debe tocar el agua). Derretir al baño maría a fuego lento, revolviendo de vez en cuando con una cuchara de madera.',
            'Una vez que la mezcla se derrite y forma una mezcla cremosa y suave, retirar del baño de agua y dejar enfriar. A continuación, añadir las yemas de huevo. Mezclar de manera uniforme y reservarmientras preparamos las galletas.',
            'Cortar las galletas en trozos irregulares (para simular la grasa del salami) e incorporar a la mezcla de chocolate (incluyendo migas) junto con los frutos secos enteros. Amasar hasta que quede una pasta que se pueda moldear fácilmente con las manos.',
            'Colocar un rectángulo grande de papel de aluminio sobre la encimera y situar encima un rectángulo de papel film. Extender la mezcla con una longitud de unos 35 cm y luego doblar la envoltura de plástico en los extremos para darle forma de salchichón. Doblar los extremos de la envoltura de plástico en un movimiento de tornillo.',
            'Envolver el salami de chocolate con papel aluminio y colocarlo en la nevera varias horas (mínimo 3 horas) o una noche para que se endurezca. Para los impacientes se puede introducir en el congelador durante media hora.',
            'Al día siguiente, o cuando el salami esté duro, hacerlo rodar un poco en la encimera para moldear más la forma y luego retirar el papel aluminio y el plástico.',
            'Echar el azúcar en polvo en la encimera de trabajo y hacer rodar el salami para que se impregne bien. Con un pincel, quitar el exceso de azúcar antes de cortar unas rodajas no muy finas y servir preferentemente en un tablero de madera para completar el parecido.',
          ],
        },
      ],
    },
  ],
});
