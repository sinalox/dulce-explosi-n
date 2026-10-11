import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones — TOTOWAX" },
      { name: "description", content: "Términos y condiciones de compra en la tienda TOTOWAX." },
      { property: "og:title", content: "Términos y condiciones — TOTOWAX" },
      { property: "og:description", content: "Condiciones de compra, envíos y devoluciones." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl space-y-4 px-4 py-12">
      <h1 className="text-4xl">Términos y condiciones</h1>
      <p>Los precios están expresados en pesos mexicanos (MXN) e incluyen IVA. Los envíos se realizan a toda la República Mexicana.</p>
      <p>Por tratarse de alimentos, no se aceptan devoluciones salvo que el producto llegue dañado. Contáctanos dentro de las 48 horas posteriores a la entrega.</p>
    </div>
  ),
});
