import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, products, type Spice } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type Search = { cat?: string; q?: string };

export const Route = createFileRoute("/tienda")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    cat: typeof s.cat === "string" ? s.cat : undefined,
    q: typeof s.q === "string" ? s.q : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Tienda — TOTOWAX dulces enchilados" },
      { name: "description", content: "Compra gomitas enchiladas, dulces con chamoy, paletas y botanas. Filtra por picante y precio." },
      { property: "og:title", content: "Tienda — TOTOWAX dulces enchilados" },
      { property: "og:description", content: "Todos nuestros dulces enchilados en un solo lugar." },
    ],
  }),
  component: Tienda,
});

const spices: Spice[] = ["Suave", "Medio", "Extra picoso"];
const chip = (on: boolean) =>
  `rounded-full border-2 border-ink px-4 py-1.5 font-display text-sm font-semibold transition-colors ${on ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"}`;

function Tienda() {
  const { cat, q } = Route.useSearch();
  const navigate = useNavigate({ from: "/tienda" });
  const [spice, setSpice] = useState<Spice | null>(null);
  const [max, setMax] = useState(600);
  const [sort, setSort] = useState("best");

  const list = useMemo(() => {
    const r = products.filter((p) =>
      (!cat || p.category === cat) && (!spice || p.spice === spice) && p.price <= max &&
      (!q || p.name.toLowerCase().includes(q.toLowerCase())));
    const s = {
      best: (a: typeof r[0], b: typeof r[0]) => b.sales - a.sales,
      asc: (a: typeof r[0], b: typeof r[0]) => a.price - b.price,
      desc: (a: typeof r[0], b: typeof r[0]) => b.price - a.price,
      new: (a: typeof r[0], b: typeof r[0]) => b.createdAt - a.createdAt,
    }[sort]!;
    return r.sort(s);
  }, [cat, q, spice, max, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-4xl sm:text-5xl">La tienda <span className="text-primary">🌶️</span></h1>
      {q && <p className="mt-2 text-muted-foreground">Resultados para “{q}”</p>}

      <div className="mt-6 space-y-4 rounded-3xl border-2 border-ink bg-card p-4 sm:p-6">
        <div className="flex flex-wrap gap-2">
          <button className={chip(!cat)} onClick={() => navigate({ search: { q } })}>Todos</button>
          {categories.map((c) => (
            <button key={c.slug} className={chip(cat === c.slug)} onClick={() => navigate({ search: { cat: c.slug, q } })}>{c.name}</button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-display font-semibold">Picante:</span>
          {spices.map((s) => (
            <button key={s} className={chip(spice === s)} onClick={() => setSpice(spice === s ? null : s)}>{s}</button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <label className="flex items-center gap-3 font-display font-semibold">
            Hasta ${max}
            <input type="range" min={40} max={600} step={10} value={max} onChange={(e) => setMax(+e.target.value)} className="accent-primary" />
          </label>
          <label className="flex items-center gap-2 font-display font-semibold">
            Ordenar:
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-full border-2 border-ink bg-background px-3 py-1.5 font-sans text-sm">
              <option value="best">Más vendidos</option>
              <option value="asc">Precio: menor a mayor</option>
              <option value="desc">Precio: mayor a menor</option>
              <option value="new">Novedades</option>
            </select>
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">{list.length} productos</p>
      <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {list.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
      {list.length === 0 && <p className="py-16 text-center font-display text-xl">No encontramos dulces con esos filtros 😢</p>}
    </div>
  );
}
