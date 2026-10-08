import { createContext, useContext, useEffect, useState } from "react";
import { asgaardSofa, getProduct } from "../data/products";

const StoreContext = createContext(null);
export const useStore = () => useContext(StoreContext);

// small helper: read/write JSON from localStorage safely
const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }) {
  // Cart starts with the Asgaard sofa, exactly like the Cart / Checkout screens
  const [cart, setCart] = useState(() => load("furniro_cart", [{ id: asgaardSofa.id, qty: 1 }]));
  const [wishlist, setWishlist] = useState(() => load("furniro_wishlist", []));
  // Comparison starts with the two products shown on the Comparison screen
  const [compare, setCompare] = useState(() => load("furniro_compare", [100, 102]));
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => localStorage.setItem("furniro_cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("furniro_wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem("furniro_compare", JSON.stringify(compare)), [compare]);

  // ---- cart ----
  const addToCart = (id, qty = 1) =>
    setCart((items) =>
      items.some((i) => i.id === id)
        ? items.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
        : [...items, { id, qty }]
    );
  const removeFromCart = (id) => setCart((items) => items.filter((i) => i.id !== id));
  const updateQty = (id, qty) =>
    setCart((items) => items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty || 1) } : i)));
  const clearCart = () => setCart([]);

  const cartItems = cart
    .map((i) => ({ ...i, product: getProduct(i.id) }))
    .filter((i) => i.product);
  const subtotal = cartItems.reduce((sum, i) => sum + i.product.price * i.qty, 0);

  // ---- wishlist ----
  const toggleWishlist = (id) =>
    setWishlist((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]));

  // ---- compare (the design compares two products at a time) ----
  const addToCompare = (id) =>
    setCompare((list) => (list.includes(id) ? list : [...list.slice(-1), id]));
  const removeFromCompare = (id) => setCompare((list) => list.filter((x) => x !== id));

  return (
    <StoreContext.Provider
      value={{
        cartItems, subtotal, addToCart, removeFromCart, updateQty, clearCart,
        wishlist, toggleWishlist,
        compare, addToCompare, removeFromCompare,
        cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
