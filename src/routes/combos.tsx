import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/combos")({
  head: () => ({
    meta: [
      { title: "Combos y cajas sorpresa — TOTOWAX" },
      { name: "description", content: "Combos de dulces enchilados con 15% de descuento y envío gratis." },
      { property: "og:title", content: "Combos y cajas sorpresa — TOTOWAX" },
      { property: "og:description", content: "15% de descuento + envío gratis en combos enchilados." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <span className="rounded-full bg-primary px-4 py-1 font-display font-bold text-primary-foreground">15% OFF + envío gratis</span>
      <h1 className="mt-4 text-4xl sm:text-5xl">Combos y cajas sorpresa</h1>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {products.filter((p) => p.category === "combos").map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  ),
});
