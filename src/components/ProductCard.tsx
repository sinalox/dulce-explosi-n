import { Star, Flame } from "lucide-react";
import { useState } from "react";
import { mxn, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

const badgeStyle: Record<string, string> = {
  Oferta: "bg-primary text-primary-foreground",
  Nuevo: "bg-limon text-ink",
  "Más vendido": "bg-secondary text-secondary-foreground",
  Agotado: "bg-ink text-ink-foreground",
};

export function SpiceMeter({ level }: { level: Product["spice"] }) {
  const n = level === "Suave" ? 1 : level === "Medio" ? 2 : 3;
  return (
    <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-primary" title={level}>
      {[1, 2, 3].map((i) => (
        <Flame key={i} className={`h-3.5 w-3.5 ${i <= n ? "fill-primary" : "opacity-25"}`} />
      ))}
      <span className="ml-1 text-muted-foreground">{level}</span>
    </span>
  );
}

export function ProductCard({ p }: { p: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const soldOut = p.badge === "Agotado";
  return (
    <article className="card-pop group flex flex-col overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img src={p.image} alt={p.name} loading="lazy" width={600} height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        {p.badge && (
          <span className={`absolute left-3 top-3 rounded-full px-3 py-1 font-display text-xs font-semibold ${badgeStyle[p.badge]}`}>
            {p.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <SpiceMeter level={p.spice} />
        <h3 className="text-base leading-tight sm:text-lg">{p.name}</h3>
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-secondary text-secondary" />
          <span className="font-semibold">{p.rating}</span>
          <span className="text-muted-foreground">({p.reviews})</span>
        </div>
        <div className="mt-auto flex items-baseline gap-2">
          <span className="font-display text-xl font-bold text-primary">{mxn(p.price)}</span>
          {p.compareAt && <span className="text-sm text-muted-foreground line-through">{mxn(p.compareAt)}</span>}
        </div>
        <button disabled={soldOut} onClick={() => { add(p.id); setAdded(true); setTimeout(() => setAdded(false), 1200); }}
          className="btn btn-primary btn-sm w-full">
          {soldOut ? "Agotado" : added ? "¡Agregado! 🌶️" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}
