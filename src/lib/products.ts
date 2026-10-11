import gomitas from "@/assets/gomitas.jpg";
import chamoy from "@/assets/chamoy.jpg";
import paletas from "@/assets/paletas.jpg";
import hero from "@/assets/hero.jpg";

export const FREE_SHIPPING = 599;
export const WHATSAPP = "5215555555555";
export const WHATSAPP_MSG = "Hola, quiero información sobre sus dulces";

export type Spice = "Suave" | "Medio" | "Extra picoso";
export type Badge = "Oferta" | "Nuevo" | "Más vendido" | "Agotado";

export const categories = [
  { slug: "gomitas", name: "Gomitas enchiladas", image: gomitas, color: "bg-primary" },
  { slug: "chamoy", name: "Dulces con chamoy", image: chamoy, color: "bg-sandia" },
  { slug: "paletas", name: "Paletas y picositos", image: paletas, color: "bg-mango" },
  { slug: "botanas", name: "Botanas dulces", image: chamoy, color: "bg-accent" },
  { slug: "combos", name: "Combos y cajas sorpresa", image: hero, color: "bg-tamarindo" },
] as const;

export type Product = {
  id: string; name: string; category: string; price: number; compareAt?: number;
  rating: number; reviews: number; spice: Spice; badge?: Badge; image: string;
  sales: number; createdAt: number;
};

export const products: Product[] = [
  { id: "p1", name: "Gomitas Totowax Mango Enchilado", category: "gomitas", price: 129, compareAt: 159, rating: 4.9, reviews: 312, spice: "Medio", badge: "Más vendido", image: gomitas, sales: 980, createdAt: 1 },
  { id: "p2", name: "Aros de Sandía con Chamoy", category: "chamoy", price: 99, rating: 4.7, reviews: 188, spice: "Suave", badge: "Nuevo", image: chamoy, sales: 640, createdAt: 9 },
  { id: "p3", name: "Paleta Tamarindo Diablo", category: "paletas", price: 49, rating: 4.8, reviews: 221, spice: "Extra picoso", image: paletas, sales: 720, createdAt: 3 },
  { id: "p4", name: "Ositos Piña con Chile", category: "gomitas", price: 119, compareAt: 139, rating: 4.6, reviews: 97, spice: "Medio", badge: "Oferta", image: gomitas, sales: 510, createdAt: 4 },
  { id: "p5", name: "Mix Chamoyada Totowax", category: "chamoy", price: 149, rating: 4.9, reviews: 402, spice: "Medio", badge: "Más vendido", image: chamoy, sales: 1100, createdAt: 2 },
  { id: "p6", name: "Picositos de Mango", category: "paletas", price: 59, rating: 4.5, reviews: 76, spice: "Suave", image: paletas, sales: 300, createdAt: 6 },
  { id: "p7", name: "Cacahuates Enchilados Dulces", category: "botanas", price: 89, rating: 4.4, reviews: 64, spice: "Medio", badge: "Agotado", image: chamoy, sales: 260, createdAt: 5 },
  { id: "p8", name: "Gomitas Fuego Extremo", category: "gomitas", price: 139, rating: 4.8, reviews: 154, spice: "Extra picoso", badge: "Nuevo", image: gomitas, sales: 450, createdAt: 10 },
  { id: "p9", name: "Tiras de Tamarindo Enchiladas", category: "botanas", price: 79, compareAt: 95, rating: 4.6, reviews: 88, spice: "Medio", badge: "Oferta", image: chamoy, sales: 380, createdAt: 7 },
  { id: "p10", name: "Caja Sorpresa Totowax", category: "combos", price: 449, compareAt: 529, rating: 5, reviews: 210, spice: "Medio", badge: "Oferta", image: hero, sales: 800, createdAt: 8 },
  { id: "p11", name: "Combo Fiestero (6 bolsas)", category: "combos", price: 599, compareAt: 705, rating: 4.9, reviews: 132, spice: "Extra picoso", badge: "Oferta", image: hero, sales: 560, createdAt: 11 },
  { id: "p12", name: "Combo Suavecito para Niños", category: "combos", price: 349, compareAt: 410, rating: 4.7, reviews: 59, spice: "Suave", badge: "Oferta", image: hero, sales: 240, createdAt: 12 },
];

export const mxn = (n: number) =>
  new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);

export const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
