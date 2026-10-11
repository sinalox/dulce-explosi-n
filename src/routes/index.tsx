import { createFileRoute, Link } from "@tanstack/react-router";
import { Truck, Flame, ShieldCheck, MessageCircle, Star, ChevronDown } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { categories, products, mxn } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOTOWAX — Gomitas y dulces enchilados mexicanos" },
      { name: "description", content: "Gomitas enchiladas, dulces con chamoy, paletas y combos. Sabor auténtico y envíos a todo México." },
      { property: "og:title", content: "TOTOWAX — Gomitas y dulces enchilados mexicanos" },
      { property: "og:description", content: "Gomitas enchiladas, dulces con chamoy y combos con envío a todo México." },
    ],
  }),
  component: Index,
});

const reviews = [
  { name: "Daniela R.", city: "Guadalajara", text: "¡Las gomitas de mango están adictivas! Llegaron rapidísimo y bien empacadas.", stars: 5 },
  { name: "Jorge M.", city: "Monterrey", text: "El Fuego Extremo sí pica en serio. Ya es mi botana oficial para el fut.", stars: 5 },
  { name: "Ale P.", city: "CDMX", text: "Pedí la caja sorpresa para un cumpleaños y fue un éxito total.", stars: 5 },
  { name: "Luis H.", city: "Tijuana", text: "Buen precio en mayoreo y me atendieron súper bien por WhatsApp.", stars: 4 },
];

const faqs = [
  { q: "¿Hacen envíos a todo México?", a: "Sí, enviamos a toda la República por paquetería. El envío es gratis en compras mayores al monto indicado en la barra superior." },
  { q: "¿Cuánto tarda en llegar mi pedido?", a: "Entre 2 y 5 días hábiles en ciudades principales y de 5 a 8 días en zonas extendidas." },
  { q: "¿Qué formas de pago aceptan?", a: "Tarjeta de crédito o débito, pago en OXXO y transferencia bancaria." },
  { q: "¿Venden por mayoreo?", a: "¡Claro! Tenemos precios especiales para tiendas, eventos y revendedores. Llena el formulario en la sección Mayoreo." },
];

function Index() {
  const best = [...products].sort((a, b) => b.sales - a.sales).slice(0, 8);
  const combos = products.filter((p) => p.category === "combos");
  return (
    <>
      {/* Hero */}
      <section className="bg-hero relative overflow-hidden border-b-2 border-ink">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
          <div>
            <span className="wiggle inline-block rounded-full border-2 border-ink bg-card px-4 py-1 font-display text-sm font-semibold">🌶️ Hecho en México</span>
            <h1 className="mt-5 text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              Dulce que <span className="text-primary-foreground [text-shadow:3px_3px_0_var(--ink)]">pica</span>, sabor que enamora.
            </h1>
            <p className="mt-5 max-w-md text-lg text-ink/80">Gomitas enchiladas, chamoy y picositos para los que siempre quieren un poquito más de chile.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/tienda" className="btn btn-ink text-lg">Comprar ahora</Link>
              <Link to="/combos" className="btn bg-card text-lg">Ver combos</Link>
            </div>
          </div>
          <div className="relative">
            <img src={hero} alt="Gomitas enchiladas TOTOWAX con mango y sandía" width={1280} height={960}
              className="rotate-2 rounded-[2rem] border-2 border-ink shadow-[8px_8px_0_0_var(--ink)]" />
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl sm:text-4xl">Elige tu antojo</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-5">
          {categories.map((c) => (
            <Link key={c.slug} to="/tienda" search={{ cat: c.slug }} className="card-pop group overflow-hidden">
              <div className={`${c.color} aspect-square overflow-hidden`}>
                <img src={c.image} alt={c.name} loading="lazy" width={400} height={400}
                  className="h-full w-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-110" />
              </div>
              <p className="p-3 text-center font-display font-semibold leading-tight">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Más vendidos */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl">Más vendidos 🔥</h2>
          <Link to="/tienda" className="font-display font-semibold text-primary">Ver todo →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {best.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* Combos */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-ink bg-ink p-8 text-ink-foreground md:p-12">
          <span className="absolute right-6 top-6 rotate-6 rounded-full bg-primary px-4 py-2 font-display font-bold text-primary-foreground">¡OFERTA!</span>
          <h2 className="max-w-lg text-4xl text-secondary sm:text-5xl">15% de descuento + envío gratis</h2>
          <p className="mt-3 max-w-md opacity-80">En todos nuestros combos y cajas sorpresa. Perfectos para regalar, compartir o no compartir.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {combos.map((c) => (
              <div key={c.id} className="rounded-2xl bg-card p-4 text-card-foreground">
                <img src={c.image} alt={c.name} loading="lazy" width={400} height={300} className="aspect-[4/3] w-full rounded-xl object-cover" />
                <p className="mt-3 font-display font-semibold">{c.name}</p>
                <p><span className="font-display text-xl font-bold text-primary">{mxn(c.price)}</span>{" "}
                  {c.compareAt && <span className="text-sm text-muted-foreground line-through">{mxn(c.compareAt)}</span>}</p>
              </div>
            ))}
          </div>
          <Link to="/combos" className="btn btn-mustard mt-8">Ver todos los combos</Link>
        </div>
      </section>

      {/* Por qué */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-center text-3xl sm:text-4xl">¿Por qué TOTOWAX?</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: Truck, t: "Envíos a todo México", d: "De Tijuana a Cancún.", c: "bg-mango" },
            { icon: Flame, t: "Sabor auténtico", d: "Chile y chamoy de verdad.", c: "bg-sandia" },
            { icon: ShieldCheck, t: "Pago seguro", d: "Tarjeta, OXXO o transferencia.", c: "bg-limon" },
            { icon: MessageCircle, t: "Atención por WhatsApp", d: "Te respondemos rápido.", c: "bg-accent" },
          ].map(({ icon: I, t, d, c }) => (
            <div key={t} className="rounded-3xl border-2 border-ink bg-card p-5 text-center">
              <div className={`${c} mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-ink`}><I className="h-7 w-7 text-ink" /></div>
              <p className="mt-3 font-display text-lg font-semibold leading-tight">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reseñas */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl sm:text-4xl">Lo que dicen los enchilados</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure key={r.name} className="card-pop p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < r.stars ? "fill-secondary text-secondary" : "text-border"}`} />
                ))}
              </div>
              <blockquote className="mt-3">“{r.text}”</blockquote>
              <figcaption className="mt-4 font-display font-semibold">{r.name} <span className="font-sans text-sm font-normal text-muted-foreground">· {r.city}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="text-center text-3xl sm:text-4xl">Preguntas frecuentes</h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border-2 border-ink bg-card p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold">
                {f.q}<ChevronDown className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
