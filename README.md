# Dulce Explosión

Crea una tienda en línea (ecommerce) para una marca mexicana de dulces y gomitas enchiladas llamada TOTOWAX . El sitio debe estar en español de México, ser mobile-first y verse divertido, llamativo y moderno.

ESTILO VISUAL
- Paleta: rojo chile, amarillo mostaza, naranja y negro/crema de fondo. Acentos de colores fruta (mango, sandía, tamarindo).
- Tipografía bold y redondeada para títulos, y una sans-serif limpia para el texto.
- Botones grandes y redondeados, tarjetas de producto con sombra suave y animación al pasar el cursor.
- Fotografía de producto grande sobre fondo limpio. Usa imágenes de ejemplo mientras tanto.

ESTRUCTURA DE LA PÁGINA DE INICIO
1. Barra superior con anuncio: "Envío gratis en compras mayores a $[MONTO] MXN".
2. Header con logo, menú (Inicio, Tienda, Combos, Mayoreo, Contacto), buscador e ícono de carrito con contador.
3. Hero con título llamativo, subtítulo y botón "Comprar ahora".
4. Categorías en tarjetas con imagen: Gomitas enchiladas, Dulces con chamoy, Paletas y picositos, Botanas dulces, Combos y cajas sorpresa.
5. Sección "Más vendidos" con 8 productos en cuadrícula.
6. Sección de Combos con descuento destacado (por ejemplo "15% de descuento + envío gratis") con una etiqueta roja de oferta.
7. Sección "Por qué elegirnos": envíos a todo México, sabor auténtico, pago seguro, atención por WhatsApp.
8. Reseñas de clientes con estrellas (usa 3 a 4 reseñas de ejemplo).
9. Preguntas frecuentes (envíos, tiempos, formas de pago, mayoreo).
10. Footer con redes sociales, WhatsApp, correo, aviso de privacidad y términos.

PÁGINA DE TIENDA
- Cuadrícula de productos con filtros por categoría, rango de precio y nivel de picante (Suave, Medio, Extra picoso).
- Ordenar por: más vendidos, precio menor a mayor, precio mayor a menor, novedades.
- Etiquetas en las tarjetas: "Oferta", "Nuevo", "Más vendido", "Agotado".
- Cada tarjeta muestra imagen, nombre, precio (con precio tachado si hay descuento), valoración y botón "Agregar al carrito".

PÁGINA DE PRODUCTO
- Galería de imágenes con zoom.
- Nombre, precio en MXN, valoración y descripción corta.
- Selector de variante: sabor (por ejemplo mango enchilado, sandía enchilada, tamarindo, piña con chile) y presentación (bolsa 250 g, 500 g, 1 kg).
- Indicador de nivel de picante.
- Selector de cantidad y botón grande "Agregar al carrito".
- Pestañas: Descripción, Ingredientes, Envíos, Reseñas.
- Sección "Productos relacionados".

CARRITO Y CHECKOUT
- Carrito lateral deslizable con resumen, cantidades editables y barra de progreso hacia el envío gratis.
- Campo de cupón de descuento.
- Checkout en una sola página con: datos de contacto, dirección de envío (estado, ciudad, colonia, código postal), método de envío y pago.
- Integración de pagos con Stripe (tarjeta) y opción de pago en OXXO o transferencia, si es posible.
- Página de confirmación de pedido con número de orden.

FUNCIONES EXTRA
- Botón flotante de WhatsApp en todas las páginas con el número [NÚMERO] y mensaje predefinido: "Hola, quiero información sobre sus dulces".
- Sección de mayoreo con formulario de contacto (nombre, teléfono, ciudad, cantidad aproximada).
- Banner de cookies y aviso de privacidad.
- SEO básico: títulos, descripciones y etiquetas Open Graph por página.
- Carga rápida e imágenes optimizadas.

BACKEND
- Usa Supabase para productos, categorías, variantes, pedidos, clientes y cupones.
- Panel de administración sencillo y protegido con login para agregar y editar productos, precios, stock y pedidos.

Empieza por la página de inicio y la tienda con productos de ejemplo, y después construimos el carrito y el checkout.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/706e912e-1227-465a-91d8-0b68882719db).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
