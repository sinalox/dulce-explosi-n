import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Items = Record<string, number>;
const Ctx = createContext<{ items: Items; count: number; add: (id: string) => void }>({
  items: {}, count: 0, add: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Items>({});
  useEffect(() => {
    try { setItems(JSON.parse(localStorage.getItem("totowax-cart") || "{}")); } catch { /* noop */ }
  }, []);
  const add = (id: string) =>
    setItems((prev) => {
      const next = { ...prev, [id]: (prev[id] || 0) + 1 };
      localStorage.setItem("totowax-cart", JSON.stringify(next));
      return next;
    });
  const count = Object.values(items).reduce((a, b) => a + b, 0);
  return <Ctx.Provider value={{ items, count, add }}>{children}</Ctx.Provider>;
}

export const useCart = () => useContext(Ctx);
