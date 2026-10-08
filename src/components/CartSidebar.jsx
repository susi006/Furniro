import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import { fmtRs } from "../utils/format";
import { CloseCircle, BagIcon } from "./Icons";

export default function CartSidebar() {
  const { cartOpen, closeCart, cartItems, removeFromCart, subtotal } = useStore();
  const navigate = useNavigate();
  const go = (to) => { closeCart(); navigate(to); };

  useEffect(() => {
    if (!cartOpen) return;
    const onKey = (e) => e.key === "Escape" && closeCart();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cartOpen, closeCart]);

  return (
    <div className={`cart-drawer ${cartOpen ? "is-open" : ""}`} aria-hidden={!cartOpen}>
      <div className="cart-drawer__backdrop" onClick={closeCart} />
      <aside className="cart-drawer__panel" aria-label="Shopping cart">
        <div className="cart-drawer__top">
          <div className="cart-drawer__head">
            <h2>Shopping Cart</h2>
            <button className="cart-drawer__close" onClick={closeCart} aria-label="Close cart"><BagIcon /></button>
          </div>
          <ul className="cart-drawer__list">
            {cartItems.length === 0 && <li className="muted">Your cart is empty.</li>}
            {cartItems.map(({ product: p, qty }) => (
              <li key={p.id} className="cart-item">
                <img src={p.img} alt={p.name} />
                <div className="cart-item__info">
                  <p className="cart-item__name">{p.name}</p>
                  <p className="cart-item__meta"><span>{qty}</span><span>X</span><b>{fmtRs(p.price)}</b></p>
                </div>
                <button className="cart-item__remove" onClick={() => removeFromCart(p.id)} aria-label={`Remove ${p.name}`}><CloseCircle /></button>
              </li>
            ))}
          </ul>
        </div>
        <div className="cart-drawer__bottom">
          <div className="cart-drawer__subtotal"><span>Subtotal</span><b>{fmtRs(subtotal)}</b></div>
          <div className="cart-drawer__buttons">
            <button onClick={() => go("/cart")}>Cart</button>
            <button onClick={() => go("/checkout")}>Checkout</button>
            <button onClick={() => go("/compare")}>Comparison</button>
          </div>
        </div>
      </aside>
    </div>
  );
}
