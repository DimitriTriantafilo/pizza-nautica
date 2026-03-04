export type Lang = "es" | "en";

type MenuItem = {
  name: string;
  description: string;
};

type MenuCategory = {
  id: "classics" | "specials" | "drinks";
  items: Record<Lang, MenuItem[]>;
};

export const menuCategories: MenuCategory[] = [
  {
    id: "classics",
    items: {
      es: [
        { name: "Margarita", description: "Tomate, mozzarella fresca, albahaca y oliva extra virgen." },
        { name: "Napolitana", description: "Salsa de tomate, mozzarella, ajo laminado y orégano." },
      ],
      en: [
        { name: "Margherita", description: "Tomato, fresh mozzarella, basil, and extra virgin olive oil." },
        { name: "Neapolitan", description: "Tomato sauce, mozzarella, sliced garlic, and oregano." },
      ],
    },
  },
  {
    id: "specials",
    items: {
      es: [
        { name: "Náutica Especial", description: "Quesos seleccionados, rúcula, jamón crudo y reducción balsámica." },
        { name: "Provoleta Ahumada", description: "Provoleta gratinada, cebolla caramelizada y toque ahumado." },
      ],
      en: [
        { name: "Nautica Special", description: "Selected cheeses, arugula, prosciutto, and balsamic glaze." },
        { name: "Smoked Provola", description: "Gratin provola, caramelized onion, and smoky finish." },
      ],
    },
  },
  {
    id: "drinks",
    items: {
      es: [
        { name: "Limonada de la Casa", description: "Limón natural, menta fresca y hielo." },
        { name: "Gaseosas y Aguas", description: "Variedad de bebidas sin alcohol para acompañar." },
      ],
      en: [
        { name: "House Lemonade", description: "Natural lemon, fresh mint, and ice." },
        { name: "Sodas and Water", description: "Selection of non-alcoholic beverages." },
      ],
    },
  },
];
