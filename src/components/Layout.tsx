import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, X, MessageCircle, Instagram, Facebook, Mail } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { FREE_SHIPPING, mxn, waLink } from "@/lib/products";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/tienda", label: "Tienda" },
  { to: "/combos", label: "Combos" },
  { to: "/mayoreo", label: "Mayoreo" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/tienda", search: { q: q || undefined } });
    setOpen(false);
  };
  return (
    <>
      <div className="overflow-hidden bg-ink py-2 text-ink-foreground">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-sm font-medium">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>🌶️ Envío gratis en compras mayores a {mxn(FREE_SHIPPING)} MXN</span>
          ))}
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X /> : <Menu />}
          </button>
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            TOTO<span className="text-accent">WAX</span>
          </Link>
          <nav className="ml-6 hidden gap-6 lg:flex">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="font-display font-medium hover:text-primary"
                activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <form onSubmit={submit} className="ml-auto hidden items-center rounded-full border-2 border-ink bg-card px-3 md:flex">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar dulces…"
              className="w-44 bg-transparent px-2 py-2 text-sm outline-none" />
          </form>
          <Link to="/tienda" aria-label="Carrito" className="relative ml-auto rounded-full border-2 border-ink bg-secondary p-2 md:ml-0">
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-2 -top-2 grid h-6 min-w-6 place-items-center rounded-full bg-primary px-1 text-xs font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
        </div>
        {open && (
          <div className="border-t-2 border-ink px-4 pb-4 lg:hidden">
            <form onSubmit={submit} className="mt-3 flex items-center rounded-full border-2 border-ink bg-card px-3">
              <Search className="h-4 w-4" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar dulces…"
                className="w-full bg-transparent px-2 py-2 outline-none" />
            </form>
            <nav className="mt-3 flex flex-col">
              {nav.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-display text-lg">{n.label}</Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl font-bold text-secondary">TOTOWAX</p>
          <p className="mt-2 text-sm opacity-80">Dulces y gomitas enchiladas con sabor 100% mexicano.</p>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full bg-primary p-2"><Instagram className="h-5 w-5" /></a>
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full bg-primary p-2"><Facebook className="h-5 w-5" /></a>
            <a href="https://tiktok.com" aria-label="TikTok" className="rounded-full bg-primary px-3 py-2 font-display text-xs font-bold">TT</a>
          </div>
        </div>
        <div>
          <p className="font-display text-lg">Tienda</p>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><Link to="/tienda">Todos los productos</Link></li>
            <li><Link to="/combos">Combos</Link></li>
            <li><Link to="/mayoreo">Mayoreo</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><a href={waLink} className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
            <li><a href="mailto:hola@totowax.mx" className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hola@totowax.mx</a></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg">Legal</p>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><Link to="/privacidad">Aviso de privacidad</Link></li>
            <li><Link to="/terminos">Términos y condiciones</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-ink-foreground/15 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} TOTOWAX. Hecho con chile en México 🇲🇽</p>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a href={waLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border-2 border-ink bg-limon text-ink shadow-[var(--shadow-hard)] transition-transform hover:scale-110">
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { setShow(!localStorage.getItem("totowax-cookies")); }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-3 bottom-24 z-50 mx-auto max-w-xl rounded-2xl border-2 border-ink bg-card p-4 shadow-[var(--shadow-hard)] sm:bottom-5">
      <p className="text-sm">🍪 Usamos cookies para mejorar tu experiencia. Consulta nuestro{" "}
        <Link to="/privacidad" className="font-semibold text-primary underline">aviso de privacidad</Link>.</p>
      <button className="btn btn-primary btn-sm mt-3" onClick={() => { localStorage.setItem("totowax-cookies", "1"); setShow(false); }}>
        Aceptar
      </button>
    </div>
  );
}
