export type Lang = "es" | "en";

export type MenuDish = {
  name: string;
  detail?: string;
};

export type MenuSubCategory = {
  id: string;
  name: Record<Lang, string>;
  /** When true, subrubro title is not shown (flat platos under rubro). */
  hideHeading?: boolean;
  dishes: Record<Lang, MenuDish[]>;
};

export type MenuCategory = {
  id: string;
  name: Record<Lang, string>;
  subCategories: MenuSubCategory[];
};
