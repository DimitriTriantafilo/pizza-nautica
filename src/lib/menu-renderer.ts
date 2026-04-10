import type { Lang, MenuCategory, MenuSubCategory, MenuDish } from "../data/menu";

const ESC: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ESC[c] ?? c);
}

function dishHTML(dish: MenuDish, even: boolean): string {
  const border = even
    ? "border-[var(--ink-maroon)]/15"
    : "border-[var(--warm-ivory)]/20";
  const nameColor = even
    ? "text-[var(--ink-maroon)]"
    : "text-[var(--warm-ivory)]";
  const detailColor = even
    ? "text-[var(--ink-maroon)]/80"
    : "text-[var(--warm-ivory)]/65";

  return `<li class="border-b py-3 last:border-b-0 ${border}">
    <span class="block text-base font-medium md:text-lg text-pretty ${nameColor}">${esc(dish.name)}</span>
    ${dish.detail ? `<span class="mt-1 block text-sm leading-relaxed md:text-base text-pretty ${detailColor}">${esc(dish.detail)}</span>` : ""}
  </li>`;
}

function subCategoryHTML(
  sub: MenuSubCategory,
  lang: Lang,
  even: boolean,
): string {
  const headingColor = even
    ? "text-[var(--retro-muted-red)]"
    : "text-[var(--nautica-yellow)]";
  const show =
    !sub.hideHeading &&
    (sub.name.es.trim() !== "" || sub.name.en.trim() !== "");

  return `<article class="min-w-0 w-full">
    ${show ? `<h3 class="text-sm font-semibold uppercase tracking-[0.25em] ${headingColor}">${esc(sub.name[lang])}</h3>` : ""}
    <ul class="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-10 md:gap-y-0 ${show ? "mt-5" : "mt-0"}" role="list">
      ${sub.dishes[lang].map((d) => dishHTML(d, even)).join("")}
    </ul>
  </article>`;
}

function categoryHTML(
  cat: MenuCategory,
  idx: number,
  lang: Lang,
  veleroSrc: string,
): string {
  const even = idx % 2 === 0;
  const bg = even ? "bg-retro-pattern" : "bg-[var(--charcoal)]";
  const title = even
    ? "text-[var(--ink-maroon)]"
    : "text-[var(--warm-ivory)]";
  const line = even
    ? "bg-[var(--ink-maroon)]/25"
    : "bg-[var(--warm-ivory)]/30";
  const dot = even
    ? "bg-[var(--retro-muted-red)]"
    : "bg-[var(--nautica-yellow)]";

  const velero = !even
    ? `<img src="${esc(veleroSrc)}" alt="" aria-hidden="true"
        class="pointer-events-none absolute right-6 top-4 hidden h-auto w-40 select-none md:block xl:w-52"
        style="filter: brightness(0) invert(1) sepia(1) saturate(6) hue-rotate(-10deg) brightness(0.9);"
        loading="lazy" />`
    : "";

  return `<section id="${cat.id}"
    class="scroll-mt-[calc(var(--nav-height)+3.5rem)] relative z-20 overflow-hidden py-16 md:py-20 ${bg}">
    ${velero}
    <div class="container-shell-wide">
      <h2 class="mx-auto max-w-[min(100%,40rem)] text-center text-balance font-[var(--font-display)] text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight md:text-5xl ${title}">
        ${esc(cat.name[lang])}
      </h2>
      <div class="mx-auto mt-6 flex w-full max-w-xl items-center gap-3">
        <span class="h-px flex-1 ${line}"></span>
        <span class="h-2 w-2 rounded-full ${dot}"></span>
        <span class="h-px flex-1 ${line}"></span>
      </div>
      <div class="mt-12 flex flex-col gap-10">
        ${cat.subCategories.map((s) => subCategoryHTML(s, lang, even)).join("")}
      </div>
    </div>
  </section>`;
}

function navHTML(
  cats: MenuCategory[],
  lang: Lang,
  label: string,
): string {
  const items = cats
    .map(
      (c, i) =>
        `<li class="flex shrink-0 snap-start">
      <a href="#${c.id}"
        class="inline-flex max-w-[min(100vw-4rem,14rem)] items-center justify-center rounded-full border border-white/25 px-3 py-2 text-center text-[0.7rem] font-semibold uppercase leading-tight tracking-wide text-[var(--warm-ivory)] transition hover:border-[var(--nautica-yellow)] hover:text-[var(--nautica-yellow)] sm:max-w-none sm:px-4 sm:text-xs"
        ${i === 0 ? 'aria-current="location"' : ""}>
        ${esc(c.name[lang])}
      </a>
    </li>`,
    )
    .join("");

  return `<nav data-menu-rubro-nav
    class="menu-rubro-nav sticky z-40 -mt-px border-b border-white/10 border-t border-[var(--charcoal)] bg-[var(--charcoal)]/95 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
    aria-label="${esc(label)}">
    <div class="container-shell-wide py-3">
      <ul class="flex min-w-0 flex-nowrap items-stretch justify-start gap-2 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-wrap lg:justify-center lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
        ${items}
      </ul>
    </div>
  </nav>`;
}

export function renderMenuHTML(
  categories: MenuCategory[],
  lang: Lang,
  veleroSrc: string,
  navLabel: string,
): string {
  return (
    navHTML(categories, lang, navLabel) +
    categories.map((c, i) => categoryHTML(c, i, lang, veleroSrc)).join("")
  );
}
