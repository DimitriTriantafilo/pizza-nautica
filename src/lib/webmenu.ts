import type { Lang, MenuCategory, MenuDish, MenuSubCategory } from "../data/menu";

/** Raw API types: [getwebmenu.php](https://www.ace-data.com.ar/capitel/DAOs/getwebmenu.php) */
type ApiPlato = {
  nombre: string;
  detalle: string;
};

type ApiSubRubro = {
  subrubro_id: number;
  subrubro: string;
  platos: ApiPlato[];
};

type ApiRubro = {
  rubro_id: number;
  rubro: string;
  platos?: ApiPlato[];
  subrubros?: ApiSubRubro[];
};

function bothLangs(text: string): Record<Lang, string> {
  const t = text.trim();
  return { es: t, en: t };
}

function mapPlato(p: ApiPlato): MenuDish {
  const name = p.nombre?.trim() ?? "";
  const d = p.detalle?.trim();
  return {
    name,
    ...(d ? { detail: d } : {}),
  };
}

function normalizeSubRubros(r: ApiRubro): MenuSubCategory[] {
  const list = r.subrubros ?? [];
  const sorted = [...list].sort((a, b) => a.subrubro_id - b.subrubro_id);
  return sorted
    .map((sr) => {
      const dishes = (sr.platos ?? []).map(mapPlato).filter((d) => d.name.length > 0);
      const sub: MenuSubCategory = {
        id: `subrubro-${r.rubro_id}-${sr.subrubro_id}`,
        name: bothLangs(sr.subrubro),
        dishes: { es: dishes, en: dishes },
      };
      return sub;
    })
    .filter((s) => s.dishes.es.length > 0);
}

function normalizeFlatPlatos(r: ApiRubro): MenuSubCategory[] {
  const dishes = (r.platos ?? []).map(mapPlato).filter((d) => d.name.length > 0);
  if (dishes.length === 0) return [];
  return [
    {
      id: `rubro-${r.rubro_id}-flat`,
      name: { es: "", en: "" },
      hideHeading: true,
      dishes: { es: dishes, en: dishes },
    },
  ];
}

/**
 * Maps API JSON to the menu shape used by MenuContent.
 * Rubros may have `platos` only, or `subrubros` with nested `platos` (e.g. Bebidas).
 */
export function normalizeWebMenuResponse(data: unknown): MenuCategory[] {
  if (!Array.isArray(data)) return [];

  const rubros = data as ApiRubro[];
  const sorted = [...rubros].sort((a, b) => a.rubro_id - b.rubro_id);

  return sorted
    .map((r): MenuCategory | null => {
      const subCategories =
        r.subrubros && r.subrubros.length > 0
          ? normalizeSubRubros(r)
          : normalizeFlatPlatos(r);

      if (subCategories.length === 0) return null;

      return {
        id: `rubro-${r.rubro_id}`,
        name: bothLangs(r.rubro),
        subCategories,
      };
    })
    .filter((c): c is MenuCategory => c !== null);
}

export const WEB_MENU_URL =
  "https://www.ace-data.com.ar/capitel/DAOs/getwebmenu.php" as const;
