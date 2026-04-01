export type Lang = "es" | "en";

type MenuDish = {
  name: string;
};

type MenuSubCategory = {
  id: string;
  name: Record<Lang, string>;
  dishes: Record<Lang, MenuDish[]>;
};

type MenuCategory = {
  id: string;
  name: Record<Lang, string>;
  subCategories: MenuSubCategory[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    name: { es: "Entradas", en: "Starters" },
    subCategories: [
      {
        id: "cold-starters",
        name: { es: "Frías", en: "Cold" },
        dishes: {
          es: [
            { name: "Tabla de quesos" },
            { name: "Burrata con tomates confitados" },
            { name: "Focaccia con oliva y romero" },
            { name: "Anchoas con pan de masa madre" },
          ],
          en: [
            { name: "Cheese board" },
            { name: "Burrata with confit tomatoes" },
            { name: "Olive and rosemary focaccia" },
            { name: "Anchovies with sourdough bread" },
          ],
        },
      },
      {
        id: "hot-starters",
        name: { es: "Calientes", en: "Hot" },
        dishes: {
          es: [
            { name: "Provoleta de horno" },
            { name: "Bruschettas de la casa" },
            { name: "Milanesitas de mozzarella" },
            { name: "Papas rústicas con alioli" },
          ],
          en: [
            { name: "Oven-baked provolone" },
            { name: "House bruschettas" },
            { name: "Mozzarella bites" },
            { name: "Rustic potatoes with aioli" },
          ],
        },
      },
    ],
  },
  {
    id: "pizzas",
    name: { es: "Pizzas", en: "Pizzas" },
    subCategories: [
      {
        id: "classic-pizzas",
        name: { es: "Clásicas", en: "Classics" },
        dishes: {
          es: [
            { name: "Margarita" },
            { name: "Napolitana" },
            { name: "Fugazzeta" },
            { name: "Calabresa" },
          ],
          en: [
            { name: "Margherita" },
            { name: "Neapolitan" },
            { name: "Fugazzeta" },
            { name: "Calabrese" },
          ],
        },
      },
      {
        id: "special-pizzas",
        name: { es: "Especiales", en: "Specials" },
        dishes: {
          es: [
            { name: "Náutica Especial" },
            { name: "Cuatro Quesos" },
            { name: "Jamón Crudo y Rúcula" },
            { name: "Pesto y Stracciatella" },
          ],
          en: [
            { name: "Nautica Special" },
            { name: "Four Cheese" },
            { name: "Prosciutto and Arugula" },
            { name: "Pesto and Stracciatella" },
          ],
        },
      },
      {
        id: "pan-style-pizzas",
        name: { es: "Al Molde", en: "Pan Style" },
        dishes: {
          es: [
            { name: "Muzzarella al Molde" },
            { name: "Anchoas al Molde" },
            { name: "Fugazza Rellena al Molde" },
          ],
          en: [
            { name: "Pan-style Mozzarella" },
            { name: "Pan-style Anchovy" },
            { name: "Pan-style Stuffed Fugazza" },
          ],
        },
      },
    ],
  },
  {
    id: "empanadas",
    name: { es: "Empanadas", en: "Empanadas" },
    subCategories: [
      {
        id: "baked-empanadas",
        name: { es: "Al Horno", en: "Baked" },
        dishes: {
          es: [
            { name: "Carne cortada a cuchillo" },
            { name: "Jamón y queso" },
            { name: "Pollo al verdeo" },
            { name: "Caprese" },
          ],
          en: [
            { name: "Hand-cut beef" },
            { name: "Ham and cheese" },
            { name: "Chicken with spring onion" },
            { name: "Caprese" },
          ],
        },
      },
      {
        id: "fried-empanadas",
        name: { es: "Fritas", en: "Fried" },
        dishes: {
          es: [
            { name: "Carne picante" },
            { name: "Humita cremosa" },
            { name: "Roquefort y cebolla" },
          ],
          en: [
            { name: "Spicy beef" },
            { name: "Creamed corn" },
            { name: "Blue cheese and onion" },
          ],
        },
      },
    ],
  },
  {
    id: "drinks",
    name: { es: "Bebidas", en: "Drinks" },
    subCategories: [
      {
        id: "soft-drinks",
        name: { es: "Sin Alcohol", en: "Non-Alcoholic" },
        dishes: {
          es: [
            { name: "Limonada de la casa" },
            { name: "Gaseosas" },
            { name: "Aguas saborizadas" },
            { name: "Agua mineral" },
          ],
          en: [
            { name: "House lemonade" },
            { name: "Soft drinks" },
            { name: "Flavored waters" },
            { name: "Mineral water" },
          ],
        },
      },
      {
        id: "alcoholic-drinks",
        name: { es: "Con Alcohol", en: "Alcoholic" },
        dishes: {
          es: [
            { name: "Cerveza tirada" },
            { name: "Vino por copa" },
            { name: "Aperol Spritz" },
          ],
          en: [
            { name: "Draft beer" },
            { name: "Wine by the glass" },
            { name: "Aperol Spritz" },
          ],
        },
      },
    ],
  },
  {
    id: "desserts",
    name: { es: "Postres", en: "Desserts" },
    subCategories: [
      {
        id: "house-desserts",
        name: { es: "De la Casa", en: "House Desserts" },
        dishes: {
          es: [
            { name: "Tiramisú Náutica" },
            { name: "Flan casero" },
            { name: "Mousse de chocolate amargo" },
          ],
          en: [
            { name: "Nautica tiramisu" },
            { name: "House flan" },
            { name: "Dark chocolate mousse" },
          ],
        },
      },
    ],
  },
];
