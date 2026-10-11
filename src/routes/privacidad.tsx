import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Aviso de privacidad — TOTOWAX" },
      { name: "description", content: "Cómo TOTOWAX protege y usa tus datos personales." },
      { property: "og:title", content: "Aviso de privacidad — TOTOWAX" },
      { property: "og:description", content: "Conoce cómo protegemos tus datos personales." },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-3xl space-y-4 px-4 py-12">
      <h1 className="text-4xl">Aviso de privacidad</h1>
      <p>TOTOWAX es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.</p>
      <p>Usamos tus datos (nombre, contacto y dirección) únicamente para procesar pedidos, envíos y atención al cliente. Puedes ejercer tus derechos ARCO escribiendo a hola@totowax.mx.</p>
    </div>
  ),
});
