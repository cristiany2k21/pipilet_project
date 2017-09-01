import littleMan from '../../../../images/cook/pipilet_male.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/africa/algerie1.jpg';
import image2 from '../../../../images/cook/recipe/africa/algerie2.jpg';

export default ({
  flag: littleMan,
  title: "RECETAS ARGELINAS",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Dátiles rellenos de pasta de almendras",
      image: image,

      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "40 dátiles sin hueso (dependiendo del tamaño)",
            "150 gramos de almendra molida en polvo",
            "150 gramos de azúcar glas",
            "1 cuchara grande de margarina a temperaturaambiente",
            "Unas gotitas de agua de azahar",
            "1 clara de huevo",
            "50 gramos de azúcar normal (para decorar)",
            "colorante alimenticio (opcional)",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Preparación de la macedonia de frutas tropicales helada:",
          preparation: [
            "En un recipiente mezclamos la almendra molida con el azúcar glas y mezclamos.",
            "Añadimos la margarina, la clara de huevo y unas gotitas de agua de azahar al gusto. Mezclamos con las manos hasta obtener una pasta de almendras homogénea. (Mucha gente le pone colorantes alimentarios a la masa para hacer dátiles de distintos colores.",
            "Cogemos un poco de pasta de almendra y le damos la forma de un dátil.",
            "Abrimos el dátil y lo rellenamos con la pasta de almendras.",
            "Cuando los tengamos todos rellenos cogemos un cuchillo muy afilado y trazamos algunas estrías en la parte que sobresale de la pasta de dátil para decorarlo.",
            "Cuando estén todos decorados con estrías los pasamos por azúcar normal para decorarlos.",
          ]
        }
      ]
    },
    {
      title: "Tarta de galletas y chocolate",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "Un paquete de galletas redondas.",
            "100 grs de chocolate de cobertura.",
            "300 grs de mantequilla.",
            "150 grs de azúcar.",
            "2 huevos.",
            "50 grs de cacao en polvo",
          ],
        }
      ],
      sectionPreparation: [
        {
          title: "Receta:",
          preparation: [
            "1. Utilizar un molde de cristal.",
            "2. En un recipiente apto para microondas, derretir la mantequilla y el chocolate cortado en trozos hasta que se funda, retirar y añadir los huevos, el azúcar y el cacao en polvo. Batir bien.",
            "3. Poner una capa de esta mezcla en el fondo del molde cubrir con una capa de galletas, por capa así sucesivamente acabando con una capa de chocolate.",
            "4. Una vez terminada, ponerla en el frigorífico hasta que quede bien consistente.",
          ]
        }
      ]
    }
  ]
})