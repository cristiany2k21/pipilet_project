import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/america/haiti.jpg';
import image2 from '../../../../images/cook/recipe/america/haiti2.jpg';

export default ({
  flag: littleGirl,
  title: "RECETAS DE HAITI",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "BANANA AL ZUMO DE NARANJA",
      image: image,

      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "4 bananas",
            "4 naranjas",
            "2 limones",
            "125 g de azúcar",
            "Un copo de manteca",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Se enmanteca una cazuela térmica.",
            "Se pelan las bananas y se cortan en rodajitas.",
            "Se pelan dos naranjas, se cortan en rodajas.",
            "Se exprime la pulpa de las naranjas restantes y de los limones y se deja aparte el zumo.",
            "Se colocan en la cazuela las rodajitas de banana; posteriormente colocamos las naranjas cortadas en rodajas encima de los plátanos, se espolvorea con el azúcar y se rocía con el zumo que se había apartado.",
            "Se introduce el recipiente en el horno a calor moderado y se deja hasta que la superficie se coloree ligeramente.",
          ]
        }
      ]
    },
    {
      title: "PLÁTANO FRITO HAITIANO",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "3 plátanos maduros",
            "1 cucharada de harina",
            "1/2 cucharadita de canela en polvo",
            "1/2 cucharadita de extracto de vainilla",
            "1 cucharada de azúcar",
            "1/8 cdta de bicarbonato de soda",
            "Azúcar (opcional)",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Receta para hacer el Mousse:",
          preparation: [
            "Mezclar la harina, azúcar, vainilla y canela en un recipiente, pasar los plátanos por esta mezcla yfreír en aceite bien caliente, hasta dorar.",
            "Escurrir sobre papel absorbente y servir espolvoreando azúcar por encima.",
          ]
        }
      ]
    }
  ]
})