import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/asia/singapour.jpg';
import image2 from '../../../../images/cook/recipe/asia/singapour2.jpg';


export default ({
  flag: littleMan,
  title: "RECETAS DE SINGAPUR",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Melocotón con de vainilla",
      image: image,

      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "Melocotones maduros",
            "Helado de vainilla",
            "Avellanas tostadas",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Se pelan los melocotones y se les quita el hueso. Se pasa la carne de los melocotones por la batidora y se reservan en el frigorífico.",
            "A parte, se pican las avellanas procurando que queden trocitos no muy finos. En una copa se pone un poco de helado de vainilla , una buena parte de puré de melocotón y, finalmente, un puñado de avellanas troceadas y se sirve inmediatamente.",
          ]
        }
      ]
    },
    {
      title: "Mochi de helado",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "1 vaso de harina de arroz.",
            "3/4 vaso de agua.",
            "1/2 vaso de azúcar.",
            "Helado de cualquier sabor que os guste.",
            "Harina de arroz para enharinar",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Preparar el helado. Esperar que el helado esté un poco derretido para poder sacarlo y darle forma con facilidad.",
            "Utilizar un molde de hielo para formar el helado. Congelar el helado de nuevo.",
            "Ahora vamos a preparar la pasta. Con un batidor manual mezclar bien la harina, el agua y el azúcar en un recipiente.",
            "Taparlo con un plástico transparente y cocinarlo en el microondas a máxima potencia durante 5 minutos.",
            "Sacar el recipiente con mucho cuidado. Remover la masa con una cucharada de madera.",
            "Echarla en una superficie que esté enharinada con mucha cantidad de harina de arroz. Echar más harina de arroz encima de la masa. Enrollar la masa hasta que tenga 2 -3 mm de grosor.",
            "Utilizar un vaso pequeño de 5 cm de diámetro para dar la forma y cortar la masa.",
            "Meter la masa en el frigo para que esté frio.",
            "El paso final, ponemos el relleno en la masa. Enseguida guardarlo de nuevo en el congelador para que se quede firme.",
            "Sacar los mochis del congelador cuando queráis servirlo y esperad unos minutos para comerlos. Disfrutad!",
          ]
        }
      ]
    }
  ]
})