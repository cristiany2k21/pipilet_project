import littleGirl from '../../../../images/cook/pipilet_female.jpg';
import pipiletCooker from '../../../../images/pipilet-cooker.jpg';
import image from '../../../../images/cook/recipe/asia/arabia.jpg';
import image2 from '../../../../images/cook/recipe/asia/arabia2.jpg';

export default ({
  flag: littleGirl,
  title: "RECETAS DE ARABIA SAUDITA",
  imagePipilet: pipiletCooker,
  recipe: [
    {
      title: "Maskina.",
      image: image,

      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "2 vasos de harina.",
            "1 1/2 vaso de azúcar en polvo.",
            "1 vaso de nata.",
            "Frutos secos machacados",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Mezclar la harina con el azúcar y la nata.",
            "Untar el molde con aceite, poner la mezcla igualando la superficie, untarla con aceite y esparcir los frutos secos..",
            "Meter en horno a temperatura mediana..",
            "Servir fría."
          ]
        }
      ]
    },
    {
      title: "Mohalabeya de kamar el din",
      image: image2,
      sectionIngredient: [
        {
          title: "Ingredientes:",
          ingredient: [
            "1/2 kg de zanahoria.",
            "1/2 kg de zumo de naranja natural.",
            "2 vasos de agua.",
            "2 cucharadas grandes de maicena.",
            "Azúcar",
          ],
        },
      ],
      sectionPreparation: [
        {
          title: "Preparación:",
          preparation: [
            "Cocer la zanahoria, pelarla y batirla en la batidora con el zumo de naranja. Poner a fuego y endulzar con azúcar ( 3 cucharadas grandes ).",
            "Disolver la maicena en un poco de agua y echarla poco a poco moviendo el zumo hasta conseguir el espesor adecuado. Poner en platos y adornar con frutos secos y coco molido, dejar enfriar. Meter en frigorífico y servir fría.",
          ]
        }
      ]
    }
  ]
})