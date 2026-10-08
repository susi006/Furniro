import { Link, useNavigate } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Features from "../components/Features";
import { TrashIcon } from "../components/Icons";
import { useStore } from "../context/StoreContext";
import { fmtRs } from "../utils/format";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, subtotal } = useStore();
  const navigate = useNavigate();
  return (
    <>
      <PageBanner title="Cart" />
      <section className="cart-page">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="cart-table">
              <div className="cart-table__head"><span /><span className="c-name">Product</span><span>Price</span><span>Quantity</span><span>Subtotal</span></div>
              {cartItems.map(({ product: p, qty }) => (
                <div className="cart-row" key={p.id}>
                  <Link to={`/product/${p.id}`} className="c-img"><img src={p.img} alt={p.name} /></Link>
                  <span className="c-name">{p.name}</span>
                  <span className="c-price">{fmtRs(p.price)}</span>
                  <span className="c-qty"><input type="number" min="1" value={qty} aria-label={`Quantity of ${p.name}`} onChange={(e) => updateQty(p.id, Number(e.target.value))} /></span>
                  <span className="c-sub">{fmtRs(p.price * qty)}</span>
                  <button className="c-del" onClick={() => removeFromCart(p.id)} aria-label={`Remove ${p.name}`}><TrashIcon /></button>
                </div>
              ))}
              {cartItems.length === 0 && <p className="cart-table__empty">Your cart is empty. <Link to="/shop">Go to Shop</Link></p>}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cart-totals">
              <h2>Cart Totals</h2>
              <dl>
                <div><dt>Subtotal</dt><dd className="muted">{fmtRs(subtotal)}</dd></div>
                <div><dt>Total</dt><dd className="gold">{fmtRs(subtotal)}</dd></div>
              </dl>
              <button className="btn-outline-dark-lg" disabled={!cartItems.length} onClick={() => navigate("/checkout")}>Check Out</button>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
}
