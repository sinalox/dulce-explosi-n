import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail } from "lucide-react";
import { waLink } from "@/lib/products";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — TOTOWAX" },
      { name: "description", content: "Escríbenos por WhatsApp o correo. Respondemos rápido." },
      { property: "og:title", content: "Contacto — TOTOWAX" },
      { property: "og:description", content: "Habla con nosotros por WhatsApp o correo." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-4xl sm:text-5xl">¡Platiquemos!</h1>
      <p className="mt-3 text-lg text-muted-foreground">Dudas, pedidos especiales o solo antojo: estamos para ti.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={waLink} target="_blank" rel="noreferrer" className="btn btn-primary"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
        <a href="mailto:hola@totowax.mx" className="btn btn-mustard"><Mail className="h-5 w-5" /> hola@totowax.mx</a>
      </div>
    </div>
  ),
});
