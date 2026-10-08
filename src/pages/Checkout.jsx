import { useState } from "react";
import { Link } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import Features from "../components/Features";
import { ChevronDown } from "../components/Icons";
import { useStore } from "../context/StoreContext";
import { fmtRs } from "../utils/format";

const blank = { first: "", last: "", company: "", country: "Sri Lanka", street: "", city: "", province: "Western Province", zip: "", phone: "", email: "", info: "" };
const countries = ["Sri Lanka", "India", "United States"];
const provinces = ["Western Province", "Central Province", "Southern Province", "Northern Province"];
const methods = [["bank", "Direct Bank Transfer"], ["cod", "Cash On Delivery"]];

export default function Checkout() {
  const { cartItems, subtotal, clearCart } = useStore();
  const [form, setForm] = useState(blank);
  const [method, setMethod] = useState("bank");
  const [placed, setPlaced] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => { e.preventDefault(); setPlaced(true); clearCart(); setForm(blank); };

  const text = (label, k, { type = "text", required = true } = {}) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      <input id={k} type={type} required={required} value={form[k]} onChange={set(k)} />
    </div>
  );
  const select = (label, k, options) => (
    <div className="field">
      <label htmlFor={k}>{label}</label>
      <div className="select-wrap">
        <select id={k} value={form[k]} onChange={set(k)}>{options.map((o) => <option key={o}>{o}</option>)}</select>
        <ChevronDown size={16} color="#000" />
      </div>
    </div>
  );

  return (
    <>
      <PageBanner title="Checkout" />
      <section className="checkout">
        {placed ? (
          <div className="text-center py-5">
            <h2 className="checkout__title">Thank you!</h2>
            <p className="muted mt-3">Your order has been placed.</p>
            <Link to="/shop" className="btn-outline-gold">Continue shopping</Link>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="row g-4 g-lg-5">
              <div className="col-lg-6">
                <h1 className="checkout__title">Billing details</h1>
                <div className="row"><div className="col-6">{text("First Name", "first")}</div><div className="col-6">{text("Last Name", "last")}</div></div>
                {text("Company Name (Optional)", "company", { required: false })}
                {select("Country / Region", "country", countries)}
                {text("Street address", "street")}
                {text("Town / City", "city")}
                {select("Province", "province", provinces)}
                {text("ZIP code", "zip")}
                {text("Phone", "phone", { type: "tel" })}
                {text("Email address", "email", { type: "email" })}
                <div className="field field--gap"><input aria-label="Additional information" placeholder="Additional information" value={form.info} onChange={set("info")} /></div>
              </div>

              <div className="col-lg-6">
                <div className="order">
                  <div className="order__row order__head"><h3>Product</h3><h3>Subtotal</h3></div>
                  {cartItems.map(({ product: p, qty }) => (
                    <div className="order__row" key={p.id}>
                      <span className="muted">{p.name} <small>X {qty}</small></span><span>{fmtRs(p.price * qty)}</span>
                    </div>
                  ))}
                  <div className="order__row"><span>Subtotal</span><span>{fmtRs(subtotal)}</span></div>
                  <div className="order__row order__total"><span>Total</span><strong>{fmtRs(subtotal)}</strong></div>
                  <hr />
                  <div className="order__method">
                    <p><span className="dot dot--filled" />{methods.find(([k]) => k === method)[1]}</p>
                    {method === "bank" && <p className="order__desc muted">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>}
                  </div>
                  {methods.map(([k, label]) => (
                    <label className="order__radio" key={k}>
                      <input type="radio" name="payment" checked={method === k} onChange={() => setMethod(k)} /><span className="dot" />{label}
                    </label>
                  ))}
                  <p className="order__privacy">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
                  <div className="text-center"><button type="submit" className="btn-outline-dark-lg" disabled={!cartItems.length}>Place order</button></div>
                  {!cartItems.length && <p className="muted text-center mt-3">Your cart is empty. <Link to="/shop">Go to Shop</Link></p>}
                </div>
              </div>
            </div>
          </form>
        )}
      </section>
      <Features />
    </>
  );
}
