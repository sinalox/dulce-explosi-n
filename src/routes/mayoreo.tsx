import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/mayoreo")({
  head: () => ({
    meta: [
      { title: "Mayoreo — TOTOWAX dulces enchilados" },
      { name: "description", content: "Precios especiales de mayoreo para tiendas, eventos y revendedores." },
      { property: "og:title", content: "Mayoreo — TOTOWAX" },
      { property: "og:description", content: "Vende dulces enchilados TOTOWAX en tu negocio." },
    ],
  }),
  component: Mayoreo,
});

const input = "w-full rounded-2xl border-2 border-ink bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";

function Mayoreo() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-2">
      <div>
        <h1 className="text-4xl sm:text-5xl">Vende <span className="text-primary">TOTOWAX</span> en tu negocio</h1>
        <p className="mt-4 text-lg text-muted-foreground">Precios especiales para tiendas, dulcerías, eventos y revendedores. Cuéntanos qué necesitas y te enviamos una cotización.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4 rounded-3xl border-2 border-ink bg-card p-6 shadow-[var(--shadow-hard)]">
        {sent ? (
          <p className="py-10 text-center font-display text-2xl">¡Gracias! 🌶️ Te contactaremos muy pronto.</p>
        ) : (
          <>
            <input required className={input} placeholder="Nombre" maxLength={100} />
            <input required className={input} placeholder="Teléfono" type="tel" maxLength={20} />
            <input required className={input} placeholder="Ciudad" maxLength={80} />
            <select required className={input} defaultValue="">
              <option value="" disabled>Cantidad aproximada</option>
              <option>10 – 50 kg</option><option>50 – 200 kg</option><option>Más de 200 kg</option>
            </select>
            <button className="btn btn-primary w-full">Solicitar cotización</button>
          </>
        )}
      </form>
    </div>
  );
}
